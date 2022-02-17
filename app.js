function getpin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getpin();
    }
}

function generatePin() {
    const pin = getpin()
    document.getElementById('display-pin').value = pin

}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText
    const calcInput = document.getElementById('type-number')
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = ''
        }
    }
    else {

        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }

})

function verifyPin() {
    const pin = document.getElementById('display-pin').value
    const typed = document.getElementById('type-number').value
    const success = document.getElementById('notify-success')
    const fail = document.getElementById('notify-fail')
    if (pin == typed) {

        success.style.display = 'block'
        fail.style.display = 'none'
    }
    else {
        success.style.display = 'none '
        fail.style.display = 'block'
    }
}