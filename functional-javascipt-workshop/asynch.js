// function loadUsers(userIds, load, done) {
//       var users = [];
//       for (var i = 0; i < userIds.length; i++) {
//         users.push(load(userIds[i]));
//       }
//       return users;
//     }

function bingo(){
     let users = [];
     for(let i=0; i< 5; i++){
       users.push(setTimeout(function(){
         return 1;
       }));
     }
     return users;
}
console.log(bingo());
