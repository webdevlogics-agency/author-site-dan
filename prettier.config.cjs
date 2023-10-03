/** @type {import("prettier").Config} */
const config = {
  plugins: [
    require.resolve("prettier-plugin-astro"),
    require.resolve("prettier-plugin-tailwindcss"),
  ],
  pluginSearchDirs: false,
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
};

module.exports = config;
