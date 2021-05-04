const pluginSass = require("eleventy-plugin-sass");
const eleventyGoogleFonts = require("eleventy-google-fonts");
module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(pluginSass);
    eleventyConfig.addPlugin(eleventyGoogleFonts);
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("admin");
  };