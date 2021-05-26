import React from 'react';
import styled from '@emotion/styled';
import {graphql, useStaticQuery} from 'gatsby';

import Layout from '../components/layout';
import Boton from '../components/boton';
import Tramite from '../components/tramite';


const Contenedor = styled.div`
  max-width: 1000px;
  margin: 18rem auto 0 auto;


  h1 {
      font-size: 5.5rem;
      text-align: center;
  }

  @media (max-width: 1100px) {
    max-width: 90%;
  }
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

const Tramites = () => {

    const data = useStaticQuery(graphql`
        query {
            allDatoCmsTramite {
                nodes {
                    titulo
                    id
                    imagen {
                        alt
                        fluid {
                            ...GatsbyDatoCmsFluid
                        }
                    }
                }
            }

            allDatoCmsRequisito {
                nodes {
                    id
                    servicioAlQuePertenece
                    texto
                }
            }
        }
    `);

    return ( 
        <Layout>
            <Contenedor>
                <h1>Trámites y requisitos</h1>

                <div>
                    {
                        data.allDatoCmsTramite.nodes.map(tramite => (
                            <Tramite
                                key={tramite.id}
                                requisitos={data.allDatoCmsRequisito.nodes}
                                tramite={tramite}
                            />
                        ))
                    }
                </div>

                <div>
                    

                    <SaberMas>
                        <p>¿Quieres saber más acerca de algún trámite?</p>
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
 
export default Tramites;