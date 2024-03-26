const fs = require("fs");
const path = require("path");

const processFile = (filePath) => {
  const allPhotos = [];
  const files = fs.readdirSync(filePath);
  files.forEach((file, index) => {
    const fileExt = path.extname(file);
    if (fileExt === ".jpg" || fileExt === ".jpeg" || fileExt === ".png") {
      const fileName = `web${index + 1}`;
      const fileObj = {
        fileName,
        filePath: `./images/${file}`,
      };
      allPhotos.push(fileObj);
    }
  });
  return allPhotos;
};

// console.log();

const allPhotos = processFile("./images");

function reNameFiles() {
  allPhotos.forEach((photo, index) => {
    const oldPath = path.join(__dirname, photo.filePath);
    const newPath = path.join(__dirname, `./images/web${index + 1}.jpg`);
    fs.renameSync(oldPath, newPath);
  });
}

function fileImport() {
  let imports = ``;
  allPhotos.forEach((photo) => {
    imports = imports + `import ${photo.fileName} from '${photo.filePath}';\n`;
  });
  imports =
    imports +
    `\n\n export default [${allPhotos
      .map((photo) => photo.fileName)
      .join(", ")}]`;
  fs.writeFileSync("images.js", imports);
}
