//Тренируемся общаться с пользователем посредством alert / confirm / prompt.

const user = {
  name: '',
  age: null,
  gender: '',
};

const userName = prompt('Как вас зовут?', '');
const userAge = prompt('Сколько вам лет?', '');
const userGender = prompt('Вы мужчина или женщина?', '');

user.name = userName;
user.age = userAge;
user.gender = userGender;

console.log(user);

//Работа с операторами.
const userNumber = Number(prompt('Введите число!'));
console.log('User Number is', userNumber);

if (isNaN(userNumber)) {
  alert('Это не число!');
} else {
  alert(userNumber);
}

//Перепишите этот блок кода с использованием оператора switch.
let a = +prompt('a?', '');
console.log(a);
a = +a;
console.log(a);

switch (a) {
  case 0:
    alert(0);
    break;

  case 1:
    alert(1);
    break;

  case 2:
    alert('2,3');
    break;

  case 3:
    alert('2,3');
    break;
}

//Работа с циклами(loops) 1.
let sum = 0;

for (i = 1; i < 100; i++) {
  if (i % 2 == 0) {
    sum += i;
  }
}
console.log(sum);

//Работа с циклами(loops) 2.
let i = 0;
while (i < 3) {
  alert(`number ${i}!`);
  ++i;
}
