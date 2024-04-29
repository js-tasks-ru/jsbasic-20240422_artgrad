function truncate(str, maxlength) {
    // return str.length <= maxlength ? str : str.slice(0, maxlength - 1) + "…"; // вариант 1 решение без if
    if (str.length <= maxlength) { // вариант 2 с if
      return str
    }
    else {
      return str.slice(0, maxlength - 1) + "…"
    }
  }

// alert(truncate('Вот, что мне хотелось бы сказать на эту тему:', 20)) === 'Вот, что мне хотело…';
// alert(truncate('New york Rangers', 16)) // === 'Всем привет!';
// alert(truncate('New york Rangers', 10))
