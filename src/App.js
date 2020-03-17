import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  const insertArray = (x, y) =>{
    const array = [1,2,3,4,{a: 1},6,7,8];
    const element = 4; 
    switch(x) {
      case 0:
        console.log(insertToTail(array, element));
        break;
      case 1:
        console.log(insertToHead(array, element));
        break;
      case 2:
        console.log(access(array, y));
        break;
      case 3:
        console.log(search(array, y));
        break;
      case 4:
        console.log(remove(array, y));
        break;
      default:
        console.log("default")
    }
  }

  function insertToTail(arr, elem) {
    arr.push(elem);
    return arr;
  }
  
  function insertToHead(arr, elem) {
    arr.unshift(elem);
    return arr;
  }

  function access(arr, elem) {
    return arr[elem];
  }

  function search(arr, elem) {
    for(let i = 0; i < arr.length; i++) {
      if (arr[i] === elem) {
        return i;
      }
    }
  }

  function remove(arr, elem) {
    const index = search(arr, elem);
    arr.splice(index, 1)
    return arr;
  }

  return (
    <div className="App">
      <button onClick={() => {
        insertArray(0)
      }}>To Tail</button>
      <button onClick={() => {
        insertArray(1)
      }}>To Head</button>
      <button onClick={() => {
        insertArray(2, 2)
      }}>Access</button>
      <button onClick={() => {
        insertArray(3, 3)
      }}>Search</button>
      <button onClick={() => {
        insertArray(4, 3)
      }}>Delete</button>
    </div>
  );
}

export default App;
