import React from 'react';
import styled from '@emotion/styled';

import Layout from '../components/layout';


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

const Conct = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    div {
        flex: 0 0 calc(50% - 1rem);
    }

    p {
        font-size: 5rem;
    }

    @media (max-width: 768px) {
        div {
            flex: 0 0 calc(100%);
        }

        p {
            font-size: 4rem;
        }
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
    return ( 
        <Layout>
            <Contenedor>
                <h1>Contacto</h1>
                <div>
                    <p>Imagen</p>

                    <Contactar>
                        <h2>Llámanos a nuestros números o a nuestro correo</h2>
                        <ContenedorContacto>
                            <Conct>
                                <div>
                                    <p>Tels:</p>
                                    <div>
                                        <p>5512984423</p>
                                        <p>5577542390</p>
                                    </div>
                                </div>
                                <div>
                                    <p>Correos:</p>
                                    <div>
                                        <p>contacto@autotramex.com</p>
                                    </div>
                                </div>
                            </Conct>
                        </ContenedorContacto>
                    </Contactar>
                    <Contactar>
                        <TitutloFormulario>Llena el formulario y nos pondremos en contacto contigo</TitutloFormulario>
                        <ContenedorContacto>
                            <p>Form</p>
                        </ContenedorContacto>
                    </Contactar>
                    <Contactar>
                        <h2>Ubicación</h2>
                        <ContenedorContacto>
                            <div></div>
                            <TextoUbicacion>
                                <p>Granaderos 324 Col. Los Cipreses Iztapalapa, 09810, CDMX</p>
                            </TextoUbicacion>
                        </ContenedorContacto>
                    </Contactar>
                </div>
            </Contenedor>
        </Layout>
     );
}
 
export default Contacto;