function ucFirst(str) {
  if (str == '') {
    return str
  }
  else {
    return str[0].toUpperCase() + str.slice(1);
  }
}

alert(ucFirst('василиса'))
alert(ucFirst('x'))
alert(ucFirst(''))
