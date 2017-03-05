angular.module('mimeApp', [
])
  .controller('MimeController',
  ['$scope', '$timeout', '$window',
  function($scope, $timeout, $window) {

    $scope.affichage_category = {
      "toutpublic" : {
        "name" : "Tout public",
        "image" : "family.png",
        "description" : "Un mélange d'un peu de tout pour la famille. Amusement garanti !",
        },
      "animaux" :{
        "name" : "Animaux",
        "image" :"dog.png",
        "description" : "Saurez vous imiter parfaitement tous ces animaux ?",
        },
      "metiers" : {
        "name" : "Métiers",
        "image" : "job.png",
        "description" : "C'est en forgeant qu'on devient forgeron !",
        },
      "dragonball" : {
        "name" : "Dragon Ball",
        "image" : "dragon.png",
        "description" : "Savez vous vraiment tout sur Dragon Ball ?",
        },
      "actions" : {
        "name" : "Actions",
        "image" : "action.png",
        "description" : "Des actions de la vie de tous les jours.",
        },
      "culture" : {
        "name" : "Culture",
        "image" : "culture.png",
        "description" : "La culture c'est comme la confiture. C'est bon.",
        },
       }

    $scope.clickCategory = function(category) {
      window.location.href = 'all.html?category=' + category
    }

    $scope.categoryCount = function(category) {
      return wordsByCategory[category].length
    }
}]);
