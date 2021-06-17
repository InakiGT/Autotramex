import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';


const Contenedor = styled.div`
    max-width: 1000px;
    margin: 18rem auto 0 auto;

    h1 {
        font-size: 5.5rem;
        text-align: center;
        margin-bottom: 0;
    }

    @media (max-width: 1100px) {
        max-width: 90%;
        margin-top: 15rem;
    }
`;

const Contenido = styled.div`
    margin: 8rem 0;
    font-weight: lighter;
    h2 {
        margin-top: 0;
        font-size: 5rem;
        text-transform: capitalize;
    }
    p {
        font-size: 3.5rem;
        line-height: 1.5;
    }

    ol {
        padding: 3rem;
        margin: 0;
        li {
            font-size: 3.7rem;
            line-height: 1;
            margin-bottom: 4rem;

            &:last-of-type {
                margin-bottom: 0;
            }
        }
    }

    &:first-of-type {
        margin-top: 3rem;
    }
`;

const Adicional = styled.div`
    max-width: 700px;
    margin: 0 auto 4rem auto;
    background-color: rgb(41, 41, 41);
    padding:  .5rem 3rem;
    font-size: 3.5rem;
    text-align: center;
    align-items: center;
    line-height: 1.5;
`;

const Nosotros = () => {

    const data = useStaticQuery(graphql`
        query {
            allDatoCmsImagenNosotro {
                nodes {
                    imagen {
                        alt
                        fluid {
                            ...GatsbyDatoCmsFluid
                        }
                    }
                }
            }
            allDatoCmsNosotro {
                nodes {
                  contenidoSobrenosotros
                  contenidoQuienessomos
                }
            }
        }
    `);

    return ( 
        <Layout>
            <Contenedor>
                <h1>Nosotros</h1>
                <Contenido>
                    <Img
                        fluid={data.allDatoCmsImagenNosotro.nodes[0].imagen.fluid}
                        alt={data.allDatoCmsImagenNosotro.nodes[0].imagen.alt}
                        css={css`
                            max-width: 100%;
                            max-height: 800px;
                            margin: 0;
                        `}
                    />
                </Contenido>
                <Contenido>
                    <p>Pensando en algunas de tus necesidades creamos Autotramex, una empresa vehicular integral, nuestros servicios abarcan desde la gestión de tus trámites vehiculares, asesoría en la compra y venta vehicular entre particulares, cotización y orientación en la compra de tu seguro vehicular entre varias opciones o si lo prefieres administramos la flotilla vehicular de tu empresa (gasolinas, talleres, servicios, tramites,  etc.) en resumen, Autotramex se encarga de tu vehículo mientras tu solo disfrutas manejarlo</p>
                </Contenido>
                <Contenido>
                    <h2>Sobre nosotros</h2>
                    <p>{data.allDatoCmsNosotro.nodes[0].contenidoSobrenosotros}</p>
                </Contenido>
                <Contenido>
                    <h2>¿Cómo operamos?</h2>
                    <p>{data.allDatoCmsNosotro.nodes[0].contenidoQuienessomos}</p>
                </Contenido>
                <Adicional>
                    <p>Autotramex pone a disposición de cada cliente, el envío de reportes históricos de los trámites realizados.</p>
                </Adicional>

            </Contenedor>
        </Layout>
     );
}
 
export default Nosotros;