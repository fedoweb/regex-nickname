export default class Validator {

    validateUsername(name) {
        const regex = /^[a-z]+(?!.*\d{4})[a-z0-9_-]*[a-z]+$/i.test(name);

        if (!regex) {
            throw new Error("Недопустимое имя пользователя"); 
        } 
        return regex;
    }
}
