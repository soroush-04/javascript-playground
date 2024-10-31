const nums = [ 1,2,3,4,5]
nums.forEach(num => {
    console.log(num * 2)
});

const doubled = nums.map(num => num * 2);
console.log(doubled);

const evens = nums.filter(num => num % 2 === 0);
console.log(evens);

const sum = nums.reduce((total, num) => total + num, 0);
console.log(sum);

const firstEven = nums.find(num => num % 2 === 0);
console.log(firstEven);

const hasEven = nums.some(num => num % 2 === 0);
console.log(hasEven);

const allEven = nums.every(num => num % 2 === 0);
console.log(allEven);