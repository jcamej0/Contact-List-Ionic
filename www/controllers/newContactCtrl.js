angular.module('app.newContact',[])
.controller('newContact',function($scope,contactListCrud,$ionicPopup,$state){
  var vm = this;
  vm.data = {
    type: []
  };
  vm.client = false;
  vm.provider= false;

  var showAlert = function() {
     var alertPopup = $ionicPopup.alert({
       title: 'Felicidades',
       template: 'Contacto agregado satisfactoriamente.'
     });
     alertPopup.then(function(res) {
        vm.data = {};
      $state.go('dashboard')
       $scope.$emit('modalState',true);
 
     });
   }

  vm.create = function(){
       contactListCrud.newContact(vm.data)
      .then(function(response){
         vm.data = {};
      showAlert();
      })
      .catch(function(err){
      console.log(err)
      $ionicLoading.hide()
  })

  }
  vm.typeChangeClient = function(){
    if(vm.client === 'client')
    {
      vm.data.type.push('client')
    }
     else if(vm.client === 'clientFalse'){
    var position = vm.data.type.indexOf('client');
    vm.data.type.splice(position,1);
  }
}
  vm.typeChangeProvider = function(){
     if(vm.provider === 'provider')
    {
      vm.data.type.push('provider')
    }
    else if(vm.provider === 'providerFalse'){
      var position = vm.data.type.indexOf('provider');
      vm.data.type.splice(position,1);
  }
}
});
