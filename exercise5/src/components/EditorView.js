import React from 'react'

export default function EditorView(props) {
  return (
    <div className="editorContainer">
        <h2>Editor</h2>
        <form>

            <div>Name<input type="text"/></div>
            <div>Manufacturer<input type="text"/></div>
            <div>Category<input type="text"/></div>
            <div>Description<input type="text"/></div>
            <div>Price<input type="text"/></div>
                <button>Save</button>

        </form>
       {props.products.map(p => <div> {p.name}<button onClick={() => props.onItemDelete(p)}>DEL</button></div>)}
    </div>
  )
}
