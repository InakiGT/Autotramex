import React from 'react';
import styled from '@emotion/styled';

import Layout from "../components/layout";

import Boton from '../components/boton';
import ServicioIndex from '../components/servicioindex';
import IndexNosotros from '../components/indexnosotros';
import Opiniones from '../components/opiniones';
import Emergente from '../components/emergente';

const Contenedor = styled.div`
  max-width: 1000px;
  margin: 18rem auto 0 auto;

  @media (max-width: 1100px) {
    max-width: 90%;
    margin-top: 15rem;
  }
`;

const Seccion = styled.section`
  margin: 8rem 0;
  h2 {
    text-align: center;
    font-size: 5.5rem;
    text-transform: capitalize;
    font-weight: lighter;
    margin: 4rem 0;
  }
`;

const ContenedorTramites = styled.div`
  max-width: 900px;
  margin: 0 auto;
  -webkit-box-shadow: 5px 5px 20px -8px rgba(0,0,0,0.25);
  -moz-box-shadow: 5px 5px 20px -8px rgba(0,0,0,0.25);
  box-shadow: 5px 5px 20px -8px rgba(0,0,0,0.25);
  background-color: rgba(41, 41, 41, 91%);
  padding: 6rem 3rem;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  align-items: center;
  justify-content: space-around;
`;

const Tramite = styled.p`
  text-transform: uppercase;
  font-size: 4rem;
  margin: 0 0 8rem 0;
  flex: 0 0 calc(25% - 1rem);
`;

const TramiteS = styled.p`
  text-transform: uppercase;
  font-size: 4rem;
  margin: 0 0 8rem 0;
  flex: 0 0 calc(33% - 1rem);
`;

const Tramit = styled.p`
  text-transform: uppercase;
  font-size: 4rem;
  margin: 0;
  flex: 0 0 calc(100%);
`;

const Btn = styled.div`
  text-align: center;
  margin: 6rem 0;
`;

const Texto = styled.p`
  font-weight: bold;
  font-size: 4rem;
  line-height: 1.5;
  margin: 0;
`;

const IndexPage = () => {

  return (
    <Layout>
      <Contenedor>

        <Seccion>
          <Emergente />
        </Seccion>

        <Seccion>
          <ContenedorTramites>
            <Texto>SOLICITA TUS TRAMITES O ACLARA TUS DUDAS. <br /> NO ESPERES MAS</Texto>
          </ContenedorTramites>
        </Seccion>

        <Seccion>
          <h2>Sobre nosotros</h2>
        
          <IndexNosotros />

          <Btn>
            <Boton
              text={"Más sobre nosotros"}
              to={'Nosotros'}
            />
          </Btn>

        </Seccion>

        <Seccion>
          <h2>Trámites</h2>

          <ContenedorTramites>
            <Tramite>Altas</Tramite>
            <Tramite>Altas nuevos</Tramite>
            <Tramite>Altas foráneos</Tramite>
            <Tramite>Bajas</Tramite>
            <TramiteS>Refrendos</TramiteS>
            <TramiteS>Reemplacamientos</TramiteS>
            <TramiteS>Verificaciones</TramiteS>
            <Tramit>Cambios de propietario</Tramit>
          </ContenedorTramites>
          <Btn>
            <Boton 
              text={'Saber más'}
              to={'Tramites'}
            />
          </Btn>
        </Seccion>

        <Seccion>
          <h2>Servicios</h2>
          <div>
            <ServicioIndex />
          </div>
          <Btn>
            <Boton 
              text={"Nuestros servicios"}
              to={"Servicios"}
            />
          </Btn>
        </Seccion>

        <Seccion>
          <h2>Algunas opiniones de nuestros clientes</h2>
          <Opiniones />
        </Seccion>

      </Contenedor>
    </Layout>
  )

}


export default IndexPage
