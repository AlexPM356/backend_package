import fs from 'node:fs';
import { commonJsExpress } from '../others/express_server.js';
import { esModuleExpress } from '../others/express_server.mjs'

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
      fs.writeFile('./src/index.mjs', esModuleExpress, err => {
          if (err) {
            console.error(err);
          } else {
            console.log('Package file created succesfully!!')
          }
        });
  }
}