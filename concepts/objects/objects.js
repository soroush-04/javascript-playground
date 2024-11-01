const person = {
    name: 'sam',
    'full name': 'sam doe',
    age: 22,
    occupation: 'swe',
    sayName() {
        console.log(this.name);
    },
    get nameAge() {
        return `${this.name} ${this.age}`
    },
    set fullPerson(person) {
        const parts = person.split(' ');
        this.name = parts[0];
        this.age = parts[1];
    }
};

const createPerson = (name, age) => {
    const person = {
      name,
      age
    };
    return person;
};

console.log(person.age)
person.city = 'LA'
console.log(person)
person.sayName();
console.log(person["full name"])
console.log(person.nameAge)

person.fullPerson = 'samuel 222'
console.log(person.fullPerson)

const {name, city} = person
console.log(name, city)

const sami = createPerson('sami', 25);
  
console.log(sami);