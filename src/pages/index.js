import React from 'react';
import styled from '@emotion/styled';

import Layout from "../components/layout";

import Boton from '../components/boton';
import ServicioIndex from '../components/servicioindex';

const Contenedor = styled.div`
  max-width: 1000px;
  margin: 18rem auto 0 auto;

  @media (max-width: 1100px) {
    max-width: 90%;
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

const ContenedorNosotros = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 550px) {
    flex-direction: column;
  }
`;

const Nosotros = styled.div`
  background-color: rgba(47, 47, 47, 73%);
  padding: 4rem 3rem;
  flex: 0 0 calc(33% - 1rem);
  -webkit-box-shadow: 5px 5px 20px -8px rgba(0,0,0,0.25);
  -moz-box-shadow: 5px 5px 20px -8px rgba(0,0,0,0.25);
  box-shadow: 5px 5px 20px -8px rgba(0,0,0,0.25);

  @media (max-width: 550px) {
    flex: 0 0 calc(33% - 2rem);
    margin-bottom: 3rem;
  }

`;

const TitutloNosotros = styled.p`
  margin-top: 0;
  font-size: 4.2rem;
`;

const TextoNosotros = styled.p`
  font-size: 2.7rem;
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

const ContenedorServicios = styled.div`

`;

const Btn = styled.div`
  text-align: center;
  margin: 6rem 0;
`;

const IndexPage = () => {

  return (
    <Layout>
      <Contenedor>

        <div>
          <h1>Autotramex</h1>
          <h1>Autotramex</h1>
          <h1>Autotramex</h1>
          <h1>Autotramex</h1>
          <h1>Autotramex</h1>
          <h1>Autotramex</h1>
          <h1>Autotramex</h1>
          <h1>Autotramex</h1>
          <h1>Autotramex</h1>
          <h1>Autotramex</h1>
          <h1>Autotramex</h1>
          <h1>Autotramex</h1>
          <h1>Autotramex</h1>
          <h1>Autotramex</h1>
        </div>

        <Seccion>
          <h2>Sobre nosotros</h2>
          <ContenedorNosotros>
            <Nosotros>
              <TitutloNosotros>¿Quiénes somos?</TitutloNosotros>

              <TextoNosotros>Donec dapibus erat id aliquet rhoncus. Fusce ut luctus nisl. Nunc lacinia arcu a tortor egestas tristique. Nullam quis molestie sapien, sed venenatis ligula. Suspendisse vitae tempor enim. Nunc id leo posuere, convallis dui sed, sollicitudin lectus. Donec vehicula porttitor sagittis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras eget molestie ipsum, venenatis venenatis nisi.</TextoNosotros>
            </Nosotros>
            <Nosotros>
              <TitutloNosotros>¿Por qué nosotros?</TitutloNosotros>

              <TextoNosotros>Donec dapibus erat id aliquet rhoncus. Fusce ut luctus nisl. Nunc lacinia arcu a tortor egestas tristique. Nullam quis molestie sapien, sed venenatis ligula. Suspendisse vitae tempor enim. Nunc id leo posuere, convallis dui sed, sollicitudin lectus. Donec vehicula porttitor sagittis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras eget molestie ipsum, venenatis venenatis nisi.</TextoNosotros>
            </Nosotros>
            <Nosotros>
              <TitutloNosotros>Beneficios</TitutloNosotros>

              <TextoNosotros>Donec dapibus erat id aliquet rhoncus. Fusce ut luctus nisl. Nunc lacinia arcu a tortor egestas tristique. Nullam quis molestie sapien, sed venenatis ligula. Suspendisse vitae tempor enim. Nunc id leo posuere, convallis dui sed, sollicitudin lectus. Donec vehicula porttitor sagittis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras eget molestie ipsum, venenatis venenatis nisi.</TextoNosotros>
            </Nosotros>
          </ContenedorNosotros>

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
          <ContenedorServicios>
            <ServicioIndex />
            <ServicioIndex />
            <ServicioIndex />
            <ServicioIndex />
          </ContenedorServicios>
          <Btn>
            <Boton 
              text={"Nuestros servicios"}
              to={"Servicios"}
            />
          </Btn>
        </Seccion>

      </Contenedor>
    </Layout>
  )

}


export default IndexPage
