// # Задание 3
//
// Напиши фукцнию `findLongestWord(string)`, которая принимает параметром
// произвольную строку (в строке будут только слова и пробелы) и возвращает самое
// длинное слово в этой строке.
//
//     ```js
// const findLongestWord = function(string) {
//   // твой код
// };
//
// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
//
// console.log(findLongestWord('Google do a roll')); // 'Google'
//
// console.log(findLongestWord('May the force be with you')); // 'force'
// ```
const findLongestWord = function(string) {
    let stringArr = string.split(" ");
    let maxLength = 0;
    let maxLengthWord;
        for (const element of stringArr) {
            if (maxLength < element.length) {
                maxLength = element.length;
                maxLengthWord = element;
            }
    }
    return maxLengthWord;
};
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'