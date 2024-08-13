function highlight(table) {
  let row = table.querySelector('tbody')

  for (let i = 0; i < row.rows.length; i++) {
    console.log(row.rows[i].cells[1].innerHTML)
    if (row.rows[i].cells[3].dataset.available === "true") {
      row.rows[i].classList.add('available');
    }
    else if (row.rows[i].cells[3].dataset.available === "false") {
      row.rows[i].classList.add('unavailable');
    } else {
      row.rows[i].hidden = true
    }

    if (row.rows[i].cells[2].textContent == "m") {
      row.rows[i].classList.add('male')
    } else {
      row.rows[i].classList.add('female')
    }

    if (row.rows[i].cells[1].textContent < '18') {
      row.rows[i].style.textDecoration = "line-through"
    }
  }
}
