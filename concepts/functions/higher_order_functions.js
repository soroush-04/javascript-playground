function operateOnNumbers(num1, operation, num2) {
    return operation(num1, num2);
}

const sum = (a, b) => a + b;
const result = operateOnNumbers(5, sum, 4);
console.log(result);


function multiplier(factor) {
    return function(x) {
        return x * factor;
    };
}

const double = multiplier(2);
console.log(double(5));