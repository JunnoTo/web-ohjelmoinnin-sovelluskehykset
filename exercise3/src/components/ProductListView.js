import React from 'react'
import ProductItem from './components/ProductItem'

export default function ProductListView(props) {
  return (
    <div className="productContainer">

      
    {props.products.map(p => <ProductItem img={p.img} name={p.name} price={p.price} rating={p.rating}/>)}

  </div>
  )
}
