function checkUsersValid (goodUsers) {
  return function allUsersValid (submittedUsers) {
    return submittedUsers.every(function (user) {
      return goodUsers.some(function (goodUser) {
        return user.id === goodUser.id
      })
    })
  }
}
module.exports = checkUsersValid

console.log(checkUsersValid([{id: 1}, {id: 3}, {id: 5}])([{id: 1}, {id: 3}]) === true)
console.log(checkUsersValid([{id: 1}, {id: 3}, {id: 5}])([{id: 1}, {id: 3}, {id: 4}]) === false)
