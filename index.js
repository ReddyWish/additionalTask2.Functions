let showSuccessMessage = (message) => {
    console.log(message)
}

let showErrorMessage = (message) => {
    console.error(message)
}


function checkTextOnErrorSymbol(text, errorSymbol, successCallback, errorCallback) {
    let arrFromText = text.split('')
    if (text.includes('а')) {
        arrFromText.forEach((item, index) => {
            if (item === 'а') {
                showErrorMessage(`найден запрещенный символ ${errorSymbol}, под индексом ${index}`)
            }
        })
    }
    else {
                showSuccessMessage('В данном тексте нет запрещенных символов')
        }
}



let text = 'Привет! Как дела! Давно мы с тобой не виделись.';
checkTextOnErrorSymbol(text, 'a', showSuccessMessage, showErrorMessage)