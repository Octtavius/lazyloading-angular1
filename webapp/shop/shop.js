angular.module('shop',[])
    .controller('productsController', function($ocLazyLoad, $scope){

        // This is another way of loading files. useful when file is needed
        // only once in one place
        // $ocLazyLoad.load('webapp/shop/css/shop.css')
        $scope.title = 'Shop Loaded!';


        console.log('productsController');
        console.log('hello');
    })
    .controller('checkoutController', function($scope){
        $scope.title = 'Shop Loaded!';
        console.log('checkoutController');
    });
