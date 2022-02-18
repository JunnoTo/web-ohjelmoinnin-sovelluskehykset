import './App.css';

import MainHeader from './components/MainHeader'
import ProductItem from './components/ProductItem'

import {useEffect, useState} from 'react';
import React from 'react';

import monitor from './images/monitor.PNG'
import vr from './images/vr.PNG'
import xbox from './images/xbox.PNG'
import tv from './images/tv.PNG'
import airpods from './images/airpods.PNG'
import laptop from './images/laptop.PNG'
import chair from './images/chair.PNG'
import keyboard from './images/keyboard.PNG'
import headset from './images/headset.PNG'

import twostars from './images/twostars.PNG'
import fourandahalfstars from './images/fourhalfstars.PNG'
import fourstars from './images/fourstars.PNG'
import fivestars from './images/fivestars.PNG'


function App() {

  const[productList, setProducts] = useState([
    {img: monitor, name:'HP 24mh FHD Monitor', price:229.99, rating: fivestars},
    {img: vr, name:'Oculus Quest 2', price:299.99, rating: fivestars},
    {img: xbox, name:'Xbox Series S', price: 249.99, rating: fourstars},
    {img: tv, name:'Samsung 85-Inch OLED', price:2999.9, rating: fourandahalfstars},
    {img: airpods, name:'Apple Airpods (2nd Gen)',price:150.5, rating: fivestars},
    {img: laptop, name:'HP Pavilion 15 Laptop', price: 888, rating: fourandahalfstars},
    {img: chair, name:'DXRacer Gaming Chair', price: 329, rating: fourstars},
    {img: keyboard, name:'SteelSeries Apex 3', price: 49.99, rating: twostars},
    {img: headset, name:'HyperX Cloud II', price: 59, rating: fourandahalfstars}
  ]);


  const priceASC = () => {
    let sortedASC = [...productList];
    sortedASC.sort((a,b)=>{
      if(a.price < b.price) return -1;
      if(a.price > b.price) return 1;
      return 0;
    })
      setProducts(sortedASC)
  }

  const priceDES = () => {
    let sortedDES = [...productList];
    sortedDES.sort((a,b)=>{
      if(a.price > b.price) return -1;
      if(a.price < b.price) return 1;
      return 0;
    })
      setProducts(sortedDES)
  }

  return (
    <div className="Main">
      <MainHeader/>
      <button onClick={() => priceASC()}>Hinta nouseva</button>
      <button onClick = { () => priceDES()}>Hinta laskeva</button>
      <div className="productContainer">
      {productList.map(p => <ProductItem img={p.img} name={p.name} price={p.price} rating={p.rating}/>)}
      </div>
    </div>
  );
}

export default App;
