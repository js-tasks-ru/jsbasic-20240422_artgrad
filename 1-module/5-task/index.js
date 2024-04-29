function truncate(str, maxlength) {
    // return str.length <= maxlength ? str : str.slice(0, maxlength - 1) + "…"; // вариант 1 решение без if
    if (str.length <= maxlength) { // вариант 2 с if
      return str
    }
    else {
      return str.slice(0, maxlength - 1) + "…"
    }
  }
