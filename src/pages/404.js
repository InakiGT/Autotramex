import React from 'react';
import styled from '@emotion/styled';

import Layout from "../components/layout";
import Boton from '../components/boton';

const Contenedor = styled.div`
  font-family: 'Roboto', sans-serif;
  max-width: 60%;
  margin: 18rem auto 20rem auto;
`;

const Principal = styled.p`
  font-size: 5.5rem;
  margin-bottom: 1rem;
  text-align: left;
`;

const Secundario = styled.p`
  margin-top: 6rem;
  font-size: 3rem;
`;

const ContenedorBoton = styled.div`
  margin-top: 6rem;
  text-align: center;
`;

const NotFoundPage = () => (
  <Layout>
    <Contenedor>
      <Principal>Error 404!</Principal>
      <Principal>Página no encontrada...</Principal>
      <Secundario>Puedes volver a la página principal dando click aqui:</Secundario>
      <ContenedorBoton>
        <Boton
          text={'Inicio'}
          to={'/'}
        />
      </ContenedorBoton>
    </Contenedor>
  </Layout>
)

export default NotFoundPage
