import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const Contenedor = styled.div`
    display: block;
    position: relative;
`;

const ContenedorImagen = styled.div`
    display: block;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ContenedorTexto = styled.div`
    position: absolute;
    z-index: 1;
    display: block;
    width: 100%;
    bottom: 0;
    left: 0;
    background-color: rgba(8, 8, 8, 65%);
    padding: 3rem 6rem;

    @media (max-width: 550px) {
        padding: 2rem;
    }
`;

const Titulo = styled.p`
    font-size: 5rem;
    text-transform: uppercase;
    margin: 0 0 3rem 0;

    @media (max-width: 550px) {
        font-size: 3rem;
        margin-bottom: 1.5rem;
    }
`;

const Texto = styled.p`
    font-size: 3rem;
    line-height: 1;
    margin: 0;

    @media (max-width: 550px) {
        font-size: 2.1rem;
    }
`;

const Hero = () => {

    const data = useStaticQuery(graphql`
        query {
            allDatoCmsHero {
                nodes {
                    id
                    tituloHero
                    textoHero
                    imagenHero {
                        fluid {
                            ...GatsbyDatoCmsFluid
                        }
                    }
                }
            }
        }
    `);

    const {nodes} = data.allDatoCmsHero;

    return ( 
        <Contenedor>
            <ContenedorImagen>
                <Img
                    fluid={nodes[0].imagenHero.fluid}
                    css={css`
                        width: 100rem;
                        max-width: 100%;
                        position: relative;

                        &::after {
                            content: '';
                            position: absolute;
                            background-color: rgba(175, 136, 136, 20%);
                            top: 0;
                            left: 0;
                            height: 100%;
                            width: 100%;

                        }
                    `}
                />
            </ContenedorImagen>
            <ContenedorTexto>
                <Titulo>{nodes[0].tituloHero}</Titulo>
                <Texto>{nodes[0].textoHero}</Texto>
            </ContenedorTexto>
        </Contenedor>
     );
}
 
export default Hero;