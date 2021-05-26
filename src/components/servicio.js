import React from 'react';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import { css } from '@emotion/react';

const Serv = styled.div`
    background-color: #292929;
    -webkit-box-shadow: 5px 5px 20px -8px rgba(0,0,0,0.25);
    -moz-box-shadow: 5px 5px 20px -8px rgba(0,0,0,0.25);
    box-shadow: 5px 5px 20px -8px rgba(0,0,0,0.25);
    padding: 2.5rem 6rem;
    margin: 5rem 0;

    @media (max-width: 550px) {
        padding: 2.5rem;
    }
`;

const Titulo = styled.p`
    text-align: center;
    font-size: 5rem;
    text-transform: uppercase;
    margin-top: 0;
    margin-bottom: 2.5rem;
`;

const Contenido = styled.div`
    display: flex;
    justify-content: space-between;

    p {
        font-size: 4rem;
        line-height: 1;
        flex: 0 0 calc(50% - 4rem);
    }

    @media (max-width: 550px) {
        flex-direction: column;
    }
`;

const Servicio = ({servicio}) => {

    return ( 

        <Serv>
            <Titulo>{servicio.titulo}</Titulo>
            <Contenido>
                <Img
                    fluid={servicio.imagen.fluid}
                    alt={servicio.imagen.alt}
                    css={css`
                        width: 450px;

                        @media (max-width: 550px) {
                            max-width: 95%;
                            margin: 0 auto;
                        }
                    `}
                />
                <p>{servicio.textoInformacion}</p>
            </Contenido>
        </Serv>
     );
}
 
export default Servicio;