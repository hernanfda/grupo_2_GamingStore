const multer = require("multer");
const path = require("path");

const avatar = path.join(__dirname, '../public/img/usersAvatar');
const imageProduct = path.join(__dirname, '../public/img/product-detail');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (file.fieldname === 'userAvatar') {
            cb(null, avatar);
        } else if (file.fieldname === 'image') {
            cb(null, imageProduct);
        }
    },
    filename: (req, file, cb) => {
        if (file.fieldname === 'userAvatar') {
          let nameFile = `userAvatar-${Date.now()}-${file.originalname}` 
          cb(null, nameFile);
      } else if (file.fieldname === 'image') {
          let nameFile = `img-${Date.now()}-${file.originalname}` 
          cb(null, nameFile);
      }
  }
});
const upload = multer({ storage: storage }); 

module.exports = upload;
            



// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     let folderStorage = path.join(__dirname, "../public/img/product-detail");
//     cb(null, folderStorage);
//   },
//   filename: (req, file, cb) => {
//     let nameFile = `product-${Date.now()}-${file.originalname}`;
//     cb(null, nameFile);
//   },
// });

// const upload = multer({ storage });

// module.exports = upload;
