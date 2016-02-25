function MainController($scope){
  $scope.name = 'Kana';
}

angular
  .module('app')
  .controller('MainController', MainController);
