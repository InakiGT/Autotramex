import React from 'react';
import styled from '@emotion/styled';

import Layout from '../components/layout';
import Boton from '../components/boton';


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

const Tramite = styled.div`
    background-color: #292929;
    -webkit-box-shadow: 5px 5px 20px -8px rgba(0,0,0,0.25);
    -moz-box-shadow: 5px 5px 20px -8px rgba(0,0,0,0.25);
    box-shadow: 5px 5px 20px -8px rgba(0,0,0,0.25);
    padding: 2.5rem 6rem;
    margin: 5rem 0;
`;

const Titulo = styled.p`
    text-transform: capitalize;
    font-size: 4rem;
    margin: 0 0 1rem 0;
`;

const Contenido = styled.div`
    display: flex;
    justify-content: space-between;

    ol {
        flex: 0 0 calc(50% - 2rem);
        font-size: 3rem;

        li {
            margin-bottom: 3rem;
        }

        &::last-child {
                margin-bottom: 0;
        }
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
    return ( 
        <Layout>
            <Contenedor>
                <h1>Trámites y requisitos</h1>

                <div>
                    <Tramite>
                        <Titulo>Reemplacamientos</Titulo>
                        <Contenido>
                            <p>Imagen</p>
                            <ol>
                                <li>Duis nunc turpis, eleifend vitae odio at</li>
                                <li>Duis nunc turpis, eleifend vitae odio at</li>
                                <li>Duis nunc turpis, eleifend vitae odio at</li>
                                <li>Duis nunc turpis, eleifend vitae odio at</li>
                                <li>Duis nunc turpis, eleifend vitae odio at</li>
                            </ol>
                        </Contenido>
                    </Tramite>
                    <Tramite>
                        <Titulo>Reemplacamientos</Titulo>
                        <Contenido>
                            <p>Imagen</p>
                            <ol>
                                <li>Duis nunc turpis, eleifend vitae odio at</li>
                                <li>Duis nunc turpis, eleifend vitae odio at</li>
                                <li>Duis nunc turpis, eleifend vitae odio at</li>
                                <li>Duis nunc turpis, eleifend vitae odio at</li>
                                <li>Duis nunc turpis, eleifend vitae odio at</li>
                            </ol>
                        </Contenido>
                    </Tramite>

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