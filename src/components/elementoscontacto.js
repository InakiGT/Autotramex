import React from 'react';
import styled from '@emotion/styled';

import Whatsapp from '../images/Whatsapp.svg';
import Llamda from '../images/Llamada.svg';

const Contenedor = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    position: fixed;
    z-index: 2;
    bottom: 20px;
    right: 20px;

    img {
        width: 60px;
        margin-bottom: 1.5rem;

        &:hover {
            cursor: pointer;
        }
    }
`;

const ElementosContacto = () => {

    return ( 
        <Contenedor>
            <a
                href="https://wa.me/525620931205"
            >
                <img 
                    src={Whatsapp}
                />
            </a>
            <a
                href="tel:5620931205"
            >
                <img
                    src={Llamda}
                />
            </a>
        </Contenedor>
     );
}
 
export default ElementosContacto;