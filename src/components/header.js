import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

import Logo from './logo';
import Navegacion from './navegacion';
import MovilMenu from './movilMenu';

const Heading = styled.header`
    background-color: #292929;
    padding: 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
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

const Contenedor = styled.div`   
`;

const Nav = styled.div`
    @media (max-width: 550px) {
        display: none;
    }
`;

const Header = () => {

    const [menu, setMenu] = useState(false);

    return ( 
        <>
            <Heading>
                <Link
                    to={'/'}
                >
                <Logo />
                </Link>
                <Nav>
                    <Navegacion
                        setMenu={setMenu}
                        menu={menu}
                    />
                </Nav>
                <MovilMenu />
            </Heading>
        </>
     );
}
 
export default Header;