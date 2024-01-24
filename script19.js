// Rest Parameter

function myFunc(a, b, ...myArgs) {
    return myArgs;
}

console.log(myFunc(1, 2, 3, 4,5));
