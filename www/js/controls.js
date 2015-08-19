angular.module('controls', ['ngResource'])
.directive('progressB', function($interval) {
   function link(scope, element, attrs) {
    var format,
        timeoutId;
        
    scope.$watch(scope.value,function(value){
        console.log(scope.value);
    });
  } 
  return {
    restrict: 'E',
    scope: {
      value: '='
    },
    transclude:true,
    template: function(elem,attr){
        
        return '<div class="progress-b" value="{{value}}">'
                +'<div style="width:{{value}}%"></div>'
                +'<div style="left:{{value-3}}%">{{value}}%</div>'
                +'</div>';
    }, 
      link:link
  }
})
.directive('projectBox', function() {
  return {
    restrict: 'E',
    scope: {
     project: '=info'
    },
    transclude:true,
    templateUrl :"/templates/projectCell.html"
  }
})
.directive('hideTabs',function($rootScope){
    return {
        restrict:'AE',
        link:function($scope){
            $rootScope.hideTabs = 'tabs-item-hide';
            $scope.$on('$destroy',function(){
                $rootScope.hideTabs = ' ';
            })
        }
    }
})
;
