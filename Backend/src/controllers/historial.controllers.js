const historial = {};
const{insertBd,updateRegister,deleteRegister}=require('../DAO/CrudDao.js');



historial.Registrar = async (req, res) => {
    res.status(200).json({message:"Register"});
};

historial.Actualizar = async (req, res) => {
    res.status(200).json({message:"Update"});
};

historial.Eliminar = async (req, res) => {};

module.exports = historial;
