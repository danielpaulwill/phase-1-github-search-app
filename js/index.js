// let submitButton = document.getElementById('github-form')

// submitButton.addEventListener('submit', e => {
//   e.preventDefault()
//   console.log(e)
// });


let submitButton = document.getElementById('github-form').getElementsByTagName('button');
console.log(submitButton);


document.getElementById('github-form').getElementsByTagName('button').addEventListener('submit', e => {
  console.log('I was clicked')
})