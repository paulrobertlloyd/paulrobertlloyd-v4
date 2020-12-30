export default aria;

/**
 * @namespace aria
 */
const aria = {};

/**
 * @description Key code constants
 */
aria.key = {
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
 * @class
 *
 * @description Combobox object representing the state and interactions for a combobox
 * @param {object} comboboxNode The DOM node pointing to the combobox
 * @param {object} inputNode The input node
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
 * @description Setup events
 */
aria.Combobox.prototype.setupEvents = function () {
  document.body.addEventListener('click', this.checkHide.bind(this));
  this.input.addEventListener('blur', this.checkHide.bind(this));
  this.input.addEventListener('focus', this.checkShow.bind(this));
  this.input.addEventListener('keyup', this.checkKey.bind(this));
  this.input.addEventListener('keydown', this.setActiveOption.bind(this));
  this.input.addEventListener('keypress', event => {
    if (event.key === aria.key.RETURN) {
      event.preventDefault();
    }
  });
};

/**
 * @description Hide listbox on event
 * @param {object} event Event
 */
aria.Combobox.prototype.checkHide = function (event) {
  if (event.target === this.input || this.combobox.contains(event.target)) {
    return;
  }

  this.hideListbox();
};

/**
 * @description Show listbox on event
 */
aria.Combobox.prototype.checkShow = function () {
  this.updateResults();
};

/**
 * @description Check key press and override defaults
 * @param {object} event Event
 */
aria.Combobox.prototype.checkKey = function (event) {
  const key = event.which || event.key;

  switch (key) {
    case aria.key.RETURN:
    case aria.key.ESC:
    case aria.key.PAGE_UP:
    case aria.key.PAGE_DOWN:
    case aria.key.END:
    case aria.key.HOME:
    case aria.key.UP:
    case aria.key.DOWN:
      event.preventDefault();
      return;
    default:
      this.updateResults();
  }
};

/**
 * @description Highlight currently selected option
 * @param {object} event Event
 */
aria.Combobox.prototype.setActiveOption = function (event) {
  const key = event.which || event.key;
  let {activeIndex} = this;

  if (key === aria.key.ESC) {
    this.hideListbox();
    this.input.value = '';
    return;
  }

  const previousActive = this.getOptionAt(activeIndex);
  let activeOption;

  switch (key) {
    case aria.key.UP:
      if (activeIndex === 0) {
        // Enable focus to be drawn back up to search input
        this.defocusOption(previousActive);
        this.activeIndex = -1;
        this.input.setAttribute('aria-activedescendant', '');
        return;
      }

      activeIndex--;
      break;
    case aria.key.DOWN:
      if (activeIndex === this.resultsCount - 1) {
        return;
      }

      activeIndex++;
      break;
    case aria.key.HOME:
    case aria.key.PAGE_UP:
      activeIndex = 0;
      break;
    case aria.key.END:
    case aria.key.PAGE_DOWN:
      activeIndex = this.resultsCount - 1;
      break;
    case aria.key.RETURN:
      activeOption = this.getOptionAt(activeIndex);
      this.selectOption(activeOption);
      return;
    case aria.key.TAB:
      this.hideListbox();
      return;
    default:
      return;
  }

  event.preventDefault();

  activeOption = this.getOptionAt(activeIndex);
  this.activeIndex = activeIndex;

  if (previousActive) {
    this.defocusOption(previousActive);
  }

  if (activeOption) {
    this.focusOption(activeOption);
  } else {
    this.input.setAttribute('aria-activedescendant', '');
  }
};

/**
 * @description Update listbox results
 */
aria.Combobox.prototype.updateResults = function () {
  const searchString = this.input.value;
  const results = this.searchFn(searchString);

  this.hideListbox();

  if (searchString.length > 0 && results.length > 0) {
    for (const [i, result] of results.entries()) {
      const resultItem = document.createElement('li');
      resultItem.setAttribute('id', 'option-' + i);
      resultItem.setAttribute('role', 'option');
      resultItem.setAttribute('tabindex', '-1');
      resultItem.dataset.value = result.value;
      resultItem.innerHTML = result.html;
      this.listbox.append(resultItem);
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
    for (const listboxOption of listboxOptions) {
      listboxOption.addEventListener('click', this.clickOption.bind(this));
    }
  }
};

/**
 * @description Update status region
 * @param {number} resultsCount Number of returned results
 */
aria.Combobox.prototype.updateStatus = function (resultsCount) {
  this.status.textContent = `${resultsCount} results are available.`;
};

/**
 * @description Hide listbox
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
 * @description Action to take when listbox option selected
 * @param {object} element HTML element
 */
aria.Combobox.prototype.selectOption = function (element) {
  if (element) {
    const href = element.querySelector('a').getAttribute('href');
    document.location.href = href;
    this.hideListbox();
  }
};

/**
 * @description Action to take when listbox option clicked
 * @param {object} event Event
 */
aria.Combobox.prototype.clickOption = function (event) {
  this.focusOption(event.currentTarget);
  this.selectOption(event.currentTarget);
  event.preventDefault();
};

/**
 * @description Get option at index
 * @param {number} index Index
 * @returns {object} element HTML element
 */
aria.Combobox.prototype.getOptionAt = function (index) {
  return document.querySelector('#option-' + index);
};

/**
 * @description Get index of option
 * @param {object} element HTML element
 * @returns {number} Index
 */
aria.Combobox.prototype.getIndexOf = function (element) {
  const id = element.id.replace('option-', '');
  return Number(id) + 1;
};

/**
 * @description Focus on the specified item
 * @param {object} element HTML element
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
 * @description Defocus the specified item
 * @param {object} element HTML element
 */
aria.Combobox.prototype.defocusOption = function (element) {
  if (!element) {
    return;
  }

  element.setAttribute('aria-selected', 'false');
};
