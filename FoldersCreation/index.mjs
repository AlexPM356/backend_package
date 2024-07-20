import WorkingFolders from './folders_inside_src.mjs';
import SourceFolder from './create_src_folder.mjs';

export default function CreateFolders () {
    const folderPromise = new Promise((resolve) => {
        SourceFolder();
        resolve();
    })
    folderPromise.then(() => { WorkingFolders() })
}