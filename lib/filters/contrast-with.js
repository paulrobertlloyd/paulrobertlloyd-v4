import color from "color";

/**
 * Generate an accessible colour with sufficient contrast
 * @see {@link https://medium.com/confrere/e735c3f2f45e}
 * @param {string} string - Original colour
 * @param {string} value - Colour to mix original with to create new colour
 * @returns {string} RGB hex code, i.e. "#7f1de4"
 */
export default (string, value) => {
  const getValidatedColor = function ({
    colorToChange,
    colorToValidate = color("white"),
    minimumContrastRatio = 5,
    mixingColor,
    mixingAmount,
    tries = 0,
    maxTries = 8,
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
        tries: ++tries,
      });
    }

    return newColor;
  };

  const validColor = getValidatedColor({
    colorToChange: color(string),
    mixingColor: color(value),
    mixingAmount: 0.33,
  });

  return validColor.hex();
};
