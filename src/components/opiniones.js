import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';

import Opinion from './opinion';

const Opiniones = () => {

    const data = useStaticQuery(graphql`
        query {
            allDatoCmsOpinion {
                nodes {
                    nombreDelCliente
                    opinionTexto
                    id
                }
            }
        }
    `);

    return ( 
        <div>
            {data.allDatoCmsOpinion.nodes.map(opinion => (
                <Opinion
                    key={opinion.id}
                    opinion={opinion}
                />
            ))}
        </div>
     );
}
 
export default Opiniones;