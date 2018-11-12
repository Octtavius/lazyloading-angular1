var app = angular.module('e-shop-lazyload', ['ui.router', 'oc.lazyLoad']);

app.config(['$ocLazyLoadProvider', '$stateProvider', '$urlRouterProvider' , function($ocLazyLoadProvider, $stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/products");

    //Config For ocLazyLoading
    $ocLazyLoadProvider.config({
        'debug': true, // For debugging 'true/false'
        'events': true, // For Event 'true/false'
        'modules': [{ // Set modules initially
            name : 'shop', // Shop module
            files: ['webapp/shop/shop.js', 'webapp/shop/css/shop.css']
        },{
            name : 'dash', // Dashboard module
            files: ['webapp/dashboard/dashboard.js']
        }]
    });

    //Config/states of UI Router
    $stateProvider
        .state('products', {
            url: "/products",
            // views : {
            //     "" : {
            //         templateUrl:"webapp/shop/index.html"
            //     }
            // },
            templateUrl: "webapp/shop/index.html",
            controller: 'productsController',
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load('shop'); // Resolve promise and load before view
                }]
            }
        })
        .state('checkout', {
            url: "/checkout",
            templateUrl: "webapp/shop/checkout.html",
            controller: 'checkoutController',
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load('shop'); // Resolve promise and load before view
                }]
            }
        })
        .state('mainmenu', {
            url: "/mainmenu",
            templateUrl: "webapp/dashboard/index.html",
            controller: 'mainMenuController',
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load('dash'); // Resolve promise and load before view
                }]
            }
        });
}]);