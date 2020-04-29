import React from 'react';

const Scroll = (props) => {
    return(
        <div style={{overflowY : 'scroll', overflowX : 'hidden' , height : '406px'}}>
            {props.children}
        </div>
    );
}

export default Scroll;