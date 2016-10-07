// Modul sortApp
(function(angular) {
  'use strict';
  angular.module('sortApp', []);
})(angular);

// Controller mainController -> sortApp
(function(angular) {
  'use strict';
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
    vm.searchName   = SortAppFactory.data.searchName;
    // console.log(vm.searchName);

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
})(angular);

// Controller ListRpeaterController -> sortApp
(function(angular) {
  'use strict';
  angular
    .module('sortApp')
    .controller('ListRepeaterController', ListRepeaterController);
  ListRepeaterController.$inject = ['$scope','SortAppFactory'];
  function ListRepeaterController($scope, SortAppFactory) {
    var vm = this;
    vm.searchName = SortAppFactory.data.searchName;
  }
})(angular);

(function(angular) {
  'use strict';
  angular
    .module('sortApp')
    .directive('listRepeater', listRepeater);
  listRepeater.$inject = ['SortAppFactory'];
  function listRepeater(SortAppFactory) {
    return {
      restrict: 'E',
      replace: true,
      controller: 'ListRepeaterController',
      controllerAs: 'lp',
      templateUrl: 'template-repeat.html',
      scope: {
        data : '='
      },
      bindToController: true
    };            
  }
})(angular);

// Directive headerFilter -> sortApp
(function(angular) {
  'use strict';
  angular
    .module('sortApp')
    .directive('headerFilter', headerFilter);

  headerFilter.$inject = ['SortAppFactory'];

  function headerFilter(SortAppFactory) {
    return {
      restrict : 'E',
      replace: true,
      controller: 'HeaderFilterController',
      controllerAs: 'hf',
      bindToController: true,
      scope: {
        data: '='
      },
      templateUrl: 'template-header.html'
    };
  }
})(angular);

(function(angular) {
  'use strict';
  angular
    .module('sortApp')
    .controller('HeaderFilterController', HeaderFilterController);
  HeaderFilterController.$inject = ['$scope', 'SortAppFactory'];
  function HeaderFilterController ($scope, SortAppFactory) {
    var vm = this;
    vm.searchName = SortAppFactory.data.searchName;
    $scope.$watch(function () {
      return vm.searchName;
    }, 
    function(newVal, oldVal) {
      SortAppFactory.data.searchName = newVal ;
      console.log(vm.searchName);
      console.log(SortAppFactory.data.searchName);
    });
  }
})(angular);

// Factory sortApp
(function(angular) {
  'use strict';
  angular
    .module('sortApp')
    .factory('SortAppFactory', SortAppFactory);
  SortAppFactory.$inject = [];
  function SortAppFactory() {
    var service = {   
      data  : {
        searchName   : '',
        sortType     : 'name', 
        sortReverse  : false,  
        searchFish   : '',
        filterCount  : 0,
      }
    };

    return service;
  } 

})(angular);





