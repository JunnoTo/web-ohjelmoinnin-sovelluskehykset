import React from 'react'

export default function SortProducts(props) {
  return (
    <div>
      <button onClick={() => props.priceASC()}>Hinta nouseva</button>
      <button onClick={() => props.priceDES()}>Hinta laskeva</button>
      <button onClick={() => props.nameASC()}>A - Ö</button>
      <button onClick={() => props.nameDES()}>Ö - A</button>
    </div>
  )
}
