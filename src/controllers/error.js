const ErrorController = (req, res) => {
  res.status(404).json({ Server: 'Recurso no encontrado', Status: 404, OK: false });
};

module.exports = { ErrorController };
