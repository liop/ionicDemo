angular.module('controls', ['ngResource'])
.directive('progressB', function() {
  return {
    restrict: 'E',
    scope: {
      value: '='
    },
      transclude:true,
    template: '<div class="progress-b" >'
                +'<div class="green-scoll" style="width:{{value}}%"></div>'
                +'<div class="green-point" style="left:{{value}}%">{{value}}%</div>'
                +'</div>'
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
;
