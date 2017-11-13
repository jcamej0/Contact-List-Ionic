angular.module('app.info',[])
.controller('InfoCtrl',function($scope,$http,$stateParams,$ionicLoading,$ionicActionSheet,$ionicPopup,$state,$rootScope,contactListCrud){

  var vm = this;
  $ionicLoading.show({
    template: 'Cargando información...'
  })

  var id = $stateParams.id;
  $scope.$emit('button',true);

  contactListCrud.getContactInfo(id).then(function(response){
    vm.infoUser = response;
      if(vm.infoUser.type[0] == 'client' || vm.infoUser.type[1] == 'client'){
        vm.client = true;
        }else{
          vm.client = false;
        }
      if(vm.infoUser.type[0] == 'provider' || vm.infoUser.type[1] == 'provider'){
        vm.provider = true;
      }else{
        vm.provider = false;
       }
    $ionicLoading.hide()
  })
  .catch(function(err){
    $ionicLoading.hide()
  })

  vm.eliminar = function(id){
     var confirmPopup = $ionicPopup.confirm({
       title: 'Eliminar',
       template: '¿Seguro que deseas eliminar el contacto'+vm.infoUser.name+'?'
     });
     confirmPopup.then(function(res) {
       if(res) {
         contactListCrud.deleteContact(id).
         then(function(response){
            satisfactoryAnswer();
         })
         .catch(function(err){
          console.log(err)
         })
       } else {
         errAnswer();
       }
     });

  }

  var satisfactoryAnswer = function(){

     var alertPopup = $ionicPopup.alert({
       title: 'OK',
       template: 'El contacto fue eliminado correctamente.'
     });
     alertPopup.then(function(res) {
      $rootScope.doRefresh();
       $state.go('dashboard');
     });
   
  }

  var errAnswer = function(){
     var alertPopup = $ionicPopup.alert({
       title: 'ERROR',
       template: 'Ocurrio un problema al intentar eliminar al contacto.'
     });
     alertPopup.then(function(res) {
       $state.go('dashboard');
     });
   
  }
})