class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    capitalizeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const zabarwan = new User("zabarwan", "zabarwan@hill.com", "1234");
console.log(zabarwan.encryptPassword());
console.log(zabarwan.capitalizeUsername());

