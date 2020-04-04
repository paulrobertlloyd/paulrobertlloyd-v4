const color = require('color');

/**
 * Generate an accessible colour with sufficent contrast
 * https://medium.com/confrere/e735c3f2f45e
 *
 * @param {String} string Original colour
 * @param {String} value Colour to mix original with to create new colour
 * @return {String} RGB hex code, i.e. "#7f1de4"
 */
module.exports = (string, value) => {
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
    colorToChange: color(string),
    mixingColor: color(value),
    mixingAmount: 0.33
  });

  return validColor.hex();
};
