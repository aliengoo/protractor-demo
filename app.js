(function(){

  var app = angular.module("app", []);

  app.controller("HomeController", HomeController);

  function HomeController() {
    var vm = this;

    vm.message = "Hello, World!";
    vm.messageVisible = false;

    vm.toggleMessage = function(){
      vm.messageVisible = !vm.messageVisible;
    };
  }

}());