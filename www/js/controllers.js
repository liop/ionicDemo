angular.module('starter.controllers', [])

.controller('HomeCtr', function($scope,$ionicSlideBoxDelegate,Banner,Projects) {
    
    $scope.doRefresh = function(){
        //banner refresh
        $scope.banners=[];
        Banner.success(function(data,status,headers,config){
            var imgs = data.resultObject;
            var imgPaths = [];
            for(var img in imgs){
                imgPaths.push(imgs[img]);
            }
            $scope.banners = imgPaths;
            $ionicSlideBoxDelegate.$getByHandle('banner').update();
            $scope.$broadcast('scroll.refreshComplete');
        }).error(function(data,status,headers,config){
            $scope.banners = [];
            $scope.$broadcast('scroll.refreshComplete');
            $ionicSlideBoxDelegate.$getByHandle('banner').update();
        });
        
        //loans refresh
       Projects.success(function(data,status,headers,config){
          var resultDict = data.resultObject;
           console.log(resultDict);
           var projectsPart1 = [];
           
           for(var typeName in resultDict){
               var project = resultDict[typeName];
               if(!angular.isArray(project) && project.projectName.length>2){
                   project.projectTypeName = typeName;
                    projectsPart1.push(project);   
               }else if(typeName === "其他"){
                   $scope.projectsPart2 = resultDict[typeName];
                   
               }
           }
           $scope.projectsPart1 = projectsPart1;
 
       }).error(function(data,status,headers,config){
       });
    }
    $scope.banners = [];
    $scope.doRefresh();
})
.controller('ProjectDetailCtrl',function($scope,$stateParams, Projects){
    $scope.projectID = $stateParams.projectID;
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
;
