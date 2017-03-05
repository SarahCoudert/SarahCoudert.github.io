// Syntax:
// tag: [words]
var mimeDB = {
  animaux: [
    'chat',
    'chien',
  ],
  metiers: [
    'électricien',
    'maçon',
  ],
  actions: [
    'faire la vaisselle',
    'conduire une voiture',
  ],
  objets: [
    'cuillère',
    'fourchette',
  ],
  celebrites: [
    'Mickael Jackson',
    'JK Rowling',
  ],
  fiction: [
    'Harry Potter',
    'Ron Weasley',
  ],
  geographie: [
    'Japon',
    'Inde',
  ],
  dbz: [
    'Tortue géniale',
    'Son Goku',
  ],
}

// Syntax:
// cateogry: [tags]
var categories = {
  "toutpublic" : ["animaux", "metiers", "actions", "objets", "celebrites", "fiction", "geographie"],
  "animaux" : ["animaux"],
  "metiers" : ["metiers"],
  "dragonball" : ["dbz"],
  "actions" : ["actions"],
  "culture" : ["celebrites", "fiction"]
}

// Remove duplicated values from array
function uniq(a) {
  return a.filter(function(elem, pos) {
    return a.indexOf(elem) == pos;
  });
};


function makeWordsInCategory(category) {
  var result = []
  var i
  var tags = categories[category]
  tags.forEach(function(tag) {
    result = result.concat(mimeDB[tag])
  })
  result = uniq(result)
  result = result.map(function(word) {
    return word.toUpperCase()
  })
  return result
}

var wordsByCategory = {}
for (category in categories) {
  wordsByCategory[category] = makeWordsInCategory(category)
}
