import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import {css} from '@emotion/react';
import Img from 'gatsby-image';

const Twitter = () => {

    const tw = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { eq: "twitter-brands.png" }) {
                childImageSharp {
                    fluid(maxWidth: 500) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);
    
    if(!tw.placeholderImage.childImageSharp.fluid) return <p>T</p>;

    return (
        <a
            href="https://twitter.com/autotramex"
            target="_blank"
        >
            <Img 
                fluid={tw.placeholderImage.childImageSharp.fluid}
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
 
export default Twitter;