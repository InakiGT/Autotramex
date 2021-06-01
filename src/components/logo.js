import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import {css} from '@emotion/react';

const Logo = () => {

    const logo = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { eq: "Logo.png" }) {
                childImageSharp {
                    fluid(maxWidth: 400, maxHeight: 130) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    if(!logo?.placeholderImage?.childImageSharp?.fluid) return <p>Autotramex</p>;

    return ( 
        <Img 
            fluid={logo.placeholderImage.childImageSharp.fluid}
            css={css`
                width: 20rem;
                height: 6rem;

                @media (max-width: 550px) {
                    width: 13.5rem;
                    height: 4.5rem;
                }
            `}
        />
    );
}
 
export default Logo;