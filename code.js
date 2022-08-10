// helloWorld function
function helloWorld() {
    return "Hello, World!";
}

function sayHello(input){
    if(typeof input === 'string'){
        return `Hello, ${input}`
    } else {
        return "Hello, World!"
    }
}

function isFive(input){
    return input === 5;
}

function isEven(input) {
    return parseInt(input) % 2 === 0;
}

function isVowel(input){
    return input === 'a' || input === 'e' || input === 'i' || input === 'o' || input === 'u' || input === 'A' || input === 'E' || input === 'I' || input === 'O' || input === 'U';
}

function add(input1, input2){
    if(input1 + input2){
        return parseInt(input1) + parseInt(input2);
    } else {
        return NaN
    }
}
