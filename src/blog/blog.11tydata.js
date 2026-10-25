const lingue = require("../_data/lingue.js");

// The language comes from the folder: blog/it/, blog/en/, ...
const lingua = (data) => lingue.find((l) => data.page.inputPath.includes(`/blog/${l.code}/`)) || lingue[0];

module.exports = {
  tags: ["posts"],
  layout: "layouts/post.njk",
  eleventyComputed: {
    lang: (data) => lingua(data).code,
  },
  permalink: (data) => `${lingua(data).prefix}blog-post-${data.order}.html`,
};
