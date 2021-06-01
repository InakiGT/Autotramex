import React from 'react';
import styled from '@emotion/styled';
import {graphql, useStaticQuery} from 'gatsby';
import Img from 'gatsby-image';
import {css} from '@emotion/react';

import Layout from '../components/layout';
import Boton from '../components/boton';
import Servicio from '../components/servicio';


const Contenedor = styled.div`
  max-width: 1000px;
  margin: 18rem auto 0 auto;
  font-weight: lighter;

  h1 {
      font-size: 5.5rem;
      text-align: center;
  }

  @media (max-width: 1100px) {
    max-width: 90%;
    margin-top: 15rem;
  }
`;

const Titulo = styled.p`
    text-align: center;
    font-size: 5rem;
    text-transform: uppercase;
    margin-top: 0;
    margin-bottom: 1rem;
`;

const Contenido = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
        font-size: 4rem;
        line-height: 1;
        flex: 0 0 calc(50% - 3rem);
    }

    @media (max-width: 550px) {
        flex-direction: column;
    }
`;

const Tramite = styled.div`
    background-color: #292929;
    -webkit-box-shadow: 5px 5px 20px -8px rgba(0,0,0,0.25);
    -moz-box-shadow: 5px 5px 20px -8px rgba(0,0,0,0.25);
    box-shadow: 5px 5px 20px -8px rgba(0,0,0,0.25);
    padding: 2.5rem 6rem;
    margin: 5rem 0;

    @media (max-width: 550px) {
        padding: 2.5rem 2rem;
    }
`;

const Btn = styled.div`
    text-align: center;
    margin: 3rem 0;
`;

const SaberMas = styled.div`
    max-width: 800px;
    margin: 0 auto;
    background-color: #292929;
    -webkit-box-shadow: 5px 5px 20px -8px rgba(0,0,0,0.25);
    -moz-box-shadow: 5px 5px 20px -8px rgba(0,0,0,0.25);
    box-shadow: 5px 5px 20px -8px rgba(0,0,0,0.25);
    padding: 2.5rem 9rem;
    text-align: center;
    font-size: 4.5rem;
    line-height: 1.5;

    p {
        margin: 0;
    }

    @media (max-width: 550px) {
        padding: 2.5rem 2rem;
    }
`;

const Servicios = () => {

    const data = useStaticQuery(graphql`
        query {
            allDatoCmsServicio {
                nodes {
                    titulo
                    textoInformacion
                    id
                    imagen {
                        alt
                        fluid {
                            ...GatsbyDatoCmsFluid
                        }
                    }
                }
            }
            allDatoCmsPresentacionTramite {
                nodes {
                    texto
                    imagen {
                        alt
                        fluid {
                            ...GatsbyDatoCmsFluid
                        }
                    }
                }
            }
        }
    `);

    return ( 
        <Layout>
            <Contenedor>
                <h1>Servicios</h1>
                <div>

                    {
                        data.allDatoCmsServicio.nodes.map(servicio => (
                            <Servicio
                                key={servicio.id}
                                servicio={servicio}
                            />
                        ))
                    }
                    
                    <Tramite>
                        <Titulo>Trámites</Titulo>
                        <Contenido>
                            <Img
                                fluid={data.allDatoCmsPresentacionTramite.nodes[0].imagen.fluid}
                                alt={data.allDatoCmsPresentacionTramite.nodes[0].imagen.alt}
                                css={css`
                                    width: 450px;
                                    max-height: 400px;

                                    @media (max-width: 550px) {
                                        max-width: 95%;
                                        margin: 0 auto;
                                    }
                                `}
                            />
                            <p>{data.allDatoCmsPresentacionTramite.nodes[0].texto}</p>
                        </Contenido>
                        <Btn>
                            <Boton
                                to={'/Tramites'}
                                text={"Trámites"}
                            />
                        </Btn>
                    </Tramite>
                    <SaberMas>
                        <p>¿Quieres saber más o deseas contratar alguno de nuestros servicios?</p>
                        <Boton 
                            to={'/Contacto'}
                            text={'Contactanos'}
                        />
                    </SaberMas>
                </div>
            </Contenedor>
        </Layout>
     );
}
 
export default Servicios;