import React, {useState} from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

import Logo from './logo';
import Navegacion from './navegacion';
import Menu from './menu';

const Heading = styled.header`
    background-color: #292929;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    -webkit-box-shadow: 0px 10px 10px 0px rgba(0,0,0,0.20);
    -moz-box-shadow: 0px 10px 10px 0px rgba(0,0,0,0.20);
    box-shadow: 0px 10px 10px 0px rgba(0,0,0,0.20);
    position: fixed;
    z-index: 2;
    width: 100%;
    top: 0;
    left: 0;

    @media (min-width: 1100px) {
        padding: 2rem 6rem;
    }

    @media (max-width: 550px) {
        display: flex;
    }
`;

const Boton = styled.button`
    text-decoration: none;
    background-color: transparent;
    border: none;
    cursor: pointer;
    margin: 0;
    padding: 0;
`;


const Header = () => {
    //State del menú de navegación
    const [menu, setMenu] = useState(false);

    return ( 
        <Heading>
            <Link
                to={'/'}
            >
                <Logo />
            </Link>
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

        </Heading>
     );
}
 
export default Header;