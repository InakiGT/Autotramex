import React from 'react';
import {css} from '@emotion/react';
import styled from '@emotion/styled';

const Heading = styled.header`
    background-color: #292929;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3rem 3rem;
    -webkit-box-shadow: 0px 10px 10px 0px rgba(0,0,0,0.20);
    -moz-box-shadow: 0px 10px 10px 0px rgba(0,0,0,0.20);
    box-shadow: 0px 10px 10px 0px rgba(0,0,0,0.20);
`;

const Navegacion = styled.nav`
`;

const Header = () => {
    return ( 
        <Heading>
            <h1>Autotramex</h1>

            <Navegacion>
                <p>Menu</p>
            </Navegacion>
        </Heading>
     );
}
 
export default Header;