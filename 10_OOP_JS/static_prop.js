class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`;
    }
}

const zain = new User("zain");
//console.log(zain.createId());

class Teacher extends User{
    constructor(username, email){
        super(username);
        this.email = email;
    }
}

const ehsan = new Teacher("ehsan", "ehsan@gmail.com");
console.log(ehsan.logMe());
console.log(ehsan.createId());