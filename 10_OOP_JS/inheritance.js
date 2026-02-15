class User{
    constructor(username){
      this.username = username;
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}
const first = new Teacher("ghulam", "ghulam@teacher.com", 1234);
first.addCourse();

const second = new User("shalu");
second.logMe()

//console.log(first === second);
console.log(first instanceof User);
console.log(first instanceof Teacher);
console.log(second instanceof User);
console.log(second instanceof Teacher);