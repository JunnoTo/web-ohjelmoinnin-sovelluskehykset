import './App.css';
import Otsikko from './components/Otsikko'
import Ostokset from './components/Ostokset'
import Napit from './components/Napit'
import React from "react";
import {useState} from "react";

function App() {

  const [ ostoslistaItems, setostoslistaItems] = useState([
    {id: 1, value: 'Maitoa', qty: 2},
    {id: 2, value: 'Juustoa', qty:1},
    {id: 3, value: 'Makkaraa', qty:4},
    {id: 4, value: 'Leipää', qty: 2}
  ]);

  const addListaItems =(id) => {
    let random = Math.floor(Math.random() *30)
    let newOstoslistaItems =[...ostoslistaItems]
    let result = newOstoslistaItems.findIndex(i => i.id === id)

      if(result !== -1){
        let additions = {...newOstoslistaItems[result]}
        additions.qty = additions.qty + random;
        newOstoslistaItems[result] = additions;
        setostoslistaItems(newOstoslistaItems)
      }
  }
  return (
    <div className="App">
      <div className="cont">
        <Otsikko/>
        <Ostokset listItems={ostoslistaItems}/>
        </div>
        <Napit clickMe={addListaItems}/>
        
    </div>
  );
}

export default App;
