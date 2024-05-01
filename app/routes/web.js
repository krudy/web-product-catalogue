const express = require('express');
const router = new express.Router();
const GiftSetController = require('../controllers/giftset-controller');
const PageController = require('../controllers/page-controller');

router.get('/', PageController.home);

router.get('/sets', GiftSetController.showGiftSets);

router.get('/sets/:name', GiftSetController.showGiftSet);

router.get('*', PageController.notFound);

module.exports = router;