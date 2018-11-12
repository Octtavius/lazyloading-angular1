angular.module('dashboard',[])
    .controller('mainMenuController', function($scope, $ocLazyLoad){
        
        $scope.title = 'Shop Loaded';
        console.log('mainMenuController');
    });
