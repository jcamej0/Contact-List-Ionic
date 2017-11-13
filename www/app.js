angular.module('contactList', ['ionic','app.services','app.directive','app.newContact', 'app.dashboard','app.main','app.info'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
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
})


