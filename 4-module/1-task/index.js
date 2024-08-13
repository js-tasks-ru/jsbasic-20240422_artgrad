function makeFriendsList(friends) {
  let ul = document.createElement('ul')
  let friendsLi = friends.map((fio) => `<li>${fio.firstName} ${fio.lastName}</li>`)
  for (let item of friendsLi) {
    ul.insertAdjacentHTML('beforeEnd', `${item}`);
  }
  return ul
}