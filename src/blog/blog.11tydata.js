module.exports = {
  tags: ["posts"],
  layout: "layouts/post.njk",
  permalink: (data) => `blog-post-${data.order}.html`,
};
