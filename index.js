const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());


app.get('/listado', async(req, res) => {
    try {
        const response = await axios.get('http://www.raydelto.org/agenda.php');
        const contactos = response.data;
        res.json(contactos);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los contactos.' });
    }
});

app.post('/contacto', async(req, res) => {
    try {
        const nuevoContacto = req.body;

        const response = await axios.post('http://www.raydelto.org/agenda.php', nuevoContacto);
        const resultado = response.data;
        res.json(resultado);
    } catch (error) {
        res.status(500).json({ error: 'Error al almacenar el contacto.' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor Express iniciado en http://localhost:${PORT}`);
});