const router = require('express').Router();
//const db = require('../config/db');
const Gig = require('../models/Gig');
const { Op } = require('sequelize');


// Get gig list
router.get('/', async (req, res) => {
    try {
        const gigs = await Gig.findAll();
        const arrayOfGigs = []
        gigs.forEach(gig => {
            arrayOfGigs.push(gig.dataValues);
        });
        res.render('gig', { gigs: arrayOfGigs });
    } catch(error) {
        console.log(error.message);
    }
});


// Get add page 
router.get('/add', (req, res) => res.render('add'));

// add a gig
router.post('/add', async (req, res) => {
    try {
        let { title, tech, budget, desc, contact_email } = req.body;
        errors = require('../validation/addValidation')(title, tech, desc, contact_email);
        if(errors.length > 0) return res.render('add', {
            title,
            tech,
            budget,
            desc,
            contact_email,
            errors
        });
        if(budget) budget = `$${budget}`;
        tech = tech.toLowerCase().replace(/, /g, ',');
        //Insert into table
        await Gig.create({
            title,
            tech,
            budget,
            desc,
            contact_email
        });
        res.redirect('/gigs');
    } catch(error) {
        console.log(error.message);
    }
    
});

router.get('/search', async (req, res) => {
    try {
        let { q } = req.query;
        q = q.toLowerCase();
        const gigs = await Gig.findAll({ where: { tech: { [Op.like]: `%${q}%` } } });
        const arrayOfGigs = []
        gigs.forEach(gig => {
            arrayOfGigs.push(gig.dataValues);
        });
        res.render('gig', { gigs: arrayOfGigs });
    } catch(error) {
        console.log('error');
    }
});


module.exports = router;