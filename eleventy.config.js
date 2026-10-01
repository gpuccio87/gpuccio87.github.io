const yaml = require("js-yaml");

module.exports = function (eleventyConfig) {
  // File dati in YAML (src/_data/*.yml)
  eleventyConfig.addDataExtension("yml,yaml", (contents) => yaml.load(contents));

  // Asset statici copiati così come sono
  for (const p of ["css", "js", "img", "fonts", "articles", "thesis", "favicon.ico", "favicon.jpg", "vcard.vcf", "qr-code.png", "admin/config.yml"]) {
    eleventyConfig.addPassthroughCopy(`src/${p}`);
  }

  // Testo con righe vuote -> paragrafi <p>
  eleventyConfig.addFilter("paragraphs", (text) =>
    String(text || "")
      .split(/\n\s*\n/)
      .map((p) => p.trim())
      .filter(Boolean)
      .map((p) => `<p>${p}</p>`)
      .join("\n")
  );

  // Progetti del portfolio, ordinati per campo "order"
  eleventyConfig.addCollection("progetti", (api) =>
    api.getFilteredByTag("progetti").sort((a, b) => a.data.order - b.data.order)
  );
  // Post del blog, ordinati per campo "order"
  eleventyConfig.addCollection("posts", (api) =>
    api.getFilteredByTag("posts").sort((a, b) => a.data.order - b.data.order)
  );

  return {
    dir: { input: "src", output: "_site", includes: "_includes", data: "_data" },
    htmlTemplateEngine: false,
    markdownTemplateEngine: "njk",
  };
};
