document.addEventListener('DOMContentLoaded', function() {
    const textInput = document.getElementById('textInput');
    const duplicateField = document.getElementById('duplicateField');
    const textForm = document.getElementById('textForm');
    const submitButton = document.getElementById('submitButton');

    textInput.addEventListener('input', function() {
        duplicateField.textContent = textInput.value;
    });

    textForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Отменяем стандартное поведение формы

        const inputText = textInput.value;
        console.log(inputText); // Выводим текст в консоль
        textInput.value = ''; // Очищаем поле ввода
        duplicateField.textContent = ''; // Очищаем текстовый блок
    });
});
