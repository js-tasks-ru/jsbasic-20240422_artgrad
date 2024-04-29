function checkSpam(str) {
  str = str.toLowerCase(); // приводим к единому регистру
  let spam = str.indexOf('xxx');
  let spam2 = str.indexOf('1xbet');
  if (spam != -1 || spam2 != -1) { // -1 = значит нет совпадений, а нам нужно true при наличии спама
    return str = true
  }
  else {
    return str = false
  }
}
// необходимо сначала приводить к единому регистру, а потом искать
alert(checkSpam('1XbeT now')) // === true
alert(checkSpam('free xxxxx')) // === true
alert(checkSpam('innocent rabbit')) // === false