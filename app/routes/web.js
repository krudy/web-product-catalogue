const express = require('express');
const router = new express.Router();
const GiftSetController = require('../controllers/giftset-controller');
const UserController = require('../controllers/user-controller');
const PageController = require('../controllers/page-controller');

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

router.get('/', PageController.home);

router.get('/sets', GiftSetController.showGiftSets);

router.get('/sets/:name', GiftSetController.showGiftSet);

router.get('/registration', UserController.showRegister);
router.post('/registration', UserController.register);
router.get('/login', UserController.showLogin);
router.post('/login', UserController.login);
router.get('/logout', UserController.logout);

router.get('/profile', UserController.showEditProfileForm);
router.post('/profile', UserController.update);

router.get('/admin/sets/add', GiftSetController.showAddGiftSetForm);
router.post('/admin/sets/add', upload.single('image'), GiftSetController.createGiftSet);
router.get('/admin/sets/:name/edit', GiftSetController.showEditGiftSetForm);
router.post('/admin/sets/:name/edit', upload.single('image'), GiftSetController.editGiftSet);
router.get('/admin/sets/:name/delete', GiftSetController.deleteGiftSet);
router.get('/admin/sets/:name/delete-image', GiftSetController.deleteImage);

router.get('*', PageController.notFound);

module.exports = router;