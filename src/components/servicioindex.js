import React from 'react';
import styled from '@emotion/styled';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import {css} from '@emotion/react';


const Servicio = styled.div`
    -webkit-box-shadow: 5px 5px 20px -8px rgba(0,0,0,0.25);
    -moz-box-shadow: 5px 5px 20px -8px rgba(0,0,0,0.25);
    box-shadow: 5px 5px 20px -8px rgba(0,0,0,0.25);
    max-width: 900px;
    margin: 0 auto;
    background-color: rgba(47, 47, 47, 73%);
    padding: 3.3rem 3.5rem;
    margin-bottom: 3rem;
`;

const Titulo = styled.p`
    font-size: 4.5rem;
    margin: 0;
`;

const Contenido = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 22rem;
    p {
        font-size: 3rem;
        flex: 0 0 calc(50% - 1rem);
    }
`;

const ServicioIndex = () => {

    const logo = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { eq: "mazda.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 600) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    return ( 
        <Servicio>
            <Titulo>Gruas</Titulo>
            <Contenido>
                <p>Nuam maximus luctus mauris, a lobortis mauris rhoncus non. Donec ac sapien et purus ultricies vulputate nec nec justo. Etiam accumsan nisl sit amet interdum consectetur. Etiam dictum sem et ligula fringilla, vitae laoreet ante ultrices.</p>
                <Img
                    fluid={logo.placeholderImage.childImageSharp.fluid}
                    css={css`
                        width: 400px;
                    `}
                />
            </Contenido>
      </Servicio>
     );
}
 
export default ServicioIndex;