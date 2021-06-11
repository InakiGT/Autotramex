import React, {useState} from 'react';
import styled from '@emotion/styled';
import emailjs from 'emailjs-com';


const Contenedor = styled.div`
    background-color: rgba(227, 228, 229, 84%);
    font-family: 'PT Sans', sans-serif;
    text-align: center;
    padding: 4rem 1rem;
    width: 90rem;
    position: fixed;
    z-index: 3;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    animation-duration: 1.5s;
    animation-name: aparecer;

    @media (max-width: 550px) {
        max-width: 90%;
    }

    @keyframes aparecer {
        from {
            opacity: 0%;
        }

        to {
            opacity: 100%;
        }
    }
`;

const Titulo = styled.p`
    font-size: 4rem;
    font-weight: 700;
    text-transform: uppercase;
    margin: 0 0 2rem 0;
`;

const Sub = styled.p`
    font-size: 2.4rem;
    font-weight: 300;
    margin: 0 0 2rem 0;
`;

const Formulario = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;
    animation-duration: 1.7s;
    animation-name: bajar;

    input {
        margin-bottom: 2rem;
        font-family: 'Roboto', sans-serif;
        padding: 1.5rem 2rem;
        font-size: 2.2rem;
        font-weight: 300;
        width: 80%;
        border: none;
    }

    @keyframes bajar {
        from {
            margin-top: 100rem;
        }

        to {
            margin-top: 0;
        }
    }
`;

const Boton = styled.button`
    background-color: rgba(51, 51, 51, 95%);
    border: none;
    text-transform: uppercase;
    font-family: 'Roboto', sans-serif;
    padding: 1rem 3rem;
    font-weight: 700;
    color: #FFF;
    font-size: 2.3rem;
    cursor: pointer;
    transition: all .3s ease-in-out;
    margin-top: 2rem;

    &:hover {
        background-color: rgb(65, 65, 65);
    }
`;

const Cerrar = styled.div`
    display: flex;
    justify-content: end;
    flex-direction: row-reverse;
    margin-right: 4rem;
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
`;

const Close = styled.button`
    border: none;
    background-color: transparent;
    text-transform: capitalize;
    font-size: 1.6rem;
    cursor: pointer;
    transition: .3s all ease;

    &:hover {
        color: #FFF;
    }

    @media (max-width: 550px) {
        margin-bottom: 2rem;
    }
`;

const MensajeCorrecto = styled.div`
    text-align: center;
    background-color: rgba(127, 247, 95, 80%);
    max-width: 60%;
    margin: 0 auto 2rem auto;
    font-size: 2rem;
    padding: 1rem 2rem;
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
`;

const MensajeError = styled.div`
    text-align: center;
    background-color: rgba(248, 68, 60, 80%);
    max-width: 60%;
    margin: 0 auto 2rem auto;
    font-size: 2rem;
    padding: 1rem 2rem;
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
`;

const Emergente = () => {

    const [estado, setEstado] = useState(true);
    const [mensaje, setMensaje] = useState(null);

    //State del formulario
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');    
    const [celular, setCelular] = useState('');
    const [texto, setTexto] = useState('');

    const enviarForm = e => {
        e.preventDefault();
        if(nombre.trim() !== '' && celular.trim() !== '' && correo.trim() !== '' && texto.trim() !== '') {
            emailjs.sendForm('service_0cq64ye', 'template_8xfu7og', e.target, 'user_Pp0unMUrW7VPj2FnPvBKZ')
                .then((result) => {
                    setMensaje(['Mensaje enviado correctamente', 'ok']);
                }, (error) => {
                    setMensaje(['Hubo un error, favor de volverlo a intentar más tarde', 'error']);
                });


            e.target.reset();

            setTimeout(() => {
                setEstado(!estado);
            }, 3000);

        } else {
            setMensaje(['Todos los campos son obigatorios', 'error']);
        }

        setTimeout(() => {
            setMensaje(null);
        }, 3000);
    }

    const mostrarMensaje = () => {
        if(mensaje[1] === 'ok') {
            return (
                <MensajeCorrecto>{mensaje[0]}</MensajeCorrecto>
            )
        } else {
            return (
                <MensajeError>{mensaje[0]}</MensajeError>
            )
        }
    }

    return (
        <>
            {estado && (
                <Contenedor>
                    <Cerrar>
                        <Close
                            onClick={() => setEstado(!estado)}
                        >Cerrar</Close>
                    </Cerrar>
                    <div>
                        <Titulo>Contactanos</Titulo>
                        <Sub>y te contestaremos lo más pronto posible</Sub>
                        {mensaje && mostrarMensaje()}
                    </div>
                    <Formulario
                        onSubmit={e => enviarForm(e)}
                    >
                        <input
                            type="text"
                            placeholder="Nombre"
                            name="nombre"
                            onChange={e => setNombre(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Correo"
                            name="correo"
                            onChange={e => setCorreo(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Celular"
                            name="celular"
                            onChange={e => setCelular(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="¿Cómo podemos ayudarte?"
                            name="mensaje"
                            onChange={e => setTexto(e.target.value)}
                        />
                        <div>
                            <Boton
                                type="submit"
                            >
                                Enviar
                            </Boton>
                        </div>
                    </Formulario>
                </Contenedor>
            )}
        </>
     );
}
 
export default Emergente;