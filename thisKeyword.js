class Person{
    constructor(Name, Age, Gender, Nationality){
        this.Name = Name;
        this.Age = Age;
        this.Gender = Gender;
        this.Nationality = Nationality;
    }
    
    introduce(){
        return `My name is ${this.Name}, I am ${this.Age} years old, I am ${this.Gender} and I am ${this.Nationality}.`
    }
}

const p1 = new Person("Abhishek", 26, "Male", "Indian");
const p2 = new Person("John", 27, "Male", "American");
const p3 = new Person("Samantha", 26, "Female", "British");


console.log(p1.introduce());
console.log(p2.introduce());
console.log(p3.introduce());

class Student extends Person{
    constructor(Name, Age, Gender, Nationality, subject){
        super(Name, Age, Gender, Nationality);
        this.subject = subject;
    }
    
    study(){
        return `My name is ${this.Name}, I am ${this.Age} years old, I am ${this.Gender} and I am ${this.Nationality}. I am studying ${this.subject}.`
    }
}

const s1 = new Student("Abhishek", 26, "Male", "Indian", "Computer Science");

console.log(s1.study());
