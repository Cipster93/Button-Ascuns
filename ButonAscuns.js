let winningNumber = Math.floor(Math.random() * 3) + 1;

function pressMe(button) {
    if (button.id === 'Pop' && winningNumber === 1) {
        alert(button.id + ' este câștigător');
    } else if (button.id === 'Pip' && winningNumber === 2) {
        alert(button.id + ' este câștigător');
    } else if (button.id === 'Pap' && winningNumber === 3) {
        alert(button.id + ' este câștigător');
    } else {
        alert('Necastigator');
    }
}

function generateButtons() {
    const inputElement = document.getElementById('buttonCountInput');
    const value = parseInt(inputElement.value);
    let winningButton = Math.floor(Math.random() * value) + 1;
    for (let i = 1; i <= value; ++i) {
        const button = document.createElement('button');
        button.textContent = 'Buton ' + i;
        button.id = 'button' + i;
        button.classList.add('btn', 'btn-primary');
        button.addEventListener('click', function() {
            if (this.id === 'button' + winningButton) {
                alert(button.id + " Câștigător");
            } else {
                alert("Necâștigător");
            }
        });
        document.body.appendChild(button);
    }
}
