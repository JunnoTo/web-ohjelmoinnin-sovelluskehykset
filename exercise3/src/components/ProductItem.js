import React from 'react';

export default function ProductItem(props) {
  return(
    <div className="productItem">
        <img src={props.img}/>
        <div><h1>{props.name}</h1></div>
        <div>${props.price}</div>
       <div className="rating"><img src={props.rating}/></div> 
    </div>);
}
