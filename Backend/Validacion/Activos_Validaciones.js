// validators/activosValidator.js

exports.validateCodigoActivo = (codigo_activo) => {
  if (!/^\d{13}$/.test(codigo_activo)) {
      return 'El código de activo debe tener exactamente 13 caracteres numéricos.';
  }
  return null;
};

exports.validateDescripcion = (descripcion) => {
  if (!descripcion || descripcion.trim().length === 0) {
      return 'La descripción es obligatoria.';
  }
  return null;
};

exports.validateFechaAlta = (fecha_alta) => {
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  if (!regex.test(fecha_alta)) {
      return 'La fecha de alta debe estar en el formato YYYY-MM-DD.';
  }
  return null;
};

exports.validateEstatus = (estatus) => {
  if (!estatus || estatus.trim().length === 0) {
      return 'El estatus es obligatorio.';
  }
  return null;
};
