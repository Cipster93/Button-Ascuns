let winningNumber = Math.floor(Math.random() * 3) + 1;

function pressMe(button) {
    if (button.id === 'Pop' && winningNumber === 1 || button.id === 'Pip' && winningNumber === 2
    || button.id === 'Pap' && winningNumber === 3) {
        alert(button.id + ' is winner');
    } else {
        alert(button.id + ' is loser');
    }
}

function generateButtons() {
    const inputElement = document.getElementById('buttonCountInput');
    const value = parseInt(inputElement.value);
    let winningButton = Math.floor(Math.random() * value) + 1;
    for (let i = 1; i <= value; ++i) {
        const button = document.createElement('button');
        button.textContent = 'Button ' + i;
        button.id = 'Button' + i;
        button.classList.add('btn', 'btn-primary');
        button.addEventListener('click', function() {
            if (this.id === 'Button' + winningButton) {
                alert(button.id + " is winner");
            } else {
                alert(button.id + " is loser");
            }
        });
        document.body.appendChild(button);
    }
}
