import React from 'react'
import DisplayProducts from './DisplayProducts'

export default function ListOfProducts(props) {
  return (
    <div className="productContainer">

    {props.products.map(p => <DisplayProducts img={p.img} name={p.name} description={p.description} price={p.price} rating={p.rating}/>)}

  </div>
  )
}
