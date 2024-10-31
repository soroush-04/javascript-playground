function outerFunction() {
    const outerVariable = 'outside!';

    function innerFunction() {
        console.log(outerVariable);
    }

    return innerFunction;
}

const inner = outerFunction();
inner();


function createIDGenerator() {
    let idCounter = 0;

    return function() {
        idCounter++; //
        return `ID_${idCounter}`;
    };
}

const generateID = createIDGenerator();

console.log(generateID());
console.log(generateID()); 
console.log(generateID());

const anotherIDGenerator = createIDGenerator();
console.log(anotherIDGenerator());
console.log(anotherIDGenerator());
