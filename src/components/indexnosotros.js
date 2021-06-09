import React from 'react';
import styled from '@emotion/styled';
import {graphql, useStaticQuery} from 'gatsby';


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

const IndexNosotros = () => {

    const data = useStaticQuery(graphql`
        query {
            allDatoCmsNosotro {
                nodes {
                    contenidoQuienessomos
                    contenidoPorquenosotros
                    contenidoBeneficios
                }
            }
        }
    `);

    return ( 
        <>
          <ContenedorNosotros>
                <Nosotros>
                    <TitutloNosotros>¿Cómo operamos?</TitutloNosotros>
                    <TextoNosotros>{data.allDatoCmsNosotro.nodes[0].contenidoQuienessomos}</TextoNosotros>
                </Nosotros>
                <Nosotros>
                    <TitutloNosotros>¿Por qué nosotros?</TitutloNosotros>
                    <TextoNosotros>{data.allDatoCmsNosotro.nodes[0].contenidoPorquenosotros}</TextoNosotros>
                    </Nosotros>
                <Nosotros>
                    <TitutloNosotros>Beneficios</TitutloNosotros>
                    <TextoNosotros>{data.allDatoCmsNosotro.nodes[0].contenidoBeneficios}</TextoNosotros>
                </Nosotros>
            </ContenedorNosotros>
        </>
     );
}
 
export default IndexNosotros;