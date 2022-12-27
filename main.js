class User {
	constructor(name, surname) {
		this.name = name;
		this.surname = surname;
	}

	getFullName() {
		return this.name + ' ' + this.surname;
	}
}
var student = new Student('Yasmina', 'Ushurova', 2022);

console.log(worker.name);
console.log(worker.surname);
console.log(worker.getFullName()); 
console.log(worker.year);

// сделала по своему ->

class User{
    constructor(name, surname, year){
        this.name = name;
        this.surname = surname;
        this.year = year;
    }
    getFullName() {
		return this.name + ' ' + this.surname;
	}
}
class Student extends User{
    constructor(name, surname, year){
        super(name, surname, year)
    }
}
const student = new Student('Yasmina', 'Ushurova', 2022)
console.log(student);
student.getFullName()




