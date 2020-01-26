const express = require('express');
const app = express();
//para usar template engine
const hbs = require('hbs');
require('./hbs/helpers');

//configuracion para puerto en HEroku o 300 en local por defecto
const port = process.env.PORT || 3000;

//express usa "middleware" para filtrar todo tipo de peticion a compraracion de antes que escuchaba todas las peticiones
app.use(express.static(__dirname + '/public'))

//hace que funcione los partials para reusar codigo con handlebars(es parte de hbs)
hbs.registerPartials(__dirname + '/views/partials');
//Express HBS engine (para que express lo use por defect), permite tener paginas dinamicas con el uso de handlebars
app.set('view engine', 'hbs');


app.get('/', (req, res) => {

    //res.send(algo);
    res.render('home');

});

app.get('/about', (req, res) => {


    res.render('about');

});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});