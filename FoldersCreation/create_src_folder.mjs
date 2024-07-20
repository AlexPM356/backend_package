import fs from 'fs'
import { srcPath } from '../others/variables.mjs';

export default function SourceFolder () {
    fs.access(srcPath, (error) => {
        if (error) {
            fs.mkdir(srcPath, (error) => {
            if (error) { console.log(error); }
            else {
                console.log(`${srcPath} directory created successfully!!`);
            }
            });
        } else {
            console.log(`${srcPath} directory alredy exists!!`);
        }
    });
}