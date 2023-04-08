import React from 'react';

const Shoe = (props) => {

    return(
        <div>
           <h3>{props.style}</h3> 
           <img src={props.img} alt={props.style} />
           <button>{props.price}</button>
        </div>
    )
}

export default Shoe;