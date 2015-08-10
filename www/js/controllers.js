angular.module('starter.controllers', [])

.controller('TestCtrl', function($scope,Banner) {
    $scope.refresh = function(){
        Banner.success(function(data,status,headers,config){
            var imgs = data.resultObject;
            console.log(imgs);
            var imgPaths = [];
            for(var img in imgs){
                imgPaths.push(imgs[img]);
            }
         $scope.banners = imgPaths;
        }).error(function(data,status,headers,config){
            $scope.banners = [];
        });
    }
    $scope.refresh();
})

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})
//.controller('ToDoListCtrl',function($scope,$ionicActionSheet,$timeout){
//    $scope.toDoListItems =[{task:'Scuba Diving',status:'not done'},{task:'Climb Everest',status:'not done'}];
//    $scope.show = function(){
//    var hideSheet = $ionicActionSheet.show({
//     buttons: [
//       { text: '<b>Share</b> This' },
//       { text: 'Move' }
//     ],
//     destructiveText: 'Delete',
//     titleText: 'Modify your album',
//     cancelText: 'Cancel',
//     cancel: function() {
//          // add cancel code..
//        },
//     buttonClicked: function(index) {
//       return true;
//     }
//   });
//
//   // For example's sake, hide the sheet after two seconds
//   $timeout(function() {
//     hideSheet();
//   }, 2000);
//})

;
