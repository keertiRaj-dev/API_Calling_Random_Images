import React, {useEffect, useState} from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import  Picture from "./picture.js"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  const [current, setCurrent] = useState();
  const [photos, setPhotos] = useState([]);
  const [album, setAlbum] = useState([]);
  const [tap, setTap] = useState(false);
  const [liked, setLiked] = useState([]);


useEffect(()=> {
  fetchData();
}, []);
useEffect(()=> {
  fetchAlbum();
}, []);

const fetchData = async ()=> {
  await fetch('https://jsonplaceholder.typicode.com/photos')
  .then(response => response.json())
  .then(data => setPhotos(data))
}
const fetchAlbum = async ()=> {
  await fetch('https://jsonplaceholder.typicode.com/albums')
  .then(response => response.json())
  .then(data => setAlbum(data))
}

const mapped = photos.map((element) => ({
  ...element,
  isLiked: false
}));

var numbers=[];
for(var i=0; i<9; i++){
  var num = Math.floor(Math.random() * (5000 + 1));
  numbers.push(num);
}

var arr = mapped.filter(({id}) => numbers.includes(id));

const changeCurrent = (event)=> {
  event.preventDefault();
  setCurrent(event.target.value);


}
const handleClick = event => {

   }

const links=[];
const albumNumbers=[];
arr && arr.map((photo)=> (
  links.push(photo.url)
));

arr && arr.map((photo)=> (
  albumNumbers.push(photo.albumId)
));



const albumNames=[];
albumNumbers.forEach((id)=> (
album.map((data)=> (
  id==data.id && albumNames.push(data.title)
))))

console.log(arr);


const doubleClick= (id)=> {
setCurrent(id);
setLiked([...liked, current]);
return false;
}
console.log(current)

arr.map((obj, index) => {
   if(index == current || liked.includes(index)){
  obj.isLiked = true;
   }
 })

 console.log("current" + current)
 console.log("liked" + liked);

  return (
    <Router>
    <Routes>
    <Route exact path="picture0" element={<Picture />}></Route>
    </Routes>
    <div className="App">
    <div className="row widget">
    {arr && arr.map((photo, index)=> (
    <div  className="col-lg-4 col-md-4 col-12 item" key = {photo.id}>

{index==0 && <div className="example">{photo.isLiked && <div className="text3">❤</div>}<a href={photo.url}><img src ={photo.thumbnailUrl} name={photo.url} /></a><div className="fadedbox2" name={photo.id} onDoubleClick={(event)=> doubleClick(index)}><div className="title2 text2">double tap here to like</div></div><div className= "fadedbox"><div className="title text">Album: {albumNumbers[0]}<br />Title: {albumNames[0]}</div></div><br /><p>{photo.title}</p></div>}
{index==1 && <div className="example">{photo.isLiked && <div className="text3">❤</div>}<a href={photo.url}><img src ={photo.thumbnailUrl} name={photo.url} /></a><div className="fadedbox2" name={photo.id} onDoubleClick={()=>doubleClick(index)}><div className="title2 text2">double tap here to like</div></div><div className= "fadedbox"><div className="title text">Album: {albumNumbers[1]}<br />Title: {albumNames[1]}</div></div><br /><p>{photo.title}</p></div>}
{index==2 && <div className="example">{photo.isLiked && <div className="text3">❤</div>}<a href={photo.url}><img src ={photo.thumbnailUrl} name={photo.url} /></a><div className="fadedbox2" name={photo.id} onDoubleClick={()=>doubleClick(index)}><div className="title2 text2">double tap here to like</div></div><div className= "fadedbox"><div className="title text">Album: {albumNumbers[2]}<br />Title: {albumNames[2]}</div></div><br /><p>{photo.title}</p></div>}
{index==3 && <div className="example">{photo.isLiked && <div className="text3">❤</div>}<a href={photo.url}><img src ={photo.thumbnailUrl} name={photo.url} /></a><div className="fadedbox2" name={photo.id} onDoubleClick={()=>doubleClick(index)}><div className="title2 text2">double tap here to like</div></div><div className= "fadedbox"><div className="title text">Album: {albumNumbers[3]}<br />Title: {albumNames[3]}</div></div><br /><p>{photo.title}</p></div>}
{index==4 && <div className="example">{photo.isLiked && <div className="text3">❤</div>}<a href={photo.url}><img src ={photo.thumbnailUrl} name={photo.url} /></a><div className="fadedbox2" name={photo.id} onDoubleClick={()=>doubleClick(index)}><div className="title2 text2">double tap here to like</div></div><div className= "fadedbox"><div className="title text">Album: {albumNumbers[4]}<br />Title: {albumNames[4]}</div></div><br /><p>{photo.title}</p></div>}
{index==5 && <div className="example">{photo.isLiked && <div className="text3">❤</div>}<a href={photo.url}><img src ={photo.thumbnailUrl} name={photo.url} /></a><div className="fadedbox2" name={photo.id} onDoubleClick={()=>doubleClick(index)}><div className="title2 text2">double tap here to like</div></div><div className= "fadedbox"><div className="title text">Album: {albumNumbers[5]}<br />Title: {albumNames[5]}</div></div><br /><p>{photo.title}</p></div>}
{index==6 && <div className="example">{photo.isLiked && <div className="text3">❤</div>}<a href={photo.url}><img src ={photo.thumbnailUrl} name={photo.url} /></a><div className="fadedbox2" name={photo.id} onDoubleClick={()=>doubleClick(index)}><div className="title2 text2">double tap here to like</div></div><div className= "fadedbox"><div className="title text">Album: {albumNumbers[6]}<br />Title: {albumNames[6]}</div></div><br /><p>{photo.title}</p></div>}
{index==7 && <div className="example">{photo.isLiked && <div className="text3">❤</div>}<a href={photo.url}><img src ={photo.thumbnailUrl} name={photo.url} /></a><div className="fadedbox2" name={photo.id} onDoubleClick={()=>doubleClick(index)}><div className="title2 text2">double tap here to like</div></div><div className= "fadedbox"><div className="title text">Album: {albumNumbers[7]}<br />Title: {albumNames[7]}</div></div><br /><p>{photo.title}</p></div>}
{index==8 && <div className="example">{photo.isLiked && <div className="text3">❤</div>}<a href={photo.url}><img src ={photo.thumbnailUrl} name={photo.url} /></a><div className="fadedbox2" name={photo.id} onDoubleClick={()=>doubleClick(index)}><div className="title2 text2">double tap here to like</div></div><div className= "fadedbox"><div className="title text">Album: {albumNumbers[8]}<br />Title: {albumNames[8]}</div></div><br /><p>{photo.title}</p></div>}
 </div> ))}
 </div>
 </div>
   </Router>
  )
}

export default App;
