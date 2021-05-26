import React from 'react';
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
    }
`;

const Formulario = () => {

    const sendEmail = e => {
        e.preventDefault();

        emailjs.sendForm('service_0cq64ye', 'template_8xfu7og', e.target, 'user_Pp0unMUrW7VPj2FnPvBKZ')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
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
                ></textarea>
            </DivInput>

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