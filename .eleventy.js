module.exports = function(eleventyConfig) {
  // Allow permalinks without file extensions (like Jekyll)
  eleventyConfig.configureErrorReporting({ allowMissingExtensions: true });

  // Copy static assets
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("CNAME");
  eleventyConfig.addPassthroughCopy("*.pdf");
  eleventyConfig.addPassthroughCopy(".nojekyll");

  // Watch for changes in these directories
  eleventyConfig.addWatchTarget("./_sass/");

  // Ignore some non-template files
  eleventyConfig.ignores.add("README.md");
  eleventyConfig.ignores.add("CLAUDE.md");

  // Set Liquid options to be more compatible with Jekyll
  eleventyConfig.setLiquidOptions({
    dynamicPartials: true,
    strictFilters: false,
    root: ["_includes", "_layouts"]
  });

  return {
    // Use Liquid for templating
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "liquid",

    // Match Jekyll's directory structure
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data"
    }
  };
};
