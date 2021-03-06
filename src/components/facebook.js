import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import {css} from '@emotion/react';
import Img from 'gatsby-image';

const Facebook = () => {

    const fb = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { eq: "facebook-brands.png" }) {
                childImageSharp {
                    fluid(maxWidth: 500) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    if(!fb.placeholderImage.childImageSharp.fluid) return <p>F</p>;

    return (
        <a
            href="https://www.facebook.com/Autotramex"
            target="_blank"
            rel="noreferrer"
        >
            <Img 
                fluid={fb.placeholderImage.childImageSharp.fluid}
                css={css`
                    width: 50px;
                    @media (max-width: 550px) {
                        width: 40px;
                    }
                `}
            />
        </a>
    );
}
 
export default Facebook;