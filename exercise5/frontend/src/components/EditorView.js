import React, { useState } from 'react'



export default function EditorView(props) {
  const [img, setImg] = useState("")
  const [name, setName] = useState("")
  const [manufacturer, setManufacturer] = useState("")
  const [category, setCategory] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  return (
    <div className="editorContainer">
      <div className="createContainer">
            <h2 className="create-title">Create product</h2>
            <div className="item-save">Image URL<input value={img} onChange={(event) => setImg(event.target.value)} type="text"/></div>
            <div className="item-save"> Name<input value={name} onChange={(event) => setName(event.currentTarget.value)} type="text"/></div>
            <div className="item-save">Manufacturer<input value={manufacturer} onChange={(event) => setManufacturer(event.currentTarget.value)}type="text"/></div>
            <div className="item-save">Category<input value={category} onChange={(event) => setCategory(event.currentTarget.value)}type="text"/></div>
            <div className="item-save">Description<input value={description} onChange={(event) => setDescription(event.currentTarget.value)}type="text"/></div>
            <div className="item-save">Price<input  value={price} onChange={(event) => setPrice(event.currentTarget.value)}type="text"/></div>
                <button className="save-btn"onClick={()=>props.createProduct({
                  img,name,manufacturer,category,description,price
                })}>Save</button>
      </div>
                <h2 className="delete-title">Delete product</h2>
                <div className="item-delete">
       {props.products.map(p => <div> {p.name}<button className="delete-btn" onClick={() => props.onItemDelete(p)}>DELETE</button></div>)}
       </div>
    </div>
  )
}
