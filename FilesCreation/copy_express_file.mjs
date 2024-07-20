import fs from 'node:fs'
const commonJsExpress = `const express = require('express');\n` +
  'const app = express();\n' + 'const PORT = process.env.PORT || 3000;\n \n' +
  `app.get('/', (req, res) =>{\n` + `console.log('Express with CommonJS');\n` +
  '});\n \n' + 'app.listen(PORT, () => {\n' + 'console.log(`Server running on port ${PORT}`);\n' +
  `console.log('----------------------------------------------');\n` + '});\n' +
  '//RECOMENDED => Format file with prettier => Alt + Shift + F';

const EsModuleExpress = `import express from 'express';\n` + 'const app = express();\n' +
  'const PORT = process.env.PORT || 3000;\n \n' + `app.get('/', (req, res) =>{\n` +
  `console.log('Express with ES Module');\n` + '});\n \n' + 'app.listen(PORT, () => {\n' +
  'console.log(`Server running on port ${PORT}`);\n' + 
  `console.log('----------------------------------------------');\n` + '}); \n' +
  '//RECOMENDED => Format file with prettier => Alt + Shift + F';


export default function FileCopyExpress (fileExtension) {
  if (fileExtension === 'CommonJS') {
    fs.writeFile('./src/index.js', commonJsExpress, err => {
        if (err) {
          console.error(err);
        } else {
          console.log('Package file created succesfully!!')
        }
      });
  }
  else if (fileExtension === 'ES modules') {
      fs.writeFile('./src/index.mjs', EsModuleExpress, err => {
          if (err) {
            console.error(err);
          } else {
            console.log('Package file created succesfully!!')
          }
        });
  }
}