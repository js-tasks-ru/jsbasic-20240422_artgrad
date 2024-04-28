/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(userName) { // непустое, без пробелов и минимум 4 символа
  if (userName != null && userName.length >= 4 && !userName.includes(' ')) { // если в prompt пользователь ничего не вносит - то приходит null. длина строки userName считается добавлением .length
    return true // !userName.includes(' ') возвращает true, потому что поставили восклицательный знак и меняем false на true принудительно. Если без ! - то без пробелов будет false, а нам без пробелов нужен true.
  }
  else {
    return false
  }

}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}

sayHello();
