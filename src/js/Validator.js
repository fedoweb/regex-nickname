export default class Validator {
    constructor(userName) {
        this.userName = userName;
    }

    validateUsername() {
        const regex = /^[a-z]+(?!.*\d{4})[a-z0-9_-]*[a-z]+$/i.test(this.userName);

        if (!regex) {
            throw new Error("Недопустимое имя пользователя"); 
        } 
        return regex;
    }
}
