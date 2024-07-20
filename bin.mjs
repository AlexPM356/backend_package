#!/usr/bin/env node
import SourceFolder from './FoldersCreation/create_src_folder.mjs';
import WorkingFolders from './FoldersCreation/folders_inside_src.mjs';
import CreateAllFiles from './FilesCreation/index.mjs';
import readline from 'node:readline';
import { JsFiles } from './others/variables.mjs';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const mainPromise =  new Promise ((resolve, reject) => {
  //DISPLAY OPTIONS
  for (let i = 0; i < JsFiles.length; i++) {
    console.log(`${i} => ` + JsFiles[i])
  }

  rl.question('Pick an option: ', optionSelected => {
    if (parseInt(optionSelected) === 0 || parseInt(optionSelected) === 1) { resolve(optionSelected) }
    else { reject() }
    rl.close();
  });
  
})

mainPromise
.then( (optionSelected) => {
  SourceFolder();
  return new Promise((resolve) => {
      resolve(optionSelected);
  })
})
.then((optionSelected) => {
  setTimeout(() => {
      WorkingFolders();
      CreateAllFiles(JsFiles[parseInt(optionSelected)]);
      setTimeout(() => {
          console.log(`${JsFiles[parseInt(optionSelected)]} was selected!!`)
      }, 20);
  }, 10)
})
.catch(() => {
  //IF WRONG OR NOT CONDITION IS GIVEN THEN STOP EXECUTION
  console.log('Execution was canceled!!');
  process.exit();
})