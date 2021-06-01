import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

import Close from '../images/Close.svg'

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 550px) {
        flex-direction: column;
    }
`;

const Enlace = styled(Link)`
    text-decoration: none;
    color: #FFFFFF;
    font-size: 3rem;
    transition: all .3s ease;

    p {
        margin: 0;
    }

    &:hover {
        color: rgba(255, 255, 255, 75%);
    }

    @media (min-width: 768px) {
        margin-right: 2rem;
    }

    @media (max-width: 550px) {
        margin-bottom: 2rem;
        display: none;
    }
`;

const Boton = styled.button`
    text-decoration: none;
    background-color: transparent;
    border: none;
    cursor: pointer;
`;

const Navegacion = ({setMenu, menu}) => {
    return ( 
        <Nav>
            <Enlace
                to={'/Nosotros'}
            >
                <p>Nosotros</p>
            </Enlace>
            <Enlace
                to={'/Servicios'}
            >
                <p>Servicios</p>
            </Enlace>
            <Enlace
                to={'/Tramites'}
            >
                <p>Trámites</p>
            </Enlace>
            <Enlace
                to={'/Contacto'}
            >
                <p>Contacto</p>
            </Enlace>
            <Boton
                onClick={() => setMenu(!menu)}
            >
                <img
                    src={Close}
                    alt="Cerrar"
                />
            </Boton>
        </Nav>
    );
}
 
export default Navegacion;