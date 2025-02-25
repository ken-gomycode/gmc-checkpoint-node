const generator = require('generate-password');

const generateRandomPassword = () => {
    return generator.generate({
        length: 10,
        numbers: true
    });
}

const password = generateRandomPassword();
console.log(password);