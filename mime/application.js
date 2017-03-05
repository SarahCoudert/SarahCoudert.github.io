// Syntax:
// tag: [words]
var mimeDB = {
  animaux: [
    'Baleines',
    'Cachalots',
    'Dauphins',
    'Lamantins',
    'Morse',
    'Narvals',
    'Orques',
    'Otarie',
    'Phoques',
    'Caribou',
    'Cerf',
    'Chevreuils',
    'Élans',
    'Anes',
    'Chats',
    'Chevaux',
    'Chien',
    'Mouton',
    'Vaches',
    'Guépard',
    'Jaguar',
    'Léopards',
    'Lions',
    'Sphynx',
    'Tigre',
    'Alpaga',
    'Antilope',
    'Blaireau',
    'Boeuf',
    'Chacal',
    'Chameaux',
    'Chamois',
    'Chauve souris',
    'Chèvre',
    'Cochons',
    'Coyote',
    'Dromadaires',
    'Eléphant',
    'Fouines',
    'Furets',
    'Gazelles',
    'Girafes',
    'Grizzly',
    'Hérisson',
    'Hippopotames',
    'Hyènes',
    'Lamas',
    'Lapins',
    'Lémuriens',
    'Loups',
    'Loutres',
    'Mangouste',
    'Ornithorynque',
    'Ours',
    'Ours polaire',
    'Pandas',
    'Paresseux',
    'Putois',
    'Renards',
    'Rhinocéros',
    'Sangliers',
    'Suricates',
    'Tamanoirs',
    'Tapirs',
    'Taupes',
    'Zèbres',
    'Kangourou',
    'Koalas',
    'Babouins',
    'Bonobos',
    'Gorille',
    'Castor',
    'Chinchilla',
    'Cochon d\'inde',
    'Écureuils',
    'Hamster',
    'Marmottes',
    'Rat',
    'Souris',
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

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function makeWordsInCategory(category) {
  var result = []
  var i
  var tags = categories[category]
  tags.forEach(function(tag) {
    result = result.concat(mimeDB[tag])
  })
  result = result.map(function(word) {
    return word.toUpperCase()
  })
  result = uniq(result)
  result = shuffle(result)
  return result
}

var wordsByCategory = {}
for (category in categories) {
  wordsByCategory[category] = makeWordsInCategory(category)
}
