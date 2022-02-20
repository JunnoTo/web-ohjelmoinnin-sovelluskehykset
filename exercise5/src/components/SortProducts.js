import React from 'react'

export default function SortProducts(props) {
  return (
    <div>
      
        <label for="sort">Sort by:</label>

        <select name="sort" id="sort">
          <option onClick={ ()=>props.priceASC()}>Price ascending</option>
          <option onClick={ ()=>props.priceDES()}>Price descending</option>
          <option onClick={ ()=>props.nameASC()}>Name ascending</option>
          <option onClick={ ()=>props.nameDES()}>Name descending</option>

        </select>
    </div>
  )
}
