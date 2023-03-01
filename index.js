const express = require('express');
const app = express();
const session = require('express-session');
const flash = require('connect-flash');

app.use(session({
    secret: 'nodejs',
    saveUninitialized: true,
    resave:true
}))

app.use(flash())

app.get('/', (req, res) => {
    req.flash('message', 'success message');
    res.redirect('/profile')
})


app.get('/profile', (req, res) => {
    res.send(req.flash('message'))
})

app.listen(5000, () => {
   console.log('App running on port 5000') 
})