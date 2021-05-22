import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import {css} from '@emotion/react';
import Img from 'gatsby-image';

const Instagram = () => {

    const ins = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { eq: "instagram-brands.png" }) {
                childImageSharp {
                    fluid(maxWidth: 500) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    if(!ins.placeholderImage.childImageSharp.fluid) return <p>I</p>;

    return (
        <a
            href="https://www.instagram.com/"
        >
            <Img 
                fluid={ins.placeholderImage.childImageSharp.fluid}
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
 
export default Instagram;