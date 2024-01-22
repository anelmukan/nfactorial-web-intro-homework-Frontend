//Перепишите функцию, используя оператор '?' или '||'

function checkAge(age) {
  return age > 18 ? true : confirm('Родители разрешили?');
}

//Функция pow(x,n)
function pow(x, n) {
  let res = 1;

  for (i = 0; i < n; i++) {
    res *= x;
  }
  return res;
}

//Перепишите с использованием функции-стрелки

// const ask = (question, yes, no) => {
//   confirm(question) ? yes() : no();
// };

// ask(
//   'Вы согласны?',
//   () => {
//     alert('Вы согласились.');
//   },
//   () => {
//     alert('Вы отменили выполнение.');
//   }
// );

//Сортировать в порядке по убыванию
// let arr = [5, 2, 1, -10, 8];

// arr.sort((a, b) => b - a);
// alert(arr); // 8, 5, 2, 1, -10

//Трансформировать в массив имён
// let vasya = { name: 'Вася', age: 25 };
// let petya = { name: 'Петя', age: 30 };
// let masha = { name: 'Маша', age: 28 };

// let users = [vasya, petya, masha];

// let names = [];

// for (const user of users) {
//   names.push(user.name);
// }
// alert(names); // Вася, Петя, Маша

//Трансформировать в объекты
// let vasya = { name: 'Вася', surname: 'Пупкин', id: 1 };
// let petya = { name: 'Петя', surname: 'Иванов', id: 2 };
// let masha = { name: 'Маша', surname: 'Петрова', id: 3 };

// let users = [vasya, petya, masha];

// let usersMapped = users.map((user) => ({
//   fullName: `${user.name} ${user.surname}`,
//   id: user.id,
// }));

// alert(usersMapped[0].id); // 1
// alert(usersMapped[0].fullName); // Вася Пупкин

//Получить средний возраст
let vasya = { name: 'Вася', age: 25 };
let petya = { name: 'Петя', age: 30 };
let masha = { name: 'Маша', age: 29 };

let arr = [vasya, petya, masha];

const getAverageAge = (arr) => {
  let res = 0;
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    res += arr[i].age;
  }
  return res / n;
};

alert(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28
