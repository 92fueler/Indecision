
class Person {
    constructor(name = 'Anonymous', age = 0){
        this.name = name;
        this.age = age;
    }

    getGreeting(){
        return 'Hi, I am ' + this.name + '!'
    }

    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`;
    }

}

class Student extends Person {
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
        let description = super.getDescription();

        if (this.hasMajor()){
            description += ` This student has a major in ${this.major}.`
            return description;
        }
    }
}

class Traveler extends Person {
    constructor(name, age, support){
        super(name, age);
        this.support = support; 
    }

    hasSupport(){
        return !!this.support;
    }

    getGreeting(){
        let greeting = super.getGreeting();
        if(this.hasSupport()){
            greeting += ` I'm visiting from ${this.support}.`;
        }
        return greeting;
    }
};

const other = new Traveler('Mike', 23, 'SF');
console.log(other);
console.log(other.getGreeting());

/*
const me = new Person('Jian', 32);

console.log(me);
console.log(me.getGreeting());
console.log(me.getDescription());

const her = new Student('Yifan', 30, 'Accounting');
console.log(her);
console.log(her.getGreeting());
console.log(her.getDescription());
console.log(her.hasMajor());
*/

