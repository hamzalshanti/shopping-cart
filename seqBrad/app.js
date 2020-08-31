const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const app = express();

const db = require('./config/db');


// Test connection
db.authenticate()
    .then(() => console.log('Database Connection'))
    .catch(() => console.log('DB'))


// Middlewares
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


app.get('/', (req, res) => {
    res.render('index', { layout: 'landing' });
});
app.use('/gigs', require('./routes/gigs'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, _ => {
    console.log(`Server Running on PORT:${PORT}`);
})



