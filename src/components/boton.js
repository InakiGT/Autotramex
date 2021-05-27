import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';


const Btn = styled(Link)`
    text-decoration: none;
    color: #FFFFFF;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    background-color: #930001;
    padding: 2rem 4rem;
    font-size: 2rem;
    transition: all .3s ease;

    p {
        margin: 0;
    }

    &:hover {
        background-color: #C60103;
    }
`;

const Boton = ({text, to}) => {

    return ( 
        <Btn
            to={to}
        >
            {text}
        </Btn>
     );
}
 
export default Boton;