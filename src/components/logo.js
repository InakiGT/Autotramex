import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import {css} from '@emotion/react';

const Logo = () => {

    const logo = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { eq: "Logo.png" }) {
                childImageSharp {
                    fluid(maxWidth: 200, maxHeight: 90) {
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
                width: 200px;
                height: 85px;

                @media (max-width: 768px) {
                    width: 100px;
                    height: 60px;
                }
            `}
        />
    );
}
 
export default Logo;