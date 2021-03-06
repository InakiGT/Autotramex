import React from 'react';
import styled from '@emotion/styled';
import {graphql, useStaticQuery} from 'gatsby';
import Img from 'gatsby-image';
import {css} from '@emotion/react';

import Layout from '../components/layout';
import Telefono from '../components/telefono';
import Correo from '../components/correo';
import Formulario from '../components/formulario';

import Whats from '../images/Whats-empresarial.png';


const Contenedor = styled.div`
  max-width: 1000px;
  margin: 18rem auto 0 auto;


  h1 {
    font-size: 5.5rem;
    text-align: center;
  }

  @media (max-width: 1100px) {
    max-width: 90%;
    margin-top: 15rem;
  }
`;

const Imagen = styled.div`
    margin: 3rem 0;
    font-weight: lighter;
`;

const ContenedorImagen = styled.div`
    margin: 2rem auto 0 auto;
    text-align: center;

    img {
        max-width: 90%;
    }

    @media (max-width: 550px) {
        display: none;
    }
`;

const Contactar = styled.div`
    h2 {
        font-size: 4.5rem;
        line-height: 1;
    }
`;

const ContenedorContacto = styled.div`
    max-width: 900px;
    background-color: #292929;
    -webkit-box-shadow: 5px 5px 20px -8px rgba(0,0,0,0.25);
    -moz-box-shadow: 5px 5px 20px -8px rgba(0,0,0,0.25);
    box-shadow: 5px 5px 20px -8px rgba(0,0,0,0.25);
    padding: 2.5rem 6rem;
    margin: 0 auto 5rem auto;

    @media (max-width: 768px) {
        padding: 2rem;
    }
`;

const ContenedorUbicacion = styled.div`
    max-width: 900px;
    background-color: #292929;
    -webkit-box-shadow: 5px 5px 20px -8px rgba(0,0,0,0.25);
    -moz-box-shadow: 5px 5px 20px -8px rgba(0,0,0,0.25);
    box-shadow: 5px 5px 20px -8px rgba(0,0,0,0.25);
    padding: 1.5rem;
    margin: 0 auto 5rem auto;

    @media (max-width: 768px) {
        padding: 2rem;
    }
`;

const Conct = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    flex-direction: column;
    text-align: center;

    div {
        flex: 0 0 calc(50% - 1rem);
    }

    p {
        font-size: 4.7rem;
        margin: 0 0 5rem 0;
    }

    @media (max-width: 768px) {
        div {
            flex: 0 0 calc(100%);
        }

        p {
            font-size: 3.5rem;
        }
    }

    @media (max-width: 550px) {
        p {
            margin-bottom: 2rem;
        }
    }

    @media (max-width: 340px) {
        p {
            font-size: 3rem;
        }
    }
`;

const Tels = styled.div`
    @media (min-width: 768px) {
        display: flex;
        justify-content: space-around;
    }
`;

const TitutloFormulario = styled.h2`
    font-size: 4.5rem;
    text-align: center;
`;

const TextoUbicacion = styled.div`
    font-size: 4rem;
    line-height: 1.5;
    text-align: right;
`;

const Contacto = () => {

    const data = useStaticQuery(graphql`
        query {
            allDatoCmsImagenContacto {
                nodes {
                    imagen {
                        alt
                        fluid {
                            ...GatsbyDatoCmsFluid
                        }
                    }
                }
            }  

            allDatoCmsImagenUbicacion {
                nodes {
                    imagen {
                        alt
                        fluid {
                            ...GatsbyDatoCmsFluid
                        }
                    }
                }
            }

            allDatoCmsNumero {
                nodes {
                    numerocelular
                    id
                }
            }

            allDatoCmsCorreo {
                nodes {
                    correoelectronico
                    id
                }
            }
            allDatoCmsUbicacion {
                nodes {
                    ubicacion
                }
            }
        }
    `);

    return ( 
        <Layout>
            <Contenedor>
                <h1>Contacto</h1>
                <div>
                    <Imagen>
                        <Img
                            fluid={data.allDatoCmsImagenContacto.nodes[0].imagen.fluid}
                            alt={data.allDatoCmsImagenContacto.nodes[0].imagen.alt}
                            css={css`
                                max-width: 100%;
                                max-height: 800px;
                                margin: 0;
                            `}
                        />
                    </Imagen>
                    <ContenedorImagen>
                        <img 
                            src={Whats}
                            alt="Imagen Whatsapp"
                        />
                    </ContenedorImagen>
                    <Contactar>
                        <h2>Cont??ctanos por Whatsapp o a nuestro correo</h2>
                        <ContenedorContacto>
                            <Conct>
                                <div>
                                    <p>Tels:</p>
                                    <Tels>
                                        {
                                            data.allDatoCmsNumero.nodes.map(numero => (
                                                <Telefono
                                                    key={numero.id}
                                                    numero={numero}
                                                />
                                            ))
                                        }
                                    </Tels>
                                </div>
                                <div>
                                    <p>Correos:</p>
                                    <div>
                                        {
                                            data.allDatoCmsCorreo.nodes.map(correo => (
                                                <Correo
                                                    key={correo.id}
                                                    correo={correo}
                                                />
                                            ))
                                        }
                                    </div>
                                </div>
                            </Conct>
                        </ContenedorContacto>
                    </Contactar>
                    <Contactar>
                        <TitutloFormulario>Llena el formulario y nos pondremos en contacto contigo</TitutloFormulario>
                        <ContenedorContacto>
                            <Formulario />
                        </ContenedorContacto>
                    </Contactar>
                    <Contactar>
                        <h2>Ubicaci??n</h2>
                        <ContenedorUbicacion>
                            <div>
                                <Img 
                                    fluid={data.allDatoCmsImagenUbicacion.nodes[0].imagen.fluid}
                                    alt={data.allDatoCmsImagenUbicacion.nodes[0].imagen.alt}
                                />
                            </div>
                            <TextoUbicacion>
                                <p>{data.allDatoCmsUbicacion.nodes[0].ubicacion}</p>
                            </TextoUbicacion>
                        </ContenedorUbicacion>
                    </Contactar>
                </div>
            </Contenedor>
        </Layout>
     );
}
 
export default Contacto;