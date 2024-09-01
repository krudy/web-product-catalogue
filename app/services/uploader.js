// Multer middleware for image uploads
const path = require('path');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, 'public/uploads/');
    },
    filename: function(req, file, callback) {
        const name = Date.now() + path.extname(file.originalname);
        callback(null, name);
    }
});
const upload = multer({ storage: storage});

module.exports = upload;