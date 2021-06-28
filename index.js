const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Tu señora XD");
})

app.listen(8000, () => {
    console.log('Escuchando el puerto 8000 porque soy crack');
})
