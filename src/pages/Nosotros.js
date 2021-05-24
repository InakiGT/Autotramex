import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';


const Contenedor = styled.div`
  max-width: 1000px;
  margin: 18rem auto 0 auto;

  @media (max-width: 1100px) {
    max-width: 90%;
  }
`;

const Contenido = styled.div`
    margin: 9rem 0;
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

    const image = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { eq: "Nosotros.png" }) {
                childImageSharp {
                    fluid(maxWidth: 1200) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    return ( 
        <Layout>
            <Contenedor>
                
                <Contenido>
                    <Img
                        fluid={image.placeholderImage.childImageSharp.fluid}
                        css={css`
                            max-width: 100%;
                            max-height: 800px;
                            margin: 0;
                        `}
                    />
                </Contenido>
                <Contenido>
                    <h2>Sobre nosotros</h2>
                    <p>Trabajamos apoyados en la tecnología, enfocados en optimizar tiempos facilitando la gestión de
                    documentos y trámites en un solo clic.
                    Los trámites se solicitan de manera dígital y se entrega de forma presencial.
                    Nos especializamos en trámites vehiculares en: Morelos, CDMX y EDOMEX.
                    Además nuestro sistema nos apoya notificando trámites futuros y vencimientos.</p>
                </Contenido>
                <Contenido>
                    <h2>¿Quiénes Somos?</h2>
                    <p>Somos la mejor empresa de gestión digital vehicular del sector, nuestra excelencia y gran servicio
                    se basan en precios bajos, manejo confidencial de banco de datos y seguimiento de fututas
                    gestiones.</p>
                </Contenido>
                <Contenido>
                    <h2>Nuestro proceso</h2>
                    <ol>
                        <li>Autotramex envía liga de solicitud de trámite vehicular</li>
                        <li>Cliente llena solicitud de trámite nuevo de manera digital y sube documentos a la
                        carpeta asignada</li>
                        <li>Cliente recibe sus trámites, se envia evidencia de entrega para efectuar facturación
                        correspondiente</li>
                        <li>Asesor solicita el trámite en la entidad indicada</li>
                        <li>Una vez que el trámite fue concluido, el área de logística notifica al cliente y coordinar
                        la entrega.</li>
                        <li>Cliente recibe sus trámites, se envía evidencia de entrega para efectuar facturación
                        correspondiente</li>
                    </ol>
                </Contenido>
                <Adicional>
                    <p>Autotramex pone a disposición de cada cliente, el envío de reportes históricos de los trámites realizados.</p>
                </Adicional>

            </Contenedor>
        </Layout>
     );
}
 
export default Nosotros;