import React from 'react';
import styled from '@emotion/styled';

const Contenedor = styled.div`
    max-width: 700px;
    margin: 0 auto;
    font-size: 4rem;
    text-align: center;
    line-height: 1.5;
    -webkit-box-shadow: 5px 5px 20px -8px rgba(0,0,0,0.25);
    -moz-box-shadow: 5px 5px 20px -8px rgba(0,0,0,0.25);
    box-shadow: 5px 5px 20px -8px rgba(0,0,0,0.25);
    background-color: rgba(41, 41, 41, 91%);
    padding: 2rem 3rem;
`;

const Cliente = styled.p`
    text-align: right;
    line-height: 0;
`;

const Texto = styled.p`
    
`;

const Opinion = ({opinion}) => {
    return (  
        <Contenedor>
            <Texto>" {opinion.opinionTexto} "</Texto>
            <Cliente>- {opinion.nombreDelCliente}</Cliente>
        </Contenedor>
    );
}
 
export default Opinion;