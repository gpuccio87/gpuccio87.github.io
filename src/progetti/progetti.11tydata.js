const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const lingue = require("../_data/lingue.js");

// The language comes from the folder: progetti/it/, progetti/en/, ...
const lingua = (data) => lingue.find((l) => data.page.inputPath.includes(`/progetti/${l.code}/`)) || lingue[0];

// The carousel images are shared by all languages: the admin panel saves them only in the
// Italian file, so a translated project takes them from the Italian project with the same number.
const cartellaIt = path.join(__dirname, "it");
function immaginiItaliane(order) {
  for (const f of fs.readdirSync(cartellaIt)) {
    const dati = matter(fs.readFileSync(path.join(cartellaIt, f), "utf8")).data;
    if (dati.order === order) return dati.images;
  }
  return [];
}

module.exports = {
  tags: ["progetti"],
  layout: "layouts/project.njk",
  eleventyExcludeFromCollections: false,
  eleventyComputed: {
    lang: (data) => lingua(data).code,
    images: (data) => (data.images && data.images.length ? data.images : immaginiItaliane(data.order)),
  },
  permalink: (data) => `${lingua(data).prefix}portfolio-${data.order}.html`,
};
