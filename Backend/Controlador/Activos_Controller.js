const db = require('../Modelo/DB');

exports.addActivo = (req, res) => {
  const { codigo_activo, descripcion, fecha_alta, estatus, origen } = req.body;

  // Validación de longitud del código de activo
  if (codigo_activo.toString().length !== 13) {
      return res.status(400).send('El código de activo debe tener exactamente 13 caracteres numéricos.');
  }

  const query = 'INSERT INTO activos (codigo_activo, descripcion, fecha_alta, estatus, origen) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [codigo_activo, descripcion, fecha_alta, estatus, origen], (err, result) => {
      if (err) {
          return res.status(500).send(err);
      }
      res.send('Activo agregado...');
  });
};

exports.getActivoStatus = (req, res) => {
    const { codigo } = req.params;
    const query = 'SELECT estatus FROM activos WHERE codigo_activo = ?';
    db.query(query, [codigo], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send(result[0]);
    });
};

exports.getAllActivos = (req, res) => {
  const query = 'SELECT * FROM activos';
  db.query(query, (err, results) => {
      if (err) {
          return res.status(500).send(err);
      }
      console.log(results);
      res.send(results);
  });
};
