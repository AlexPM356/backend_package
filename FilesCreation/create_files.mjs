import fs from 'fs';
import { otherFiles } from '../others/variables.mjs';

//CREATE .env and .gitignore
export default function CreateOtherFiles (){
    for (let i = 0; i < otherFiles.length; i++) {
        fs.open(otherFiles[i], 'w', function(error, file) {
            if (error) {console.log('Error:', error.message) }
            });
    }
}