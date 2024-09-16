function toggleText() {
  let button1 = document.querySelector('.toggle-text-button')
  let div2 = document.querySelector('#text')

  button1.addEventListener('click', function () {
    if (div2.hasAttribute('hidden') === false) {
          div2.hidden = true
        } else {
          div2.hidden = false
        }
  })
}
