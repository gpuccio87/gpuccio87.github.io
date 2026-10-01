module.exports = {
  tags: ["progetti"],
  layout: "layouts/project.njk",
  permalink: (data) => `portfolio-${data.order}.html`,
  eleventyExcludeFromCollections: false,
};
