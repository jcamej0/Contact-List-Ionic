angular.module('app.routing',[])
.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('dashboard', {
    url: '/dashboard',
    templateUrl: 'templates/dashboard.html',
    controller: 'DashCtrl',
    controllerAs: 'vm'
      
    })

  .state('infoContact',{
    url: '/info/:idUser',
        templateUrl: 'templates/contact-information.html',
        controller: 'InfoCtrl',
        controllerAs: 'info',
        params:{
          id:null
        }
  });
});