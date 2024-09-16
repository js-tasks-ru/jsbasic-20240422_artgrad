function toggleText() {
  let button2 = document.querySelector('.toggle-text-button')
  let div2 = document.querySelector('#text')

  button2.addEventListener('click', function () {
    if (div2.hasAttribute('hidden') === false) {
          div2.hidden = true
        } else {
          div2.hidden = false
        }
  })
}
