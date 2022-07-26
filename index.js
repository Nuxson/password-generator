const dom = {
    password: document.getElementById('password'),
    button: document.getElementById('button'),
    limitSymbols: document.getElementById('limitSymbols'),
    passwordSetting:{
        length: document.getElementById('length'),
        uppercase: document.querySelector('#uppercase'),
        numbers: document.querySelector('#numbers'),
        symbols: document.querySelector('#symbols'),
    }

}

const data = {
    letters: {
        up: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        down:'abcdefghijklmnopqrstuvwxyz'
    },
    numbers: '0123456789',
    symbols: '!@#$%^&*()_+`~[]{}:?><'
}

//Генерация случайного числа 
function randomNumberGenerator(maxNumber){
    const randomNumber = Math.round(Math.random() * maxNumber)
    return randomNumber
}

//Генератор набора 
function passworGenerator(symbols,length){
    const maxIdx = symbols.length-1
    let password = ''
    
    for(let i=0; i < length; i++){
        const idx = randomNumberGenerator(maxIdx)
        const randomLetter = symbols[idx]
        password = password+randomLetter
    }
    return password
}

function generatorLimit(){
    dom.limitSymbols.innerText = 'Максимум символов: 15'

}

//Отслеживаем клик по копке 
dom.button.onclick = () => {
    const passwordLength = dom.passwordSetting.length.value
    const uppercase = dom.passwordSetting.uppercase
    const numbers = dom.passwordSetting.numbers
    const symbols = dom.passwordSetting.symbols
    let string = data.letters.down


    //Какие строки символов включать в пароль
   
    if (passwordLength < 16){

        if (uppercase.querySelector('input:checked')){
            string = string + data.letters.up
        }
        if (numbers.querySelector('input:checked')){
            string = string + data.numbers
        }
        if (symbols.querySelector('input:checked')){
            string = string + data.symbols
        }

        const pas = passworGenerator(string, passwordLength)
        dom.password.innerHTML = pas
        console.log('Ваше число:',passwordLength,'\nМаксимум: 15');
    }
    else{
        console.log('Ваше число:',passwordLength,'\nМаксимум: 15');
        generatorLimit()
    

    }
    


}