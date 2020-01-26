//importar libreria(propia de node)
const http = require('http');

//crear el servidor-recibe callback request y response que ervidor envia
http.createServer((req, res) => {
        //puedes escribir como servicio
        //defines servicio               
        res.writeHead(200, { 'Content-Type': 'application/json' });

        //json de muestra
        let salida = {
            nombre: 'Amue',
            edad: 32,
            url: req.url
        }

        //escribes salida en forma de JSON
        res.write(JSON.stringify(salida));

        //puedes escribir como pagina web
        //res.write(' Hola Mundo');
        res.end();
    })
    .listen(8080);


console.log('Escuchando puerto 8080');