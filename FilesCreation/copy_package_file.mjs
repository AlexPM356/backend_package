import fs from 'node:fs'

//I KNOW THIS LOOKS AWFUL BUT HAD TO FIND A WAY
const commonJsPackage = '{\n' + '"name": "main",\n' + '"version": "1.0.0",\n' +
    '"description": "",\n' + '"main": "index.js",\n' + '"scripts": {\n' + 
      '"test": "echo \\"Error: no test specified\\" && exit 1",\n' +
      '"dev": "nodemon ./index.js",\n' + '"start": "node ./index.js"\n' +
    '},\n' + '"author": "",\n' + '"license": "ISC",\n' + '"dependencies": {\n' +
      '"express": "^4.19.2",\n' + '"nodemon": "^3.1.4"\n' + '}\n' + '}\n' +
      '//Recommend to format this file => Shift + Alt + F' +
      ' (DELETE THIS LINE FROM THE CODE)';
//=========================================================================================
const EsModulePackage = '{\n' + '"name": "main",\n' + '"version": "1.0.0",\n' +
    '"description": "",\n' + '"main": "index.mjs",\n' + '"scripts": {\n' +
      '"test": "echo \\"Error: no test specified\\" && exit 1",\n' +
      '"dev": "nodemon ./index.mjs",\n' + '"start": "node ./index.mjs"\n' +
    '},\n' + '"author": "",\n' + '"license": "ISC",\n' + '"dependencies": {\n' +
      '"express": "^4.19.2",\n' + '"nodemon": "^3.1.4"\n' + '},\n' +
      '"type": "module"\n' + '}\n' + '//Recommend to format this file => Shift + Alt + F' +
      ' (DELETE THIS LINE FROM THE CODE)';
//=============================================================================================
export default function PackageFiles (fileExtension) {
    if (fileExtension === 'CommonJS') {
        fs.writeFile('./package.json', commonJsPackage, err => {
            if (err) {
              console.error(err);
            } else {
              console.log('Package file created succesfully!!')
            }
          });
    }
    else if (fileExtension === 'ES modules') {
        fs.writeFile('./package.json', EsModulePackage, err => {
            if (err) {
              console.error(err);
            } else {
              console.log('Package file created succesfully!!')
            }
          });
    }
}