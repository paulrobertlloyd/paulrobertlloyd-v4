/**
 * @namespace aria
 */
const aria = {};

/**
 * @desc Key code constants
 */
aria.KeyCode = {
  BACKSPACE: 8,
  TAB: 9,
  RETURN: 13,
  ESC: 27,
  SPACE: 32,
  PAGE_UP: 33,
  PAGE_DOWN: 34,
  END: 35,
  HOME: 36,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  DELETE: 46
};

/**
 * @constructor
 *
 * @desc Combobox object representing the state and interactions for a combobox
 * @param {Object} comboboxNode The DOM node pointing to the combobox
 * @param {Object} inputNode The input node
 * @param {Function} searchFn Accepts a search string and returns an array
 */
aria.Combobox = function (
  comboboxNode,
  inputNode,
  searchFn
) {
  this.combobox = comboboxNode;
  this.input = inputNode;
  this.listbox = comboboxNode.querySelector('[role="listbox"]');
  this.status = comboboxNode.querySelector('[role="status"]');
  this.searchFn = searchFn;
  this.shouldAutoSelect = false;
  this.activeIndex = -1;
  this.resultsCount = 0;
  this.shown = false;

  this.setupEvents();
};

/**
 * @desc Setup events
 */
aria.Combobox.prototype.setupEvents = function () {
  document.body.addEventListener('click', this.checkHide.bind(this));
  this.input.addEventListener('blur', this.checkHide.bind(this));
  this.input.addEventListener('focus', this.checkShow.bind(this));
  this.input.addEventListener('keyup', this.checkKey.bind(this));
  this.input.addEventListener('keydown', this.setActiveOption.bind(this));
  this.input.addEventListener('keypress', event => {
    if (event.keyCode === aria.KeyCode.RETURN) {
      event.preventDefault();
    }
  });
};

/**
 * @desc Hide listbox on event
 * @param {Object} event Event
 */
aria.Combobox.prototype.checkHide = function (event) {
  if (event.target === this.input || this.combobox.contains(event.target)) {
    return;
  }
  this.hideListbox();
};

/**
 * @desc Show listbox on event
 */
aria.Combobox.prototype.checkShow = function () {
  this.updateResults();
};

/**
 * @desc Check key press and override defaults
 * @param {Object} event Event
 */
aria.Combobox.prototype.checkKey = function (event) {
  const key = event.which || event.keyCode;

  switch (key) {
    case aria.KeyCode.RETURN:
    case aria.KeyCode.ESC:
    case aria.KeyCode.PAGE_UP:
    case aria.KeyCode.PAGE_DOWN:
    case aria.KeyCode.END:
    case aria.KeyCode.HOME:
    case aria.KeyCode.UP:
    case aria.KeyCode.DOWN:
      event.preventDefault();
      return;
    default:
      this.updateResults();
  }
};

/**
 * @desc Highlight currently selected option
 * @param {Object} event Event
 */
aria.Combobox.prototype.setActiveOption = function (event) {
  const key = event.which || event.keyCode;
  let {activeIndex} = this;

  if (key === aria.KeyCode.ESC) {
    this.hideListbox();
    this.input.value = '';
    return;
  }

  const prevActive = this.getOptionAt(activeIndex);
  let activeOption;

  switch (key) {
    case aria.KeyCode.UP:
      if (activeIndex === 0) {
        // Enable focus to be drawn back up to search input
        this.defocusOption(prevActive);
        this.activeIndex = -1;
        this.input.setAttribute('aria-activedescendant', '');
        return;
      }
      activeIndex--;
      break;
    case aria.KeyCode.DOWN:
      if (activeIndex === this.resultsCount - 1) {
        return;
      }
      activeIndex++;
      break;
    case aria.KeyCode.HOME:
    case aria.KeyCode.PAGE_UP:
      activeIndex = 0;
      break;
    case aria.KeyCode.END:
    case aria.KeyCode.PAGE_DOWN:
      activeIndex = this.resultsCount - 1;
      break;
    case aria.KeyCode.RETURN:
      activeOption = this.getOptionAt(activeIndex);
      this.selectOption(activeOption);
      return;
    case aria.KeyCode.TAB:
      this.hideListbox();
      return;
    default:
      return;
  }

  event.preventDefault();

  activeOption = this.getOptionAt(activeIndex);
  this.activeIndex = activeIndex;

  if (prevActive) {
    this.defocusOption(prevActive);
  }

  if (activeOption) {
    this.focusOption(activeOption);
  } else {
    this.input.setAttribute('aria-activedescendant', '');
  }
};

