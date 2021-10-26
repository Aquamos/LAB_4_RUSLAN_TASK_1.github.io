let paragraph_1 = document.querySelector('.paragraph_1');
let paragraph_2 = document.querySelector('.paragraph_2');
let paragraph_3 = document.querySelector('.paragraph_3');
let paragraph_4 = document.querySelector('.paragraph_4');
let paragraph_5 = document.querySelector('.paragraph_5');
let paragraph_6 = document.querySelector('.paragraph_6');

let arr = [];
let length = prompt("Введите размер массива");
let string = "";

paragraph_1.textContent = "Размер массива: " + length;


//Генерация случайного числа
function getRandom(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max-min) + min);
}

//Заполнение массива случайными числами и вывод массива
for(let i = 0; i < length; i++){
    arr[i] = getRandom(0, 100);
    if(i == 0)
        string = string + '[ '
    string = string + arr[i] + ' ';
    if(i == length - 1)
        string = string + ']'
}


paragraph_2.textContent = "Начальный массив: " + string;

let min = arr.indexOf(Math.min(...arr));
let max = arr.indexOf(Math.max(...arr));

paragraph_3.textContent = "Минимальное число: " + arr[min];
paragraph_4.textContent = "Максимальное число: " + arr[max];

var newArray = arr.slice();

//Сумма чисел между максимальным и миминимальным числом
if(max > min) {
    newArray = newArray.slice(min + 1, max);
} else if(max < min) {
    newArray = newArray.slice(max + 1, min);
}
let result = newArray.reduce(function(sum, i) {
    return sum + i;
}, 0);

paragraph_5.textContent = "Сумма чисел между максимальным и миминимальным числом: " + result;


//Быстрая сортировка
function quicksort(array) {
  if (array.length <= 1) {
    return array;
  }

  var pivot = array[0];
  
  var left = []; 
  var right = [];

  for (var i = 1; i < array.length; i++) {
    array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
  }

  return quicksort(left).concat(pivot, quicksort(right));
};

arr = quicksort(arr);

//Вывод массива

string = "";

for(let i = 0; i < length; i++){
    if(i == 0)
        string = string + '[ '
    string = string + arr[i] + ' ';
    if(i == length - 1)
        string = string + ']'
}

paragraph_6.textContent = "Выходной массив: " + string;
