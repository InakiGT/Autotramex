import React from 'react';
import styled from '@emotion/styled';

import Logo from './logo';

const Heading = styled.header`
    background-color: #292929;
    display: flex;
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
`;

const Navegacion = styled.nav`
`;

const Header = () => {
    return ( 
        <Heading>
            <Logo />

            <Navegacion>
                <p>Menu</p>
            </Navegacion>
        </Heading>
     );
}
 
export default Header;