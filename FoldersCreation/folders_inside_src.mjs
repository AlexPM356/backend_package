import fs from 'fs'
import { srcPath, srcFolders } from '../others/variables.mjs';

export default function WorkingFolders () {
    for (let i = 0; i < srcFolders.length; i++) {
        fs.access(srcPath + srcFolders[i], (error) => {
            if (error) {
                fs.mkdir(srcPath + srcFolders[i], (error) => {
                if (error) {
                    console.log(error);
                } else {
                    console.log(`${srcFolders[i]} Directory created successfully!!`);
                }
                });
            } else {
                console.log(`${srcFolders[i]} directory alredy exists!!`);
            }
        });
    }
}
