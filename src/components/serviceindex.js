import React from 'react';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import {css} from '@emotion/react';


const Servicio = styled.div`
    -webkit-box-shadow: 5px 5px 20px -8px rgba(0,0,0,0.25);
    -moz-box-shadow: 5px 5px 20px -8px rgba(0,0,0,0.25);
    box-shadow: 5px 5px 20px -8px rgba(0,0,0,0.25);
    max-width: 900px;
    margin: 0 auto;
    background-color: rgba(47, 47, 47, 73%);
    padding: 3.3rem 3.5rem;
    margin-bottom: 3rem;
`;

const Titulo = styled.p`
    font-size: 4.5rem;
    margin: 0;
`;

const Contenido = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 22rem;
    p {
        font-size: 3rem;
        flex: 0 0 calc(50% - 1rem);
    }

    div {
        @media (max-width: 550px) {
            max-width: 95%;
            margin: 1rem auto 0 auto;
        }
    }

    @media (max-width: 550px) {
        flex-direction: column-reverse;
    }
`;

const ServiceIndex = ({servicio}) => {

    return ( 
        <Servicio>
            <Titulo>{servicio.titulo}</Titulo>
            <Contenido>
                <p>{servicio.textoInformacion}</p>
                <div>
                    <Img
                        fluid={servicio.imagen.fluid}
                        alt={servicio.imagen.alt}
                        css={css`
                            width: 400px;
                        `}
                    />
                </div>
            </Contenido>
        </Servicio>
     );
}
 
export default ServiceIndex;