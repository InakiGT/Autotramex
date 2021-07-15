import React from 'react';
import styled from '@emotion/styled';
import {graphql, useStaticQuery} from 'gatsby';

import Whatsapp from '../images/Whatsapp.svg';
import Llamada from '../images/Llamada.svg';

const Contenedor = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    position: fixed;
    z-index: 2;
    bottom: 50px;
    right: 20px;
    animation-duration: 4.5s;
    animation-name: aparecer;

    @keyframes aparecer {
        from {
            opacity: 0%;
        }

        to {
            opacity: 100%;
        }
    }

    img {
        width: 60px;
        margin-bottom: 1.5rem;

        &:hover {
            cursor: pointer;
        }
    }
`;

const ElementosContacto = () => {

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
        <Contenedor>
            <a
                href={`https://api.whatsapp.com/send?phone=52${listado[aleatorio].numerocelular}&text=Buen día. Busco apoyo para realizar mis trámites vehiculares`}
            >
                <img 
                    src={Whatsapp}
                    alt="Icono Whatsapp"
                />
            </a>
            <a
                href={`tel:${listado[aleatorio].numerocelular}`}
            >
                <img
                    src={Llamada}
                    alt="Icono Llamada"
                />
            </a>
        </Contenedor>
     );
}
 
export default ElementosContacto;