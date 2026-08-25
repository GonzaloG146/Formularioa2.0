
function CrearUsuario(nombre,
apellido,tipo_identificacion,
numero_identificacion,fecha_nacimiento,celular,
correo,pais, ciudad, politica_datos)
{
   
    const usuarioCreado = {
    id : Date.now(),
    nombreCompleto : `${nombre} ${apellido}`,
    documento : {
        tipo : tipo_identificacion,
        numero : numero_identificacion
    },
    FechaNacimiento : fecha_nacimiento,
    celular : celular,
    correo : correo,
    pais : {
        pais : pais,
        ciudad : ciudad 
    },
    datosPersonales : politica_datos,
    fechaRegistro : new Date().toLocaleDateString()
       
                    };
    return usuarioCreado
};


    const formulario = document.querySelector('form');
formulario.addEventListener('submit', function(event) {

    event.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const tipo_identificacion = document.getElementById('tipo_identificacion').value;
    const numero_identificacion = document.getElementById('numero_identificacion').value;
    const fecha_nacimiento = document.getElementById('fecha_nacimiento').value;
    const celular = document.getElementById('celular').value;
    const correo = document.getElementById('correo').value;
    const pais = document.getElementById('pais').value;
    const ciudad = document.getElementById('ciudad').value;
    const politica_datos = document.getElementById('politica_datos').value;

    const crearUsuario = CrearUsuario(nombre,apellido,tipo_identificacion,numero_identificacion,fecha_nacimiento,celular,pais,ciudad,politica_datos);

    console.log('Registro Creado');
    const usuarioJSON = JSON.stringify(crearUsuario);
    localStorage.setItem(crearUsuario.id , usuarioJSON);
    
});
