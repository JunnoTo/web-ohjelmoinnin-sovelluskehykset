import React, { useState } from 'react'


export default function EditorView(props) {
  const [name, setName] = useState("")
  const [manufacturer, setManufacturer] = useState("")
  const [category, setCategory] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  return (
    <div className="editorContainer">
        <h2>Editor</h2>
      

            <div>Name<input value={name} onChange={(event) => setName(event.currentTarget.value)} type="text"/></div>
            <div>Manufacturer<input value={manufacturer} onChange={(event) => setManufacturer(event.currentTarget.value)}type="text"/></div>
            <div>Category<input value={category} onChange={(event) => setCategory(event.currentTarget.value)}type="text"/></div>
            <div>Description<input value={description} onChange={(event) => setDescription(event.currentTarget.value)}type="text"/></div>
            <div>Price<input  value={price} onChange={(event) => setPrice(event.currentTarget.value)}type="text"/></div>
                <button onClick={()=>props.createProduct({
                  name,manufacturer,category,description,price
                })}>Save</button>


       {props.products.map(p => <div> {p.name}<button onClick={() => props.onItemDelete(p)}>DELETE</button></div>)}
    </div>
  )
}
