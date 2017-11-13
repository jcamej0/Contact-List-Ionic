angular.module('app.main',[])
.controller('main',function($scope,$ionicSideMenuDelegate,$ionicModal,$ionicActionSheet,$http,$rootScope){

  var vm = this;
  vm.newContactData = {};

  $scope.$on('modalState',function(event,data){
    $rootScope.doRefresh();
    $scope.modal.hide();
  });

  $ionicModal.fromTemplateUrl('../templates/newContactTemplate.html',{
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal){
    $scope.modal = modal;
  })

  $scope.modalOpen = function(){
    $scope.modal.show()
  };

  $scope.abrirMenu = function(){
    $ionicSideMenuDelegate.$getByHandle('prueba').toggleRight();
  }


})