
// console.log
document.getElementById('consoleLog').addEventListener('click', function() {
    alert('Метод console.log() используется для вывода сообщений в консоль браузера.');
});

// Замена текста console.log
document.querySelector('#consoleLog + code').textContent = 'Пример использования команды console.log';

// alert
document.getElementById('alert').addEventListener('click', function() {
    alert('Метод Alert() используется для отображения всплывающего диалогового окна с сообщением для пользователя.');
});

// prompt
document.getElementById('prompt').addEventListener('click', function() {
    alert('Метод Prompt() используется для отображения всплывающего диалогового окна с запросом ввода данных от пользователя.');
});



