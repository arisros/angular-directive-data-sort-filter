// Modul sortApp
angular.module('sortApp', []);

// Controller mainController -> sortApp
angular
  .module('sortApp')
  .controller('MainController', MainController);
MainController.inject = ['$scope', 'SortAppFactory'];
function MainController($scope, SortAppFactory) {
  var vm = this;

  vm.sortType     = SortAppFactory.data.sortType; // set the default sort type
  vm.sortReverse  = SortAppFactory.data.sortReverse;  // set the default sort order
  vm.searchFish   = SortAppFactory.data.searchFish;     // set the default search/filter term
  vm.filterCount  = SortAppFactory.data.filterCount;
  vm.searchName   = SortAppFactory.data;
  console.log(vm.searchName);
    // $scope.$watchCollection(function() {
    //   return SortAppFactory;
    // }, 
    // function(oldVal, newVal) {
    //   console.log(newVal);
    // });
  vm.sushi = [
    { name: 'Cali Roll', fish: 'Crab', tastiness: 2 },
    { name: 'Philly', fish: 'Tuna', tastiness: 4 },
    { name: 'Tiger', fish: 'Eel', tastiness: 7 },
    { name: 'Rainbow', fish: 'Variety', tastiness: 6 },
    { name: 'Smooch', fish: 'Lungs chicken', tastiness: 3 },
    { name: 'Cracko', fish: 'Bone duck', tastiness: 6 },
    { name: 'The Bang', fish: 'Pork Chest', tastiness: 6 }
  ];
}

// Controller ListRpeaterController -> sortApp
angular
  .module('sortApp')
  .controller('ListRepeaterController', ListRepeaterController);
ListRepeaterController.$inject = ['$scope','SortAppFactory'];
function ListRepeaterController($scope, SortAppFactory) {
  var vm = this;
}

angular
	.module('sortApp')
	.directive('listRepeater', listRepeater);
listRepeater.$inject = ['SortAppFactory'];
function listRepeater(SortAppFactory) {
	return {
		restrict: 'E',
		replace: true,
    controller: 'ListRepeaterController',
    controllerAs: 'vv',
    templateUrl: 'template-repeat.html',
    scope: {
      data : '='
    },
    bindToController: true
  };            
}
// Directive headerFilter -> sortApp
angular
  .module('sortApp')
  .directive('headerFilter', headerFilter);

headerFilter.$inject = ['SortAppFactory'];

function headerFilter(SortAppFactory) {
  return {
    restrict : 'E',
    replace: true,
    controller: function ($scope, SortAppFactory) {
      var vm = this;
      vm.searchName = SortAppFactory.data.searchName;
      // SortAppFactory.data.searchName = $scope.$eval(vm.searchName);
      $scope.$watch(function () {
        return vm.searchName;
      }, 
      function(newVal, oldVal) {
        SortAppFactory.data.searchName = newVal ;
        console.log(SortAppFactory.data.searchName);
      });
    },
    controllerAs: 'hf',
    bindToController: true,
    scope: {
      data: '='
    },
    templateUrl: 'template-header.html'
  };
}

// Factory sortApp
angular
  .module('sortApp')
  .factory('SortAppFactory', SortAppFactory);
SortAppFactory.$inject = [];
function SortAppFactory() {
  var service = {   
    data  : {
      searchName   : 'Aris',
      sortType     : 'name', 
      sortReverse  : false,  
      searchFish   : '',
      filterCount  : 0,
    }
  };

  return service;
} 







