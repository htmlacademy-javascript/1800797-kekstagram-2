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


const getTimeInMinutes = (value) => {
  const time = value.split(':');
  return Number(time[0]) * 60 + Number(time[1]);
};

const getMeetingDuration = (start, duration) => start + duration;

const checkTiming = (startJob, endJob, startMeeting, meetingDuration) =>
  getTimeInMinutes(startJob) <= getTimeInMinutes(startMeeting) &&
  getTimeInMinutes(endJob) > getTimeInMinutes(startMeeting) &&
  getMeetingDuration(getTimeInMinutes(startMeeting), meetingDuration) <= getTimeInMinutes(endJob);

console.log(checkTiming('08:00', '17:30', '14:00', 90));
console.log(checkTiming('8:0', '10:0', '8:0', 120));
console.log(checkTiming('08:00', '14:30', '14:00', 90));
console.log(checkTiming('14:00', '17:30', '08:0', 90));
console.log(checkTiming('8:00', '17:30', '08:00', 900));

/*
'8:00' - начало рабочего дня
'17:30' - конец рабочего дня
'14:00' - начало встречи
90 - продолжительность встречи в минутах
*/
// имяФункции('08:00', '17:30', '14:00', 90); // true
// имяФункции('8:0', '10:0', '8:0', 120);     // true
// имяФункции('08:00', '14:30', '14:00', 90); // false
// имяФункции('14:00', '17:30', '08:0', 90);  // false
// имяФункции('8:00', '17:30', '08:00', 900); // false
