
// Задание 2.1 В тестовом файле из задания один сделать, чтобы при нажатии кнопки
// "Кнопка 1" скрывался блок с заголовком. При повторном нажатии блок
// должен появляться.

/* Функция hideBlock должна скрыть блок при нажатии btn-1, при повторном нажатии btn-1 - отобразить скрытый блок.
* Я использовала свойство display. Обработчик события - click. */
function hideBlock() {
    const btn1 = document.querySelector('.btn-1');
    const item1 = document.querySelector('.item-1');

    btn1.addEventListener('click', () => {
    if(item1.style.display === 'none') {
        item1.style.display = 'block';
    } else item1.style.display = 'none';
})
}
hideBlock();

// Задание 2.2 При нажатии кнопки "Кнопка 2" средний блок во втором ряду должен
// меняться местами с левым блоком. При повторном нажатии - возвращаться
// на прежнее место.

/* Функция changeBlocksOrder() при нажатии кнопки btn-2 должна будет менять два блока местами (блок item-2 и item-3).
* Я использовала свойство order, чтобы менять порядок. Обработчик события - click. */
function changeBlocksOrder() {
    const btn2 = document.querySelector('.btn-2');
    const item2 = document.querySelector('.item-2');
    const item3 = document.querySelector('.item-3');

    btn2.addEventListener('click', () => {
        if (item2.style.order === '2') {
            item2.style.order = '3';
            item3.style.order = '2';
        } else {
            item2.style.order = '2';
            item3.style.order = '3';
        }
    });
}
changeBlocksOrder();

// Задание 2.3 Сделать, чтобы при открытии страницы появлялось модальное окно с
// надписью "Привет, мир".

/* Функция showPopUp() срабатывает сразу при загрузке страницы. Появляется модальное окно, закрыть которое можно щелкнув
на крестик справа сверху. Сработает функция closePopUp. Я установила setTimeOut на 1с для отображения мод.окна.
Обработчик события - click.
* */
function showPopUp() {
    const modalWindow = document.querySelector('.modal-window');
    modalWindow.style.display = 'block';
}
const time = setTimeout(showPopUp, 1000);

function closePopUp() {
    const cross = document.querySelector('.cross');
    const modalWindow = document.querySelector('.modal-window');
    cross.addEventListener('click', () => {
        modalWindow.style.display = 'none';
    });
}
closePopUp();

