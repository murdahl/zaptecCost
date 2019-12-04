  'use strict';

var express = require('express');
var exphbs  = require('express-handlebars');
 
var app = express();

var hbs = exphbs.create({
    // Specify helpers which are only registered on this instance.
    helpers: {
        foo: function () { return 'FOO!'; },
        bar: function () { return 'BAR!'; },
    }
});


app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
 
app.get('/', function (req, res, next) {
    res.render('home', {
        showTitle: true
    });
});
 
app.listen(3000, function () {
    console.log('express-handlebars example server listening on: 3000');
});