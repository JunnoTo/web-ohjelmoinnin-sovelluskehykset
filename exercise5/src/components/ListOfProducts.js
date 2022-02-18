import React from 'react'
import DisplayProducts from './DisplayProducts'

export default function ListOfProducts(props) {
  return (
    <div className="productContainer">

    {props.products.map(p => <DisplayProducts name={p.name} description={p.description} price={p.price}/>)}

  </div>
  )
}
