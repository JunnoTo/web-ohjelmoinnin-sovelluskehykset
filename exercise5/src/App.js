import './App.css';
import React from 'react';
import {useState, useEffect} from 'react';

import TopBlock from './components/TopBlock'
import ListOfProducts from './components/ListOfProducts'
import EditorView from './components/EditorView'





function App() {

  const [editorModeOn, setEditorModeOn] = useState(false);
  
  const [products, setProducts] = useState([])

  useEffect(async() =>{
    const result = await fetch('http://localhost:3001/products').then((res)=>
      res.json()
    )
    setProducts(result)
    console.log(result)
  }, [])

  const onItemDelete = (item) => {
    let newProds = [...products];
    let deletedItem = newProds.find(p => p.id === item.id);
    let deletedItemIndex = newProds.findIndex(p => p.id === item.id);
    fetch(`http://localhost:3001/products/${deletedItem.id}`, { method: 'DELETE'})
    newProds.splice(deletedItemIndex, 1);
    setProducts(newProds);
  }

  const createProduct = (item) => {   //Jotta aakkosittain järjestely toimii, tuotteen nimen ensimmäinen kirjain tulee olla iso
    fetch(`http://localhost:3001/products`, { method: 'POST', 
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: item.name,
        manufacturer: item.manufacturer,
        category: item.category,
        description: item.description,
        price: item.price,
    })})
  }


  //seuraavat neljä funkitoita tykkää temppuilla keskenään. Jos on esim. järjestelty jo aakkosittain ja koitetaan järjestää vielä hinnalla, saattaa lopputulos olla odottamaton :)
  //Suosittelen refreshaamaan sivun ennen toisen järjestelytavan käyttöä
  const priceASC = () => {
    const sortedASC = [...products];  
    sortedASC.sort((a,b)=>{       
      let x = parseInt(a.price),  //Tässä koitin aiemmin samaa toteutustapaa kun alemmassa priceDES() funktiossa.
      y = parseInt(b.price);      //Se keskittyi hinnan ensimmäiseen lukuun eniten johtaen siihen että esim 90$ hintainen tuote oli kalliimpi kuin 1000$ hintainen.
      return x > y ? 1 : y > a ? -1 : 0;
    })
      setProducts(sortedASC)
  }

  const priceDES = () => {    //ei todettu ongelmia
    let sortedDES = [...products];
    sortedDES.sort((a,b)=>{
      if(a.price > b.price) return -1;
      if(a.price < b.price) return 1;
      return 0;
    })
      setProducts(sortedDES);
      
  }

  const nameASC = () => {

    let alphaASC = [...products]; //toimii
    alphaASC.sort((a,b)=>{
      let x = a.name.toUpperCase(),
      y = b.name.toUpperCase();
      return x === y ? 0 : x > y ? 1 : -1;
    })
    setProducts(alphaASC)
  }
    
  const nameDES = () => {

    let alphaDES = [...products]; 
    alphaDES.sort((a,b)=>{   
      let x = a.name.toUpperCase(), 
      y = b.name.toUpperCase();
      return x === y ? 0 : x > y ? -1 : 1;
    })
    setProducts(alphaDES)
  }


  /*
  const onItemUpdate = (item) => {
    let newProds = [...products];
    let updatedItem = newProds.find(p => p.id === item.id);
    fetch(`http://localhost:3001/products/${updatedItem.id}`, { method: 'PUT', body: JSON.stringify({
      name: updatedItem.name,
      manufacturer: updatedItem.manufacturer,
      category: updatedItem.category,
      description: updatedItem.description,
      price: updatedItem.price,

    })})
  }
  */

  let output = <ListOfProducts products={products} />;
  if (editorModeOn === true){
    output = <EditorView products={products} 
    
    onItemDelete={ onItemDelete } 
    createProduct={ createProduct }
   />;
  }


  return (
    <div className="App">
      <TopBlock />
      <button onClick={() => priceASC()}>Hinta nouseva</button>
      <button onClick={() => priceDES()}>Hinta laskeva</button>
      <button onClick={() => nameASC()}>A - Ö</button>
      <button onClick={() => nameDES()}>Ö - A</button>
      
      <button onClick={ () =>setEditorModeOn(!editorModeOn)} className="btnAdmin">Admin mode Toggle</button>
      { output }
    </div>
  );
}

export default App;
