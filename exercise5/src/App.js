import './App.css';
import React from 'react';
import {useState} from 'react';

import TopBlock from './components/TopBlock'
import ListOfProducts from './components/ListOfProducts'
import EditorView from './components/EditorView'


import mouse from './images/mouse.PNG';
import mousepad from './images/mousepad.PNG'
import keyboard from './images/keyboard.PNG'
import airpods from './images/airpods.PNG'
import xbox from './images/xbox.PNG'
import laptop from './images/laptop.PNG'
import tv from './images/tv.PNG'
import vr from './images/vr.PNG'
import headset from './images/headset.PNG'

import five from './images/fivestars.PNG'
import four from './images/fourstars.PNG'
import fourhalf from './images/fourhalfstars.PNG'


function App() {

  const [editorModeOn, setEditorModeOn] = useState(false);
  const [products, setProducts] = useState([
    { img: mouse,
      name:'Mouse',
      manufacturer: 'Logitech',
      category: 'Peripherals',
      description: 'A wireless gaming mouse',
      price: 100,
      rating: five},

    { img: mousepad,
      name:'Mousepad',
      manufacturer: 'SteelSeries',
      category: 'Peripherals',
      description: 'Large mousepad',
      price: 20,
      rating: four},

    { img: keyboard,
      name:'Keyboard',
      manufacturer:'SteelSeries',
      category:'Peripherals',
      description:'Mechanical keyboard with RGB',
      price: 80,
      rating: fourhalf },
      
    { img: airpods,
      name:'AirPods',
      manufacturer:'Apple',
      category:'Headphones',
      description:'3rd generation AirPods',
      price: 199,
      rating: five},
      
    { img:xbox,
      name:'Xbox',
      manufacturer:'Microsoft',
      category:'Consoles',
      description:'Series S 512GB',
      price: 300,
      rating: fourhalf},
      
    { img:laptop,
      name:'Laptop',
      manufacturer:'HP',
      category:'Computers',
      description:'15-inch office laptop',
      price: 500,
      rating: four},

    { img: tv,
      name:'TV',
      manufacturer:'Samsung',
      category:'TVs and monitors',
      description:'55-inch QLed Television',
      price: 1000,
      rating: five},

    { img: vr,
      name:'VR',
      manufacturer:'Oculus',
      category:'VR systems',
      description:'Oculus Guest 2',
      price: 500,
      rating: four},
      
    { img: headset,
      name:'Headset',
      manufacturer:'HyperX',
      category:'Headphones',
      description:'Surround headset for gaming',
      price: 100,
      rating: fourhalf}  
  ]);

  const onItemDelete = (item) => {
    let newProds = [...products];
    let deletedItemIndex = newProds.findIndex(p => p.id === item.id);
    newProds.splice(deletedItemIndex, 1);
    setProducts(newProds);
  }

  let output = <ListOfProducts products={products} />;
  if (editorModeOn === true){
    output = <EditorView products={products} onItemDelete={ onItemDelete } />;
  }

  return (
    <div className="App">
      <TopBlock />

      <button onClick={ () =>setEditorModeOn(!editorModeOn)} className="btnAdmin">Admin mode Toggle</button>
      { output }
    </div>
  );
}

export default App;