/**
 * @desc Update listbox results
 */
aria.Combobox.prototype.updateResults = function () {
  const searchString = this.input.value;
  const results = this.searchFn(searchString);

  this.hideListbox();

  if (searchString.length > 0 && results.length > 0) {
    for (let i = 0; i < results.length; i++) {
      const resultItem = document.createElement('li');
      resultItem.setAttribute('id', 'option-' + i);
      resultItem.setAttribute('role', 'option');
      resultItem.setAttribute('tabindex', '-1');
      resultItem.dataset.value = results[i].value;
      resultItem.innerHTML = results[i].html;
      this.listbox.appendChild(resultItem);
      if (this.shouldAutoSelect && i === 0) {
        resultItem.setAttribute('aria-selected', 'true');
        this.activeIndex = 0;
      }
    }
    this.listbox.hidden = false;
    this.combobox.setAttribute('aria-expanded', 'true');
    this.resultsCount = results.length;
    this.shown = true;
    this.updateStatus(this.resultsCount);

    // Override default link behaviour to close listbox prior to location change
    const listboxOptions = this.listbox.querySelectorAll('li');
    for (let i = 0; i < listboxOptions.length; i++) {
      listboxOptions[i].addEventListener('click', this.clickOption.bind(this));
    }
  }
};

/**
 * @desc Update status region
 * @param {Number} resultsCount Number of returned results
 * @param {Object} activeOption HTML element
 */
aria.Combobox.prototype.updateStatus = function (resultsCount) {
  this.status.innerText = `${resultsCount} results are available.`;
};

/**
 * @desc Hide listbox
 */
aria.Combobox.prototype.hideListbox = function () {
  this.shown = false;
  this.activeIndex = -1;
  this.listbox.innerHTML = '';
  this.listbox.hidden = true;
  this.combobox.setAttribute('aria-expanded', 'false');
  this.resultsCount = 0;
  this.input.setAttribute('aria-activedescendant', '');
};

/**
 * @desc Action to take when listbox option selected
 * @param {Object} element HTML element
 */
aria.Combobox.prototype.selectOption = function (element) {
  if (element) {
    const href = element.querySelector('a').getAttribute('href');
    document.location.href = href;
    this.hideListbox();
  }
};

/**
 * @desc Action to take when listbox option clicked
 * @param {Object} event Event
 */
aria.Combobox.prototype.clickOption = function (event) {
  this.focusOption(event.currentTarget);
  this.selectOption(event.currentTarget);
  event.preventDefault();
};

/**
 * @desc Get option at index
 * @param {Number} index Index
 * @returns {Object} element HTML element
 */
aria.Combobox.prototype.getOptionAt = function (index) {
  return document.getElementById('option-' + index);
};

/**
 * @desc Get index of option
 * @param {Object} element HTML element
 * @returns {Number} Index
 */
aria.Combobox.prototype.getIndexOf = function (element) {
  const id = element.id.replace('option-', '');
  return Number(id) + 1;
};

/**
 * @desc Focus on the specified item
 * @param {Object} element HTML element
 */
aria.Combobox.prototype.focusOption = function (element) {
  element.setAttribute('aria-selected', 'true');
  this.input.setAttribute('aria-activedescendant', element.id);
  // This makes no sense, but without updating the status region (and as
  // this.resultsCount has not changed, no new status is announced), Safari
  // will refuse to apply focus to selected option.
  this.updateStatus(this.resultsCount);

  if (this.listbox.scrollHeight > this.listbox.clientHeight) {
    const scrollBottom = this.listbox.clientHeight + this.listbox.scrollTop;
    const elementBottom = element.offsetTop + element.offsetHeight;
    if (elementBottom > scrollBottom) {
      this.listbox.scrollTop = elementBottom - this.listbox.clientHeight;
    } else if (element.offsetTop < this.listbox.scrollTop) {
      this.listbox.scrollTop = element.offsetTop;
    }
  }
};

/**
 * @desc Defocus the specified item
 * @param {Object} element HTML element
 */
aria.Combobox.prototype.defocusOption = function (element) {
  if (!element) {
    return;
  }
  element.setAttribute('aria-selected', 'false');
};

module.exports = aria;
