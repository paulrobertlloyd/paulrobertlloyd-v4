/**
 * @namespace aria
 */
var aria = aria || {};

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
 * @param comboboxNode The DOM node pointing to the combobox
 * @param input The input node
 * @param listbox The listbox node to load results in
 * @param searchFn The search function. Accepts a search string and returns an
 *  array of results.
 */
aria.ListboxCombobox = function (
  comboboxNode,
  input,
  listbox,
  searchFn
) {
  this.combobox = comboboxNode;
  this.input = input;
  this.listbox = listbox;
  this.searchFn = searchFn;
  this.activeIndex = -1;
  this.resultsCount = 0;
  this.shown = false;

  this.setupEvents();
};

/**
 * @desc Setup events
 */
aria.ListboxCombobox.prototype.setupEvents = function () {
  document.body.addEventListener('click', this.checkHide.bind(this));
  this.input.addEventListener('blur', this.checkHide.bind(this));
  this.input.addEventListener('focus', this.checkShow.bind(this));
  this.input.addEventListener('keyup', this.checkKey.bind(this));
  this.input.addEventListener('keydown', this.setActiveOption.bind(this));
  this.input.addEventListener('keypress', function (event) {
    if (event.keyCode === aria.KeyCode.RETURN) {
      event.preventDefault();
    }
  });
};

/**
 * @desc Hide listbox on event
 * @param event Event
 */
aria.ListboxCombobox.prototype.checkHide = function (event) {
  if (event.target === this.input || this.combobox.contains(event.target)) {
    return;
  }
  this.hideListbox();
};

/**
 * @desc Show listbox on event
 * @param event Event
 */
aria.ListboxCombobox.prototype.checkShow = function (event) {
  this.updateResults();
};

/**
 * @desc Check key press and override defaults
 * @param event Event
 */
aria.ListboxCombobox.prototype.checkKey = function (event) {
  var key = event.which || event.keyCode;

  switch (key) {
    case aria.KeyCode.RETURN:
    case aria.KeyCode.ESC:
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
 * @param event Event
 */
aria.ListboxCombobox.prototype.setActiveOption = function (event) {
  var key = event.which || event.keyCode;
  var activeIndex = this.activeIndex;

  if (key === aria.KeyCode.ESC) {
    this.hideListbox();
    this.input.value = '';
    return;
  }

  var prevActive = this.getOptionAt(activeIndex);
  var activeOption;

  switch (key) {
    case aria.KeyCode.UP:
      if (activeIndex === 0) {
        return
      }
      else {
        activeIndex--;
      }
      break;
    case aria.KeyCode.DOWN:
      if (activeIndex === this.resultsCount - 1) {
        return
      }
      else {
        activeIndex++;
      }
      break;
    case aria.KeyCode.HOME:
      activeIndex = 0;
      break;
    case aria.KeyCode.END:
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
  }
  else {
    this.input.setAttribute('aria-activedescendant', '');
  }
};

/**
 * @desc Update listbox results
 */
aria.ListboxCombobox.prototype.updateResults = function () {
  var searchString = this.input.value;
  var results = this.searchFn(searchString);

  this.hideListbox();

  if (searchString.length > 0 && results.length) {
    for (var i = 0; i < results.length; i++) {
      var resultItem = document.createElement('li');
      resultItem.className = 'form__option';
      resultItem.setAttribute('role', 'option');
      resultItem.setAttribute('id', 'option-' + i);
      resultItem.dataset.value = results[i].value;
      resultItem.innerHTML = results[i].html;
      this.listbox.appendChild(resultItem);
    }
    this.listbox.hidden = false;
    this.combobox.setAttribute('aria-expanded', 'true');
    this.resultsCount = results.length;
    this.shown = true;

    // Override default link behaviour to close listbox prior to location change
    const listboxOptions = this.listbox.querySelectorAll('li');
    for (var i = 0; i < listboxOptions.length; i++) {
      listboxOptions[i].addEventListener('click', this.clickOption.bind(this));
    }
  }
};

/**
 * @desc Hide listbox
 */
aria.ListboxCombobox.prototype.hideListbox = function () {
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
 * @param option Selected option
 */
aria.ListboxCombobox.prototype.selectOption = function (option) {
  if (option) {
    var href = option.querySelector('a').getAttribute('href');
    document.location.href = href;
    this.hideListbox();
  }
};

/**
 * @desc Action to take when listbox option clicked
 */
aria.ListboxCombobox.prototype.clickOption = function () {
  this.focusOption(event.currentTarget);
  this.selectOption(event.currentTarget);
  event.preventDefault();
}

/**
 * @desc Get index value option at index
 * @param index Index
 */
aria.ListboxCombobox.prototype.getOptionAt = function (index) {
  return document.getElementById('option-' + index);
};

/**
 * @desc Focus on the specified item
 * @param element The element to focus
 */
aria.ListboxCombobox.prototype.focusOption = function (element) {
  element.setAttribute('aria-selected', 'true');
  this.input.setAttribute('aria-activedescendant', element.id);

  if (this.listbox.scrollHeight > this.listbox.clientHeight) {
    var scrollBottom = this.listbox.clientHeight + this.listbox.scrollTop;
    var elementBottom = element.offsetTop + element.offsetHeight;
    if (elementBottom > scrollBottom) {
      this.listbox.scrollTop = elementBottom - this.listbox.clientHeight;
    }
    else if (element.offsetTop < this.listbox.scrollTop) {
      this.listbox.scrollTop = element.offsetTop;
    }
  }
};

/**
 * @desc Defocus the specified item
 * @param element The element to defocus
 */
aria.ListboxCombobox.prototype.defocusOption = function (element) {
  if (!element) {
    return;
  }
  element.setAttribute('aria-selected', 'false');
};

module.exports = aria;
