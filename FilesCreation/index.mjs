import CreateOtherFiles from "./create_files.mjs";
import PackageFiles from "./copy_package_file.mjs";
import FileCopyExpress from "./copy_express_file.mjs";

export default function CreateAllFiles (fileExtension) {
    CreateOtherFiles();
    PackageFiles(fileExtension);
    FileCopyExpress(fileExtension);
}