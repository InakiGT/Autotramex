import React, { useState } from 'react';
import styled from '@emotion/styled';

import Menu from './menu';
import Navegacion from './navegacion';


const Boton = styled.button`
    text-decoration: none;
    background-color: transparent;
    border: none;
    cursor: pointer;
    margin: 0;
    padding: 0;

    @media (min-width: 770px) {
        display: none;
    }
`;

const MovilMenu = () => {
    //State del menú de navegación
    const [menu, setMenu] = useState(false);

    return (
        <>
            {!menu ? (
                <Boton
                    onClick={() => setMenu(!menu)}
                >
                    <Menu />
                </Boton>
            ) : (
                <Navegacion
                    setMenu={setMenu}
                    menu={menu}
                />
            )}
        </>
    );
}
 
export default MovilMenu;