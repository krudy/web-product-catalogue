class PageController {

    home(req, res) {
        res.render("pages/home", {
            title: 'Strona główna',
        })
    }

    notFound(req, res) {
        res.render('errors/404', {
            title: 'Nie znaleziono',
            layout: 'layouts/minimalistic'
        })
    }
}

module.exports = new PageController();