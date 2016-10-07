// Modul sortApp
angular.module('sortApp', []);

// Controller mainController -> sortApp
angular
.module('sortApp')
.controller('MainController', MainController);
MainController.inject = ['SortAppFactory'];
function MainController(SortAppFactory) {
  var vm = this;

  vm.sortType     = SortAppFactory.sortType; // set the default sort type
  vm.sortReverse  = SortAppFactory.sortReverse;  // set the default sort order
  vm.searchFish   = SortAppFactory.searchFish;     // set the default search/filter term
  vm.filterCount  = SortAppFactory.filterCount;

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
ListRepeaterController$inject = ['$scope', 'SortAppFactory'];
function ListRepeaterController($scope,SortAppFactory) {
  var vm = this;
  vm.filter = 0;
  // $scope.$watch(function () {
  //   $scope.filtered = $scope.$eval("vv.data | orderBy:$parent.vm.sortType:$parent.vm.sortReverse | filter:vv.searchName");
  //   vm.folter = $scope.filtered.length;
  //   console.log($scope.filtered.length);
  // });

}

// Directive listRepeater -> sortApp
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
    bindToController: true,
    templateUrl: 'template-repeat.html',
		scope: {
      searchName: '=',
			data: '=',
      filterod: '='
		}
  };            
}
// Directive headerFilter -> sortApp
angular
  .module('sortApp')
  .directive('headerFilter', headerFilter);

headerFilter.$inject = [];

function headerFilter() {
  return {
    restrict : 'E',
    replace: true,
    scope: {
      searchName: '=',
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
    sortType     : 'name', 
    sortReverse  : false,  
    searchFish   : '',     
    filterCount  : filterFn,
  };
  return service;

  function filterFn() {
    $scope.$watch(function () {
      $scope.filtered = $scope.$eval("vv.data | orderBy:$parent.vm.sortType:$parent.vm.sortReverse | filter:vv.searchName");
      vm.folter = $scope.filtered.length;
      console.log($scope.filtered.length);
    });
  }
} 







