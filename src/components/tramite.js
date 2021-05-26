import React from 'react';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import {css} from '@emotion/react';


const Tramit = styled.div`
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
    text-transform: capitalize;
    font-size: 4rem;
    margin: 0 0 2.5rem 0;
`;

const Contenido = styled.div`
    display: flex;
    justify-content: space-between;

    ol {
        flex: 0 0 calc(50% - 2rem);
        font-size: 3.3rem;

        li {
            margin-bottom: 3rem;
        }

        &:last-child {
            margin-bottom: 0;
        }
    }

    @media (max-width: 550px) {
        flex-direction: column;
    }
`;

const Tramite = ({tramite, requisitos}) => {

    console.log(requisitos)

    return ( 
        <Tramit>
            <Titulo>{tramite.titulo}</Titulo>
            <Contenido>
                <Img
                    fluid={tramite.imagen.fluid}
                    alt={tramite.imagen.alt}
                    css={css`
                        width: 450px;

                        @media (max-width: 550px) {
                            max-width: 95%;
                            margin: 0 auto;
                        }
                    `}
                />
                <ol>
                    {
                        requisitos.map(requisito => {
                            if(requisito.servicioAlQuePertenece == tramite.titulo) {
                                return (
                                    <li
                                        key={requisito.id}
                                    >{requisito.texto}</li>
                                )
                            } else {
                                return null;
                            }
                        })
                    }
                </ol>
            </Contenido>
        </Tramit>
     );
}
 
export default Tramite;