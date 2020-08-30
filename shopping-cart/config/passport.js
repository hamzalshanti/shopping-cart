const passport = require('passport');
const User = require('../models/userModel');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) => {
    User.findById(id, (error, user) => {
        done(error, user);
    });
})

passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, email, password, done) => {
    var {errors} = validationResult(req);
    const messages = [];
    if(errors.length > 0) {
        errors.forEach(error => {
            messages.push(error.msg);
        });
        return done(null, false, req.flash('error', messages));
    }
    try {
        const user = await User.findOne({ email });
        if(user) return done(null, false, 'email is already in user.');
        const newUser = new User();
        newUser.email = email;
        newUser.password = await newUser.encryptPassword(password);
        await newUser.save();
        return done(null, newUser);
    } catch (err){
        return done(err);
    }

}));

passport.use('local-signin', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, email, password, done) => {
    var {errors} = validationResult(req);
    const messages = [];
    if(errors.length > 0) {
        errors.forEach(error => {
            messages.push(error.msg);
        });
        return done(null, false, req.flash('error', messages));
    }
    try {
        const user = await User.findOne({ email });
        if(!user) return done(null, false, 'no user found');
        if(! await user.isMatch(password)) return done(null, false, 'incorrect password');
        return done(null, user);
    } catch (err){
        return done(err);
    }

}));