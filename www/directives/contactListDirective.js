angular.module('app.directive',[])
.directive('contactListX',function(){
  return{ 
    restrict: 'E',  
    template:
    '<div ng-repeat="letterContact in vm.contactList ">'+
      '<div class="item item-divider">'+
       ' {{letterContact.letter}}'+
      '</div>'+
   '<ion-item ng-repeat="contact in letterContact.contacts | filter: busqueda">'+
     '<div>'+
        '<a ui-sref="infoContact({id:{{contact.id}}})" >{{contact.name}}</a>'+
      '</div>'+
  '</ion-item>'+
  '</div>'
  };
})