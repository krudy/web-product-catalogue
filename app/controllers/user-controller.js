const User = require('../db/models/user');

class UserController {
    showRegister(req, res) {
        res.render('pages/auth/register');
    }

    async register(req, res) {
        
        const user = new User({
            email: req.body.email,
            password: req.body.password          
    });

        try {
            await user.save();
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