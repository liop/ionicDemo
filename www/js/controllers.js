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
.controller('ProjectDetailCtrl',function($scope,$stateParams,Projects, ProjectDetail){
    var projectID = $stateParams.projectID;
    console.log($stateParams);
    $scope.$watch($stateParams,function(key){
        console.log(key);
    })
    ProjectDetail.detail(projectID).success(function(data,status,headers,config){
       console.log(data);
        $scope.project = data.resultObject;
         $scope.preIncome = $scope.project.income ;
         
    }).error(function(data,status,headers,config){
        
    });
     
   
    $scope.onMinusClicked = function(){
        if($scope.investModel > 0){
            $scope.investModel -= 1000.00;
            $scope.preIncome = $scope.project.income  *($scope.investModel/10000); 
        }
    }
    $scope.onPlusClicked = function(){
        if($scope.investModel < $scope.project.projectBalance){
            $scope.investModel += 1000.00;
            $scope.preIncome = $scope.project.income  *($scope.investModel/10000); 
        }   
    }
})

.controller('ProjectMoreCtrl', ['$rootScope', "$scope",
"$stateParams", "$q", "$location", "$window", '$timeout','ProjectMore',function($rootScope, $scope, $stateParams, $q, $location, $window,$timeout,ProjectMore){
     var projectID = $stateParams.projectID;
    ProjectMore.detail(projectID).success(function(data,status,headers,config){
       console.log(data);
        $scope.projectMore = data.resultObject;
         
    }).error(function(data,status,headers,config){
        
    });
    $scope.currentSelectedIndex=0;
    $scope.tasSelected = function(index){
         $scope.currentSelectedIndex = index;
    }
}
])
.controller('ProjectInsureCtrl', ['$rootScope', "$scope",
"$stateParams", "$q", "$location", "$window", '$timeout','ProjectInsure',function($rootScope, $scope, $stateParams, $q, $location, $window,$timeout,ProjectInsure){
    var projectID = $stateParams.projectID;
    ProjectInsure.detail(projectID).success(function(data,status,headers,config){
       console.log(data);
        $scope.projectInsure = data.resultObject;
         
    }).error(function(data,status,headers,config){
        
    });
   
}
])
.controller('ProjectPayCtrl', ['$rootScope', "$scope",
"$stateParams", "$q", "$location", "$window", '$timeout','ProjectInsure',function($rootScope, $scope, $stateParams, $q, $location, $window,$timeout,ProjectInsure){
    var projectID = $stateParams.projectID;
    ProjectInsure.detail(projectID).success(function(data,status,headers,config){
       console.log(data);
        $scope.projectInsure = data.resultObject;
         
    }).error(function(data,status,headers,config){
        
    });
   
}
])
.controller('DashCtrl', function($scope,$ionicSlideBoxDelegate,Banner2) {
     
    Banner2.success(function(data,status,headers,config){
        var imgs = data.resultObject;
        console.log(data);
        var imgPaths = [];
        for(var img in imgs){
            imgPaths.push(imgs[img]);
        }
        $scope.banners = imgPaths;
        $ionicSlideBoxDelegate.$getByHandle('banner').update();
        $scope.$broadcast('scroll.refreshComplete');
    }).error(function(data,status,headers,config){
        $scope.banners = [];
        console.log(data);
        $scope.$broadcast('scroll.refreshComplete');
        $ionicSlideBoxDelegate.$getByHandle('banner').update();
    });


})

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
