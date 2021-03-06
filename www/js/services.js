angular.module('starter.services', ['ngResource'])

.constant('BASEURL',"")
 
 .factory('Banner',function($resource,$http){
    return $http.get('http://10.1.250.35:3000/proxy?url=http://123.57.77.184:8080/rqt/appasyn28/banner');
   
//    return $http.post('http://123.57.77.184:8080/app/controller/banner');
})
.factory('Banner2',function($resource,$http){
//    return $http.get('http://10.1.250.35:3000/proxy?url=http://123.57.77.184:8080/rqt/appasyn28/banner');
   
    return $http.post('http://123.57.77.184:8080/app/controller/banner');
})
.factory('Projects',function($resource,$http){
    return $http.get('http://10.1.250.35:3000/proxy?url=http://123.57.77.184:8080/rqt/appasyn28/loans');
})
.factory('ProjectDetail',function($resource,$http){
    return {
       detail:function(projectID){
           var param = {"k":projectID};
          return  $http.post('http://10.1.250.35:3000/proxy?url=http://123.57.77.184:8080/rqt/appasyn28/vloan',param);
           
       }
    };
})
.factory('ProjectMore',function($resource,$http){
    return {
       detail:function(projectID){
          var param = {"k":projectID};
          return  $http.post('http://10.1.250.35:3000/proxy?url=http://123.57.77.184:8080/rqt/appasyn28/investMore',param);
       }
    };
})
.factory('ProjectInsure',function($resource,$http){
    return {
       detail:function(projectID){
            var param = {"k":projectID,"u":"li",p:"12345678"};
            return  $http.post('http://10.1.250.35:3000/proxy?url=http://123.57.77.184:8080/rqt/appasyn28/invest',param);
       }
    };
})
.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }];

  return {
    all: function() {
        
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
