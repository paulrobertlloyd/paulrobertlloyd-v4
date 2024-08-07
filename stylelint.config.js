export default {
  extends: "stylelint-config-standard",
  plugins: ["stylelint-order"],
  rules: {
    "order/properties-alphabetical-order": true,
    "selector-class-pattern": [
      "^(?<block>(?:[a-z][a-z0-9]*)(?:-[a-z0-9]+)*)(?<element>(?:__[a-z][a-z0-9]*(?:-[a-z0-9]+)*))?(?<modifier>(?:--[a-z][a-z0-9]*)(?:-[a-z0-9]+)*)?$",
      {
        resolveNestedSelectors: true,
      },
    ],
  },
};
