const color = require('color');

/**
 * Generate an accessible color with sufficent contrast
 * https://medium.com/confrere/e735c3f2f45e
 *
 * @param {String} str Original colour
 * @param {String} value Color to mix original with to create new color
 * @return {String} RGB hex code, i.e. "#7f1de4"
 *
 */
module.exports = function (str, value) {
  function getValidatedColor({
    colorToChange,
    colorToValidate = color('white'),
    minimumContrastRatio = 5,
    mixingColor,
    mixingAmount,
    tries = 0,
    maxTries = 8
  }) {
    const newColor = colorToChange.mix(mixingColor, mixingAmount);
    if (
      newColor.contrast(colorToValidate) < minimumContrastRatio &&
      tries < maxTries
    ) {
      return getValidatedColor({
        colorToChange: newColor,
        mixingColor,
        mixingAmount: 0.1,
        tries: ++tries
      });
    }
    return newColor;
  }

  const validColor = getValidatedColor({
    colorToChange: color(str),
    mixingColor: color(value),
    mixingAmount: 0.33
  });

  return validColor.hex();
};
