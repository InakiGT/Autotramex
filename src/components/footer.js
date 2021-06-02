import React from 'react';
import styled from '@emotion/styled';
import {graphql, useStaticQuery} from 'gatsby';

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
    flex: 0 0 calc(25% - 3rem);

    a {
        text-decoration: none;
        color: #FFF;
        transition: all .3s ease-in-out;

        &:hover {
            color: rgba(255, 255, 255, 50%);
        }
    }

    p {
        margin: 1rem 0;
    }
    @media (max-width: 550px) {
        margin-top: 4rem;
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

const Diseno = styled.p`
    font-size: 4rem;
    margin: 0 0 3rem 0!important;
`;

const Hasen = styled.p`
    font-family: 'Dancing Script', cursive;
    font-size: 4rem;
`;

const Inaki = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 2.8rem;

    span {
        font-weight: 700;
    }
`;

const Footer = () => {

    const data = useStaticQuery(graphql`
        query {
            allDatoCmsNumero {
                nodes {
                    numerocelular
                }
            }
        }
    `);

    const listado = data.allDatoCmsNumero.nodes;
    
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
                        <p>Tel. <a href="tel:525620931205">{listado[aleatorio].numerocelular}</a></p>
                        <a href={`https://api.whatsapp.com/send?phone=52${listado[aleatorio].numerocelular}&text=Hola`}>Whatsapp</a>
                    </div>
                </Secundario>
                <Secundario>
                    <Diseno>Diseño</Diseno>
                    <Hasen><a href="https://www.facebook.com/HasenMkt/">Hasen</a></Hasen>
                </Secundario>
                <Secundario>
                    <Diseno>Diseño y Programación</Diseno>
                    <Inaki><a href="https://twitter.com/InakiTenorio">{`{ Iñaki`}<span>Devs</span>{` }`}</a></Inaki>
                </Secundario>
            </Contenedor>
            <Derechos>
                <p>Autotramex &reg; 2021</p>
            </Derechos>
        </Foot>
     );
}
 
export default Footer;