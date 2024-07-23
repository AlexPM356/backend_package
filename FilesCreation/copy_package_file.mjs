import fs from 'node:fs'
import { commonJsPackage } from '../others/js_package.js';
import { esModulePackage } from '../others/mjs_package.js';

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
        fs.writeFile('./package.json', esModulePackage, err => {
            if (err) {
              console.error(err);
            } else {
              console.log('Package file created succesfully!!')
            }
          });
    }
}