// let submitButton = document.getElementById('github-form')

// submitButton.addEventListener('submit', e => {
//   e.preventDefault()
//   console.log(e)
// });

document.addEventListener('DOMContentLoaded', e => {
  let submitButton = document.getElementsByTagName('input')[1];
  submitButton.addEventListener('click', e => {
    e.preventDefault()
    let input = document.querySelector('#search').value
    fetch(`https://api.github.com/search/users?q=${input}`)
    .then(res => res.json())
    .then(data => {
      data.items.forEach(user => cardMaker(user)
      )
    })
  })
});

function cardMaker(user) {
  let userList = document.querySelector('#user-list')
  let userItem = document.createElement('li')
  userItem.style.borderStyle = 'solid'
  let avatar = document.createElement('img')
  avatar.src = `${user.avatar_url}`
  let username = document.createElement('h3')
  username.innerText = `${user.login}`
  let profileLink = document.createElement('p')
  let profileLinkUrl = document.createElement('a')
  profileLinkUrl.href = `${user.html_url}`
  profileLinkUrl.innerText = `${user.html_url}`
  profileLink.append(profileLinkUrl)
  userItem.append(avatar)
  userItem.append(username)
  userItem.append(profileLink)
  userList.append(userItem)
  let space = document.createElement('br')
  userList.append(space) 
};



// Pull the avatar img src from data.items[0].avatar_url
// Pull the username from data.items[0].login

// document.getElementById('github-form').getElementsByTagName('button').addEventListener('submit', e => {
//   console.log('I was clicked')
// })