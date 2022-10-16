import React, {useEffect, useState} from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import  Picture from "./picture.js"


function App() {
  const [animate, setAnimate] = useState(false)
  const [current, setCurrent] = useState();
const [photos, setPhotos] = useState([]);
useEffect(()=> {
  fetchData();
}, []);

const fetchData = async ()=> {
  await fetch('https://jsonplaceholder.typicode.com/photos')
  .then(response => response.json())
  .then(data => setPhotos(data))

}

var numbers=[];
for(var i=0; i<9; i++){
  var num = Math.floor(Math.random() * (5000 + 1));
  numbers.push(num);
}
console.log(numbers);

const arr = photos.filter(({id}) => numbers.includes(id));
console.log(arr)


const changeCurrent = (event)=> {
  event.preventDefault();
  setCurrent(event.target.name);
  console.log("current is " + current)
}
const handleClick = event => {
    console.log(event.detail);
    if (event.detail === 1) {
     console.log('single click');}
    if (event.detail === 2) {
     console.log('double click');
   }}


  return (<div>
    <div className="App">
    <div className="row widget">
    {arr && arr.map((photo, index)=> (
    <div  className="col-lg-4 col-md-4 col-12 item" key = {photo.id}>

{index==0 && <div><a href={photo.url}><img src = {photo.thumbnailUrl} name={photo.url} /> </a><br /><p>{photo.title}</p></div> }
{index==1 && <div><a href={photo.url}><img  src = {photo.thumbnailUrl} /></a> <br /><p>{photo.title}</p></div>}
{index==2 && <div><a href={photo.url}><img  src = {photo.thumbnailUrl} /></a> <br /><p>{photo.title}</p></div>}
{index==3 && <div><a href={photo.url}><img src = {photo.thumbnailUrl} /></a> <br /><p>{photo.title}</p></div>}
{index==4 && <div><a href={photo.url}><img  src = {photo.thumbnailUrl} /></a> <br /><p>{photo.title}</p></div>}
{index==5 && <div><a href={photo.url}><img  src = {photo.thumbnailUrl} /></a><br /><p>{photo.title}</p></div>}
{index==6 && <div><a href={photo.url}><img src = {photo.thumbnailUrl} /></a><br /><p>{photo.title}</p></div>}
{index==7 && <div><a href={photo.url}><img  src = {photo.thumbnailUrl} /></a><br /><p>{photo.title}</p></div>}
{index==8 && <div><a href={photo.url}><img  src = {photo.thumbnailUrl} /></a><br /><p>{photo.title}</p></div>}
 </div> ))}
 </div>

    </div>

    </div>
  )
}

export default App;
