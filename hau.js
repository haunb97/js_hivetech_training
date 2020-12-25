
function reverseString() {
    const stringBeforeConvert = document.getElementById("input-string-reverse").value;
    const arrayString = stringBeforeConvert.split("");
    const arrayReverse = arrayString.reverse();
    const stringAfterConvert = arrayReverse.join("");
    document.getElementById("output-reverse-string").innerHTML = 'results : ' + stringAfterConvert;
}

function factorial() {
    const number = document.getElementById("input-factorial").value;
    if (number < 0) {
        return document.getElementById("output-factorial").innerHTML = 'results : phải nhập số nguyên dương';
    }
    let factorialValue = 1;
    for (let i = 1; i <= number; i++) {
        factorialValue = factorialValue * i;
    };

    document.getElementById("output-factorial").innerHTML = 'results : ' + factorialValue;
}

function findWordLongest() {
    const inputValue = document.getElementById("input-string").value;
    const convertStringToArray = inputValue.split(" ");
    let longest = 0;
    let word;
    const length = convertStringToArray.length;
    for (let i = 1; i < length; i++) {
        if (longest <= convertStringToArray[i].length) {
            longest = convertStringToArray[i].length;
            word = convertStringToArray[i];
        }
    };

    document.getElementById("output-longest-word").innerHTML = 'results: ' + word;
}

function toUpperCaseFirstWord() {
    const inputValue = document.getElementById("input-string-uppercase").value;
    let convertStringToArray = inputValue.split(" ");
    console.log("convertStringToArray", convertStringToArray);
    const length = convertStringToArray.length();
    for (let index = 0; index < length; index++) {
        const convertStringToArray[index] = convertStringToArray[index].charAt(0).toUpperCase();

    }
}