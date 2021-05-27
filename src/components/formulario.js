import React, {useState} from 'react';
import styled from '@emotion/styled';
import emailjs from 'emailjs-com';

const Form = styled.form`
    padding: 3rem 4rem;

    @media (max-width: 550px) {
        padding: 1rem;
    }
`;

const DivInput = styled.div`
    font-size: 3.5rem;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin-bottom: 4rem;

    label {
        margin-bottom: 2rem;
    }

    input, textarea {
        width: 95%;
        margin: 0 auto;
        font-family: 'Roboto', sans-serif;
        font-size: 2rem;
        padding: 1.5rem 3rem;
        background-color: rgba(255, 255, 255, 70%);
        border: none;
        ::-webkit-input-placeholder { color: rgba(255, 255, 255, 70%);; } 
        :-moz-placeholder {  color: rgba(255, 255, 255, 70%); } 
        ::-moz-placeholder { color: rgba(255, 255, 255, 70%); } 
        :-ms-input-placeholder { color: rgba(255, 255, 255, 70%); }
        font-weight: 300;
    }

    textarea {
        resize: none;
        height: 15rem;
    }
`;

const ContenedorEnviar = styled.div`
    text-align: center;
`;

const Enviar = styled.button`
    text-decoration: none;
    color: #FFFFFF;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    background-color: #930001;
    padding: 2rem 4rem;
    font-size: 2rem;
    transition: all .3s ease;
    border: none;

    &:hover {
        background-color: #C60103;
        cursor: pointer;
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

const Formulario = () => {

    //State del formulario
    const [mensaje, setMensaje] = useState(null);
    const [nombre, setNombre] = useState('');
    const [celular, setCelular] = useState('');
    const [correo, setCorreo] = useState('');
    const [texto, setTexto] = useState('');

    const sendEmail = e => {
        e.preventDefault();

        if(nombre.trim() !== '' && celular.trim() !== '' && correo.trim() !== '' && texto.trim() !== '') {
            emailjs.sendForm('service_0cq64ye', 'template_8xfu7og', e.target, 'user_Pp0unMUrW7VPj2FnPvBKZ')
            .then((result) => {
                setMensaje(['Mensaje enviado correctamente', 'ok']);
            }, (error) => {
                setMensaje(['Hubo un error, favor de volverlo a intentar más tarde', 'error']);
            });


            e.target.reset();
            setNombre('');
            setCorreo('');
            setCelular('');
            setTexto('');
            
        } else {
            setMensaje(['Todos los campos son obigatorios', 'error']);
        }

        setTimeout(() => {
            setMensaje(null);
        }, 4000);
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
        <Form
            onSubmit={e => sendEmail(e)}
        >
            <DivInput>
                <label
                    htmlFor="nombre"
                >Nombre:</label>
                <input 
                    type="text"
                    placeholder="Nombre"
                    name="nombre"
                    id="nombre"
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                />
            </DivInput>
            <DivInput>
                <label
                    htmlFor="celular"
                >Celular:</label>
                <input 
                    type="text"
                    placeholder="5500000000"
                    name="celular"
                    id="celular"
                    value={celular}
                    onChange={e => setCelular(e.target.value)}
                />
            </DivInput>
            <DivInput>
                <label
                    htmlFor="correo"
                >Correo:</label>
                <input 
                    type="email"
                    placeholder="Correo@correo.com"
                    name="correo"
                    id="correo"
                    value={correo}
                    onChange={e => setCorreo(e.target.value)}
                />
            </DivInput>
            <DivInput>
                <label
                    htmlFor="mensaje"
                >¿En qué podemos ayudarte?</label>
                <textarea
                    placeholder="Mensaje"
                    name="mensaje"
                    id="mensaje"
                    value={texto}
                    onChange={e => setTexto(e.target.value)}
                ></textarea>
            </DivInput>

            {mensaje && mostrarMensaje()}

            <ContenedorEnviar>
                <Enviar
                    type="submit"
                >
                    Enviar
                </Enviar>
            </ContenedorEnviar>
        </Form>
     );
}
 
export default Formulario;