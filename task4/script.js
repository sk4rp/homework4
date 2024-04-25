document.addEventListener('DOMContentLoaded', function() {
    const changeLink = document.getElementById('changeLink');

    changeLink.addEventListener('click', function(event) {
        event.preventDefault();

        const newText = prompt('Введите новый текст для ссылки:');
        
        if (newText !== null) {
            changeLink.textContent = newText;
        }
    });
});
