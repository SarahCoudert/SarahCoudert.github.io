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
    'dresseur de chameaux',
    'facteur',
    'boulanger',
    'boucher',
    'éboueur',
    'caissier',
    'routier',
    'contrôleur des impôts',
    'psychologue',
    'DRH',
    'PDG',
    'acteur de cinéma',
    'acteur au théâtre',
    'ouvreuse',
    'dresseur de lions',
    'secrétaire',
    'explorateur',
    'astronaute',
    "pilote d'avion",
    'pilote de F1',
    'présentateur TV',
    'jardinier',
    "pilote d'hélicoptère",
    "ostréiculteur",
    "fermier",
    "dentiste",
    "médecine",
    "chirurgien",
    "baby-sitter",
    "étudiant",
    "chômteur",
    "SDF",
    "balayeur",
    "pompier",
    "policier",
    "juge",
    "avocat",
    "gardien de prison",
    "soldat",
    "bourreau",
    "chanteur",
    "jockey",
    "banquier",
    "voleur",
    "assassin",
    "vigile",
    "garde du corps",
    "président de la république",
    "roi",
    "princesse",
    "samouraï",
    "maître d'arts martiaux",
    "inspecteur de police",
    "magicien",
    "concepteur de jeux vidéos",
    "testeur de jeux vidéos",
    "informaticien",
    "plombier",
    "danseur",
    "acrobate",
    "marin",
    "pêcheur",
    "capitaine de navire",
    "pirate",
    "chevalier",
    "aventurier",
    "ornithologue",
    "archéologue",
    "coureur cycliste",
    "nageur",
    "pianiste",
    "Clarinettiste",
    "violoniste",
    "batteur",
    "trompettiste",
    "compositeur",
    "serveur",
    "catcheur",
    "rappeur",
    "cuisinier",
    "toiletteur de chien",
    "vétérinaire",
    "professeur de solfège",
    "caméraman",
    "tennisman",
    "footballeur",
    "basketteur",
    "caviste",
    "barman",
    "super-héros",
    "masseur",
    "cireur de chaussures",
    "troubadour",
    "bucheron",
    "crieur public",
    "moine",
    "bonne-soeur",
    "prêtre",
    "maire",
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
    'Avion',
    'Ballon',
    'Bateau',
    'Brosse à dent',
    'Camion',
    'Camion pompier',
    'Canapé',
    'Ceinture',
    'Chaise',
    'Chaussette',
    'Cheminée',
    'Cirque',
    'Ciseau',
    'Coffre-fort',
    'Disque',
    'Drap',
    'Flipper',
    'Fourchette',
    'Frigo',
    'Igloo',
    'Jeu de cartes',
    'Lampe',
    'Lit',
    'Maison',
    'Mer',
    'Montagne',
    'Neige',
    'Ordinateur',
    'Porte-monnaie',
    'Poubelle',
    'Prise éléctrique',
    'Raquette',
    'Slip',
    'Stylo',
    'Table',
    'Tam-tam',
    'Tablette tactile',
    'Tee-shirt',
    'Télécommande',
    'Téléphone',
    'Télévision',
    'Tour Eiffel',
    'Valise',
    'Voiture',
    'Walkman',
    'WC',
    'Fourchette',
    'Réveil ',
    'Chaise',
    'Machine à laver',
    'Poubelle',
    'Porte monnaie',
    'Tapis',
    'GPS',
    'Lecteur MP3',
    'Réfrigérateur',
    'Distributeur de billets',
    'Table de chevet',
    'Lit à barreaux',
    'Bavoir',
    'Éponge',
    'Piano',
    'Guitare',
    'Violon',
    'Téléphone',
    'Verre',
    'Assiette',
    'Torchon',
    'Journal',
    'Machine à écrire',
    'Stylo',
    'Chaise',
    'Chaise roulante',
    'Chaise dépliante',
    'Table',
    'Balle de ping pong',
    'Calendrier',
    'Collier',
    'Boucles d\'oreilles',
    'Fouet (cuisine)',
    'Fouet (domptage)',
    'Cerceau',
    'Ciseaux',
    'Hache',
    'Baguettes chinoises',
    'Baguette de pain',
    'Nunchaku',
    'Parfum',
    'Clavier',
    'Trompette',
    'Chewing gum',
    'Sucette',
    'Micro',
    'Sèche Cheveux',
    'Radiateur',
    'Tableau blanc',
    'Pinceau',
    'Bracelet',
    'Chaussure',
    'Bol',
    'Chapeau chinois',
    'Triangle (instrument)',
  ],
  celebrites: [
    'Mickael Jackson',
    'JK Rowling',
    'Donald Trump',
    'Bieber',
    'Claude Francois',
    'Louis XVI',
    'Napoléon',
    'Jules César',
    'Charles de Gaulle',
    'Albert Einstein',
    'John Fitzgerald Kennedy',
    'Beethoven',
    'Che Guevara',
    'Neil Armstrong',
    'Jeanne d\'Arc',
    'Mimmie Mathy',
    'Xavier Niel',
    'Hitlerounet',
    'John Cena',
    'Barack Obama',
  ],
  fiction: [
    'Harry Potter',
    'Ron Weasley',
    'Barbie',
    'Rambo',
    'Dark Vador',
    'Indiana Jones',
    'Charlot',
    'James Bond',
    'Dracula',
    'Superman',
    'Forrest Gump',
    'Spiderman',
    'Hulk',
    'Iron Man',
  ],
  geographie: [
    'Japon',
    'Inde',
    'Allemagne',
    'France',
    'Belgique',
    'Angleterre',
    'Ecosse',
    'Irlande',
    'Espagne',
    'Portugal',
    'Italie',
    'USA',
    'Canada',
    'Corse',
    'Russie',
    'Chine',
    'Australie',
    'Océan atlantique',
    'Pôle Nord',
    'Pôle Sud',
    'Océan indien',
    'Paris',
    'Tremblement de terre',
  ],
  dbz: [
    'Tortue géniale',
    'Son Goku',
    "Krilin",
    "Son Gohan",
    "Goten",
    "Trunks",
    "Petit-coeur (Piccolo)",
    "Puerg (chat de Yamcha)",
    "Karin (chat de la tour)",
    "Yajirobe",
    "Pilaf",
    "Mei",
    "Cell",
    "Freezer",
    "Majin Boo",
    "C18 (fille androïde)",
    "Bulma",
    "Vegeta",
    "Baton magique",
    "Nuage magique",
    "Kame-hame-ha",
    "Dragon radar",
    "Dragon balls",
    "Shenron (le dragon)",
    "Chichi",
    "Tao Pai Pai (assassin)",
    "Kayo",
    "Chaozu",
    "Oolong (cochon)",
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
  "culture" : ["celebrites", "fiction", "geographie"]
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
