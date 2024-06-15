const db = require('../Modelo/DB');

const {
  validateCodigoActivo,
  validateDescripcion,
  validateFechaAlta,
  validateEstatus
} = require('../Validacion/Activos_Validaciones');

exports.addActivo = (req, res) => {
  const { codigo_activo, descripcion, fecha_alta, estatus, origen } = req.body;

  // Validaciones
  const codigoActivoError = validateCodigoActivo(codigo_activo);
  const descripcionError = validateDescripcion(descripcion);
  const fechaAltaError = validateFechaAlta(fecha_alta);
  const estatusError = validateEstatus(estatus);

  if (codigoActivoError || descripcionError || fechaAltaError || estatusError) {
      return res.status(400).send({
          codigoActivoError,
          descripcionError,
          fechaAltaError,
          estatusError
      });
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

      // Validaciones
    const codigoActivoError = validateCodigoActivo(codigo);

    if (codigoActivoError) {
        return res.status(400).send({
            codigoActivoError
        });
    }

    const query = 'SELECT estatus FROM activos WHERE codigo_activo = ?';
    db.query(query, [codigo], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        
        if (result[0] == null){
          res.send("Codigo del Activo No Encontrado");
        }else{
          res.send(result[0]);
        }
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
