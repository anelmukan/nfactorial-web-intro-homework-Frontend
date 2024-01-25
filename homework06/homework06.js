//1. Скрыть элемент по нажатию кнопки
let clickMeBtn = document.getElementById('click_me');

const handleClick = () => {
  document.getElementById('text').hidden = true;
};

// clickMeBtn.addEventListener('click', handleClick);

//2. Какой обработчик запустится?
// Ответ: 1 и 2

//3. Добавить кнопку закрытия

const panes = document.getElementsByClassName('pane');

for (const pane of panes) {
  let xBtn = document.createElement('button');
  xBtn.textContent = '[X]';
  xBtn.onclick = () => pane.remove();

  pane.insertAdjacentElement((where = 'afterbegin'), xBtn);

  xBtn.style.position = 'absolute';
  xBtn.style.right = '10px';
  xBtn.style.top = '5px';
}
