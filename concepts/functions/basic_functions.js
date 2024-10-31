function hey(name) {
    return `hey ${name}`;
}

const add = function(a, b) {
    return a + b;
};

function sum(...args) {
    return args.reduce((total, num) => total + num, 0);
}


console.log(hey('sam'));
console.log(add(5, 3)); 
console.log(sum(1, 2, 3));
console.log(sum(10, 20, 30, 40));
