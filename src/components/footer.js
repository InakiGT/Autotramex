import React from 'react';
import styled from '@emotion/styled';

import Facebook from './facebook';
import Twitter from './twitter';
import Instagram from './instagram';


const Foot = styled.footer`
    background-color: #292929;
    -webkit-box-shadow: 0px -5px 15px 0px rgba(0,0,0,0.20);
    -moz-box-shadow: 0px -5px 15px 0px rgba(0,0,0,0.20);
    box-shadow: 0px -5px 15px 0px rgba(0,0,0,0.20);
    margin-top: 12rem;
`;

const Contenedor = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1000px;
    margin: 0 auto;
    padding: 4rem 0;

    @media (max-width: 720px) {
        flex-direction: column;
    }

    @media (max-width: 1100px) {
    max-width: 90%;
    }
`;

const Principales = styled.p`
    text-transform: capitalize;
    font-size: 5rem;
    margin: 0 0 3rem 0!important;
`;

const Secundario = styled.div`
    font-size: 3.5rem;

    p {
        margin: 1rem 0;
    }

    @media (min-width: 768px) {
        flex: 0 0 calc(33% - 3rem);
    }
`;

const Redes = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Red = styled.div`
    flex: 0 0 calc(33% - 1rem);
`;

const Derechos = styled.div`
    text-align: center;
    background-color: #1D1C1C;
    font-size: 3.1rem;
    text-transform: uppercase;
    padding: 1.5rem 0;
    p {
        margin: 0;
    }
`;

const Footer = () => {

    const listado = ['550000000', '5510101010', '5520202020'];
    const aleatorio = Math.floor(Math.random()*listado.length);

    return ( 
        <Foot>
            <Contenedor>
                <Secundario>
                    <div>
                        <Principales>Redes Sociales</Principales>
                        <Redes>
                            <Red><Facebook /></Red>
                            <Red><Twitter /></Red>
                            <Red><Instagram /></Red>
                        </Redes>
                    </div>
                </Secundario>

                <Secundario>
                    <Principales>Contacto</Principales>
                    <div>
                        <p>Tel. {listado[aleatorio]}</p>
                        <a>Whatsapp</a>
                    </div>
                </Secundario>
                <Secundario>
                    <p>Texto</p>
                </Secundario>
            </Contenedor>
            <Derechos>
                <p>Autotramex &reg; 2021</p>
            </Derechos>
        </Foot>
     );
}
 
export default Footer;