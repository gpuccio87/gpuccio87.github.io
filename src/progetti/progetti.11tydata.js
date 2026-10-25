const lingue = require("../_data/lingue.js");

// The language comes from the folder: progetti/it/, progetti/en/, ...
const lingua = (data) => lingue.find((l) => data.page.inputPath.includes(`/progetti/${l.code}/`)) || lingue[0];

module.exports = {
  tags: ["progetti"],
  layout: "layouts/project.njk",
  eleventyExcludeFromCollections: false,
  eleventyComputed: {
    lang: (data) => lingua(data).code,
  },
  permalink: (data) => `${lingua(data).prefix}portfolio-${data.order}.html`,
};
