import React from 'react';


export default function DisplayProducts(props) {
  return(
    <div className="productItem">

      <img src={props.img} alt='placeholder'/>
      <div><h1>{props.name}</h1></div>
      <div className="productDesc">{props.description}</div>
      <div className="pricediv">${props.price}</div>
      <div className="rating"><img src={props.rating} alt='stars'/></div> 
        <a href='#'><button className="btnBuy">Buy</button></a>
      

    </div>);
}
