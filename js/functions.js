function checkString(string, value) {
  if (string.length <= value) {
    return true;
  }
  return false;
}


// console.log(checkString('проверяемая строка', 17));


// // Строка короче 20 символов
// имяФункции('проверяемая строка', 20); // true
// // Длина строки ровно 18 символов
// имяФункции('проверяемая строка', 18); // true
// // Строка длиннее 10 символов
// имяФункции('проверяемая строка', 10); // false

function isPalindrom(string) {
  const newString = string.replaceAll(' ', '').toLowerCase();
  let emptyString = '';
  for (let i = newString.length - 1; i >= 0; i--) {
    emptyString += newString[i];
  }
  return emptyString === newString;
}

// console.log(isPalindrom('кекс'))
// // Строка является палиндромом
// имяФункции('топот'); // true
// // Несмотря на разный регистр, тоже палиндром
// имяФункции('ДовОд'); // true
// // Это не палиндром
// имяФункции('Кекс');  // false

function convertToString(string) {
  const fixedString = string.toString();
  let stringToNumber = '';
  for (let i = 0; i <= fixedString.length; i++) {
    if (!Number.isNaN(parseInt(fixedString[i], 10))) {
      stringToNumber += fixedString[i];
    }
  }
  return parseInt(stringToNumber, 10);
}

// console.log(convertToString(1.5));
// имяФункции('2023 год');            // 2023
// имяФункции('ECMAScript 2022');     // 2022
// имяФункции('1 кефир, 0.5 батона'); // 105
// имяФункции('агент 007');           // 7
// имяФункции('а я томат');           // NaN
// имяФункции(2023); // 2023
// имяФункции(-1);   // 1
// имяФункции(1.5);  // 15
