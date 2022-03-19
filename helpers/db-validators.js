const userModel = require('../models/userModel');


const emailExiste = async (email = '') => {

    // Verificar si el correo existe
    const existeEmail = await userModel.findOne({ email });
    if (existeEmail) {
        throw new Error(`El correo: ${email}, ya está registrado`);
    }
}

const existeUsuarioPorId = async (id = '') => {

    const existeUsuario = await userModel.findById(id);
    if (!existeUsuario) {
        throw new Error('El usuario con ID: ' + id + ' no existe.')
    }
}

const coleccionesPermitidas = async (coleccion = '', colecciones = []) => {
    const incluida = await colecciones.includes(coleccion);
    if (!incluida) {
        throw new Error('Colecciones permitidas: ' + colecciones);
    }
}


module.exports = {
    emailExiste,
    existeUsuarioPorId,
    coleccionesPermitidas
}