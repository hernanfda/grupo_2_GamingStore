const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let folderStorage = path.join(__dirname, "../public/img/product-detail");
    cb(null, folderStorage);
  },
  filename: (req, file, cb) => {
    let nameFile = `product-${Date.now()}-${file.originalname}`;
    cb(null, nameFile);
  },
});

const upload = multer({ storage });

module.exports = upload;
