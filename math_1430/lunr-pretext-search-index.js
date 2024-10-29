var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  copyright  "
},
{
  "id": "sec-constant-rates-of-change",
  "level": "1",
  "url": "sec-constant-rates-of-change.html",
  "type": "Section",
  "number": "1.1",
  "title": "Modeling with constant rates of change",
  "body": " Modeling with constant rates of change  Words and more words  "
},
{
  "id": "sec-constant-relative-rates",
  "level": "1",
  "url": "sec-constant-relative-rates.html",
  "type": "Section",
  "number": "1.2",
  "title": "Modeling with constant relative rates",
  "body": " Modeling with constant relative rates  The words keep growing   Title of an exercise  Statement of the exercise   Exercise without a statement   "
},
{
  "id": "exercises-constant-relative-rates-1",
  "level": "2",
  "url": "sec-constant-relative-rates.html#exercises-constant-relative-rates-1",
  "type": "Exercise",
  "number": "1.2.1",
  "title": "Title of an exercise.",
  "body": "Title of an exercise  Statement of the exercise  "
},
{
  "id": "exercises-constant-relative-rates-2",
  "level": "2",
  "url": "sec-constant-relative-rates.html#exercises-constant-relative-rates-2",
  "type": "Exercise",
  "number": "1.2.2",
  "title": "",
  "body": "Exercise without a statement "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
