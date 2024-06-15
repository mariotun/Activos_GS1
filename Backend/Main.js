const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const activosRoutes = require('./Rutas/Activos_Rutas');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.use('/api/gs1', activosRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
