import React from 'react';
import styled from '@emotion/styled';

import Layout from '../components/layout';
import Boton from '../components/boton';


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
  }
`;

const Servicio = styled.div`
    background-color: #292929;
    -webkit-box-shadow: 5px 5px 20px -8px rgba(0,0,0,0.25);
    -moz-box-shadow: 5px 5px 20px -8px rgba(0,0,0,0.25);
    box-shadow: 5px 5px 20px -8px rgba(0,0,0,0.25);
    padding: 2.5rem 6rem;
    margin: 5rem 0;
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

    p {
        font-size: 4rem;
        line-height: 1;
        flex: 0 0 calc(50% - 2rem);
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
    return ( 
        <Layout>
            <Contenedor>
                <h1>Servicios</h1>
                <div>
                    <Servicio>
                        <Titulo>Gruas</Titulo>
                        <Contenido>
                            <p>Imagen</p>
                            <p>Donec ut purus et sem
                            hendrerit venenatis sit
                            amet nec sem. Fusce
                            porta velit imperdiet
                            tellus lacinia auctor.
                            Etiam sit amet tellus
                            non massa tempus
                            malesuada in nec enim.
                            Donec eleifend ex id
                            placerat semper.</p>
                        </Contenido>
                    </Servicio>
                    <Tramite>
                        <Titulo>Trámites</Titulo>
                        <Contenido>
                            <p>Imagen</p>
                            <p>Donec ut purus et sem
                            hendrerit venenatis sit
                            amet nec sem. Fusce
                            porta velit imperdiet
                            tellus lacinia auctor.
                            Etiam sit amet tellus
                            non massa tempus
                            malesuada in nec enim.
                            Donec eleifend ex id
                            placerat semper.</p>
                        </Contenido>
                        <Btn>
                            <Boton
                                to={'Tramites'}
                                text={"Trámites"}
                            />
                        </Btn>
                    </Tramite>
                    <SaberMas>
                        <p>¿Quieres saber más o deseas contratar alguno de nuestros servicios?</p>
                        <Boton 
                            to={'Contacto'}
                            text={'Contactanos'}
                        />
                    </SaberMas>
                </div>
            </Contenedor>
        </Layout>
     );
}
 
export default Servicios;