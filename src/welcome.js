const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'welcome.txt');
const fileContent = 'Hello Node';

const createFile = () => {
    fs.writeFile(filePath, fileContent, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
}

const readFile = () => {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) throw err;
        console.log(data);
    });
}

createFile();
readFile();