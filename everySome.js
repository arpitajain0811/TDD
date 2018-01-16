function checkUsersValid(goodUsers){
  return function allUsersValid(submittedUsers){
    return submittedUsers.every(function(user){
      return goodUsers.some(function(good_user){
        return user.id===good_user.id;
      });
    });
  };
}
module.exports=checkUsersValid;

console.log(checkUsersValid([{id:1},{id:3},{id:5}])([{id:1},{id:3}])===true);
console.log(checkUsersValid([{id:1},{id:3},{id:5}])([{id:1},{id:3},{id:4}])===false);
