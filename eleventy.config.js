const yaml = require("js-yaml");

module.exports = function (eleventyConfig) {
  // File dati in YAML (src/_data/*.yml)
  eleventyConfig.addDataExtension("yml,yaml", (contents) => yaml.load(contents));

  // Anno corrente, per il copyright ({anno} in site.yml)
  eleventyConfig.addGlobalData("anno", new Date().getFullYear());

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
  // Post del blog, dal più recente (campo "order" più alto)
  eleventyConfig.addCollection("posts", (api) =>
    api.getFilteredByTag("posts").sort((a, b) => b.data.order - a.data.order)
  );

  // Only the items of one language, e.g. collections.progetti | inLingua(lang)
  eleventyConfig.addFilter("inLingua", (items, lang) => (items || []).filter((i) => (i.data.lang || "it") === lang));

  // File name of a page URL: "/en/portfolio-17.html" -> "portfolio-17.html".
  // Links between pages stay relative, so they remain inside the same language.
  eleventyConfig.addFilter("nomefile", (url) => String(url || "").split("/").pop());

  // URL of the same page in another language: "/en/blog-post-3.html" -> "/de/blog-post-3.html"
  eleventyConfig.addFilter("inAltraLingua", (url, prefix) => "/" + prefix + String(url || "").split("/").pop());

  // Assets (img/, css/, ...) are written as relative paths in templates and content.
  // The pages of the other languages live one folder down (/en/, /es/, ...), so every
  // asset path is made absolute here, on the finished HTML.
  const ASSET = "(?:img|css|js|fonts|articles|thesis)/|favicon\\.|vcard\\.vcf|qr-code\\.png";
  const attributi = new RegExp(`((?:src|href|data-[\\w-]+)=["'])(?=${ASSET})`, "g");
  const stili = new RegExp(`(url\\(["']?)(?=${ASSET})`, "g");
  eleventyConfig.addTransform("percorsi-assoluti", function (content) {
    if (!(this.page.outputPath || "").endsWith(".html")) return content;
    return content.replace(attributi, "$1/").replace(stili, "$1/");
  });

  return {
    dir: { input: "src", output: "_site", includes: "_includes", data: "_data" },
    htmlTemplateEngine: false,
    markdownTemplateEngine: "njk",
  };
};
