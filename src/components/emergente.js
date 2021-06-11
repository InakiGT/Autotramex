import styled from '@emotion/styled';
import React from 'react';


const Contenedor = styled.div`
    background-color: rgba(227, 228, 229, 84%);
    font-family: 'PT Sans', sans-serif;
    text-align: center;
    padding: 4rem 1rem;
    width: 90rem;
    margin: 0 auto;
    position: fixed;
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

    input {
        margin-bottom: 2rem;
        font-family: 'Roboto', sans-serif;
        padding: 1.5rem 2rem;
        font-size: 2.2rem;
        font-weight: 300;
        width: 80%;
        border: none;
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

const Emergente = () => {
    return (
        <Contenedor>
            <div>
                <Titulo>Contactanos</Titulo>
                <Sub>y te contestaremos lo más pronto posible</Sub>
            </div>
            <Formulario>
                <input
                    type="text"
                    placeholder="Nombre"
                />
                <input
                    type="text"
                    placeholder="Correo"
                />
                <input
                    type="text"
                    placeholder="Celular"
                />
                <input
                    type="text"
                    placeholder="¿Cómo podemos ayudarte?"
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
     );
}
 
export default Emergente;