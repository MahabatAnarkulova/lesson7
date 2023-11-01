// 1) На forEach:

// - Дан массив с числами. Создайте новый массив, состоящий из квадратов этих чисел:


// const sourcearray = [1, 2, 3, 4, 5];
// const newarray = [];

// sourcearray.forEach(function(number) {
//     newarray.push(number * number);
// });



// - Дан массив с числами. Найдите сумму этих чисел:


// const arrayofnumbers = [1, 2, 3, 4, 5];
// const sum = arrayofnumbers.reduce(function(notebook, telephone) {
//   return notebook + telephone;
// }, 0);




// 2) На map:

// - Дан массив с числами. Сделайте из него массив, состоящий из квадратов этих чисел:


// let array = [1, 2, 3, 4, 5];

// let newarray = array.map(function(number) {
//   return number * number;
// });




// 3) На reverse:

 // - Дан массив с днями недели ['Понедельник', 'Вторник'...]. 
 // Сделайте так, что он начинался с воскресенья и заканчивался понедельником


// let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
// week = week.reverse();




// 4) На split и join: 

// - C помощью метода join превратить массив [3, 2, 1] в строку "3 больше, чем 2 больше, чем 1"

// const array = [3, 2, 1];
// const stringofwords = array.map(function(number) {
//   return number + " больше, чем ";
// });

// const result = stringofwords.join("");


// - Дана строка 'я учу javascript!'. С помощью метода split запишите каждое слово этой строки в отдельный элемент массива.

// const string = 'я учу javascript!';
// const arrayofwords = string.split(' ');


//  - В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31.12.2025'.

// const date = '2025-12-31';
// const element = date.split('-');
// const newdata = element[2] + '.' + element[1] + '.' + element[0];




// 5) На filter:

// - Дан массив с числами. Оставьте в нем только отрицательные числа. В отдельную переменную положите количество отрицательных чисел в этом массиве


// const numbers = [1, -2, -3, -4, 5, -6, 7, -8, 9]
// let arraystr = numbers.filter((numbers) => numbers <0);
// console.log(arraystr)



// - Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов


// let arraylines = ["Молоко", "Хлеб", "Мандарин", "Дюшес", "Киви", "Холодильник", "Игрушка", "Банан", "Кондиционер", "Мяч"];
// let longline = arraylines.filter(function(line) {
//   return line.length > 5;
// });

// console.log(longline)


















