
class GiftSetController {


showGiftSets(req, res) {
    const { name } = req.params;
  
    const giftSets = [
      { slug: 'small', name: 'mały zestaw', price: 50 },
      { slug: 'medium', name: 'średni zestaw', price: 80 },
      { slug: 'large', name: 'duży zestaw', price: 140 }
    ]
  
    const giftSet = giftSets.find(s => s.slug === name);
    if (giftSet) {
      res.render('pages/giftset', { 
        name: giftSet?.name,
        giftSets: giftSets,
        title: giftSet?.name ?? 'Brak wyników',
        url: req.url 
      })
  
    } else {
      res.send(`nie znaleziono zestawu`);
    }
  
  }}

  module.exports = new GiftSetController();