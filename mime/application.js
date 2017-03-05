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
    'Faire de la moto',
    'Faire un câlin',
    'Marcher sur des braises',
    'Faire une galipette',
    'Manger des spaghettis',
    'Marcher dans le désert',
    'Faire des crêpes',
    'Danser la valse',
    'Changer une couche',
    'Faire de la boxe',
    'Jouer au curling',
    'Mourir',
    'Accoucher',
    'Dormir',
    'Manger',
    'Vomir',
    'Caresser un chat',
    'Payer l\'addition',
    'Être un beauf',
    'Prendre le métro',
    'Faire un barbecue',
    'Être à la messe',
    'Ouvrir un cadeau',
    'Traire une vache',
    'Aller à la pêche',
    'Fêter son anniversaire',
    'Rencontrer un martien',
    'Faire la vaisselle',
    'Courir un Marathon',
    'Faire de la corde à sauter',
    'Couper un gâteau',
    'Marcher avec des échasses',
    'Faire ses devoirs',
    'Étendre du linge',
    'Sauter à la corde',
    'Jouer à Pokemon GO',
    'Faire le clown',
    'Tirer à l’arc',
    'Aller dans le train fantôme',
    'Chercher ses clés',
    'Courir après le bus',
    'Sortir les poubelles',
    'Faire des claquettes',
    'Allumer le barbecue',
    'Regarder la télé',
    'Mâcher un chewing-gum',
    'Faire de la trotinette',
    'Escalader une montagne',
    'Se battre à l’épée',
    'Avoir la grippe',
    'Téléphoner à mamie',
    'Planter un arbre',
    'Éplucher des patates',
    'Aller à la piscine',
    'Promener le chien',
    'Jongler avec des pommes',
    'Prendre l’ascenseur',
    'Faire du surf',
    'Se transformer en loup-garou',
    'Lire du braille',
    'Faire du patin à glace',
    'Être malade en bateau',
    'Explorer une grotte',
    'Jouer du banjo',
    'Faire un tour en montgolfière',
    'Nouer sa cravate',
    'Se faire cuire un œuf',
    'Prendre l’escalator',
    'Faire sauter une crêpe',
    'Presser une orange',
    'Jouer avec un yoyo',
    'Recevoir une médaille',
    'Être blonde',
    'Être lunatique',
    'Faire la racaille',
    'Emballer une momie',
    'Arriver en retard',
    'Se préparer un café',
    'Changer le bébé',
    'Prendre un bain',
    'Prendre un médicament',
    'Faire une course de haies',
    'Prendre le train',
    'Allumer un feu',
    'Vendre un tapis',
    'Manger une glace',
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
