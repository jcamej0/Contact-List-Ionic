angular.module('app.dashboard',[])
.controller('DashCtrl', function($scope, $ionicSideMenuDelegate,$http,contactListCrud,$ionicModal,$ionicPopup,$state,$rootScope) {
  var vm = this;
  vm.contactList = {};

   var getContactsList = function(package){
      for (var contact of package){
        var letter = contact.name[0].toUpperCase();
        contact['firstLetter'] = letter;
        if(!vm.contactList[letter]){
            vm.contactList[letter] = new Object();
            vm.contactList[letter]['letter'] = letter;
            vm.contactList[letter].contacts = new Array();
            vm.contactList[letter].contacts.push(contact);
        }else{
             vm.contactList[letter].contacts.push(contact)
        }
    }
   }  
  contactListCrud.getContacts().then(function(response){
    getContactsList(response);
  })
  $rootScope.doRefresh = function() {
    vm.contactList = {};
    contactListCrud.getContacts().then(function(response){
    getContactsList(response)
    $scope.$broadcast('scroll.refreshComplete');
  })
  };
})