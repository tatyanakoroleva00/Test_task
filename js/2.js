// 2.4 Сделать в отдельном файле форму с 5 выпадающими списками и 2
// полями для ручного ввода информации. Списки должны содержать цифры от
// 1 до 5. Также нужна кнопка для отправки формы.

// +

// 2.5 Сделать формирование JSON-структуры из данных формы. Выводить ее
// на экран под формой. Отправка формы не должна перезагружать страницу.

/*
По щелчку мыши на кнопку Send идет отображение JSON string, которая состоит из данных, введенных пользователем. Я использовала entries,
чтобы сразу получить все данные из формы. И поместила с помощью insertAdjacentHTML в блок под формой. Идет очистка форм по нажатию на
клавишу Reset. С помощью innerHTML я поменяла значение кнопки SEND. Страница не перезагружается.
Есть 2 варианта вывода данных, один вывод в виде строки JSON, другой - вывод разметки с values клиента.
Внутри функции getData() вызывается асинхронная функция hello() с переданными ей параметрами.

* */
form.addEventListener('submit', getData);
     function getData(e) {
        e.preventDefault();

         const form = document.querySelector('#form');
         const data = document.querySelector('#data');
         const submit = document.querySelector('.button');

        /*Вывод строки под формой*/
        const result = new FormData(e.target);
         const value = Object.fromEntries(result.entries());

         const nameValue = value.name;
         const selectValue = value.select;
         const textareaValue = value.textarea;

         const json = JSON.stringify(value);
         data.insertAdjacentHTML('beforeend', json);

         /****************Здесь я решила, как вариант, вывести данные, введенные пользователем под формой, напрямую********/
        // function dataOutput() {
        //         const finalText = `
        //           <p><span class="bold">Your name is </span> ${name}.</p>
        //           <p><span class="bold">Your choice is </span> ${choice}.</p>
        //           <p><span class="bold">You think that </span> ${message}</p>
        //     `;
        //         data.insertAdjacentHTML("beforeend", finalText);
        // }
        // dataOutput();

        /*КНОПКА И ВЫВОД УВЕДОМЛЕНИЯ (СЕРВЕР)*/
            if (data.style.display === 'flex') {
                data.style.display = 'none';
                data.textContent = '';
                form.reset();
                submit.value = 'Send';
                submit.style.backgroundColor = 'rgba(32, 178, 171, 0.84)';
            } else {
                hello(nameValue, selectValue, textareaValue);
                data.style.display = 'flex';
                submit.style.backgroundColor = 'Red';
                submit.textContent = '';
                submit.value = 'Reset';
            }
}
// 2.6 Форма должна отправлять асинхронный GET-запрос к абстрактному
// обработчику на том же сервере (в той же папке). В случае, если данные
// дошли, надо получать ответ. Можно выводить его через alert.

    async function hello(name, select, textarea) {
        const url = `./server.php?name=${name}&select=${select}&textarea=${textarea}`;

        const response = await fetch(url);
        console.log(response);
        if (response.ok) {
            alert('All is good');
            // response.json();
        } else {
            alert("Ошибка HTTP: " + response.status);
        }
    }