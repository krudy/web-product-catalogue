const express = require('express');
const router = new express.Router();
const GiftSetController = require('../controllers/api/giftset-controller');

router.get('/giftsets', GiftSetController.showGiftSets);

module.exports = router;