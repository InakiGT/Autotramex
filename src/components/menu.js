import React from 'react';
import {css} from '@emotion/react';

import Barras from '../images/Barras.svg';

const Menu = () => {
    return ( 
        <img 
            src={Barras}
            alt="Menu"
            css={css`
                width: 4rem;
                height: 4rem;
            `}
        />
     );
}
 
export default Menu;