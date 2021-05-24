import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

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

    a {
        &::hover {
            color: rgba(255, 255, 255, 10%);
        }
    }

    @media (min-width: 768px) {
        margin-right: 2rem;
    }

    @media (max-width: 550px) {
        margin-bottom: 2rem;
    }
`;

const Navegacion = () => {
    return ( 
        <Nav>
            <Enlace
                to={'/Nosotros'}
            >
                <a>Nosotros</a>
            </Enlace>
            <Enlace
                to={'/Servicios'}
            >
                <a>Servicios</a>
            </Enlace>
            <Enlace
                to={'/Tramites'}
            >
                <a>Trámites</a>
            </Enlace>
            <Enlace
                to={'/Contacto'}
            >
                <a>Contacto</a>
            </Enlace>
        </Nav>
    );
}
 
export default Navegacion;