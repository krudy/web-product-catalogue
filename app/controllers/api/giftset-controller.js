const GiftSet = require('../../db/models/GiftSet');

class GiftSetController {

    async showGiftSets(req, res) {
        const giftSets = await GiftSet.find();
        res.json({giftSets});
    }
}

module.exports = new GiftSetController();