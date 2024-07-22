class UserController {
    showRegister(req, res) {
        res.render('pages/auth/register');
    }

    async register(req, res) {
        try {
            // await user.save();
            res.redirect('/signin')
        } catch (error) {
            res.render('pages/auth/register', { 
                errors: error.errors, 
                form: req.body}
            )
            
        }
    }
}

module.exports = new UserController();