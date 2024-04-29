class PageController {

    home(req, res) {
        res.render("pages/home", {
            title: 'Strona główna',
            url: req.url
        })
    }

    notFound(req, res) {
        res.render('errors/404', {
            title: 'Nie znaleziono',
            layout: 'layouts/minimalistic',
            url: req.url
        })
    }
}

module.exports = new PageController();