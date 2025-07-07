document.addEventListener('DOMContentLoaded', function() {
    const display = document.querySelector('.display');
    const buttons = document.querySelectorAll('button');
    const equalsButton = document.querySelector('button:nth-child(15)');
    
    buttons.forEach(button => {
        if (button.textContent !== '=') {
            button.addEventListener('click', function() {
                display.value += button.textContent;
            });
        }
    });
    
    equalsButton.addEventListener('click', function() {
        display.value = 'hello world';
    });
    
    const clearButton = document.querySelector('button:nth-child(13)');
    clearButton.addEventListener('click', function() {
        display.value = '';
    });
});