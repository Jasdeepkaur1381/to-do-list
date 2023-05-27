
import React, { useState } from 'react';
import './App.css';

const App = () => {

  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);
  const inputEvent = (e) => {
    setInputList(e.target.value);
  };
  const ListOfItems = () => {
    setItems((preVal) => {
      return [...preVal, inputList];
    });
    setInputList("");

  };
  const deleteItems = (e) => {
    console.log(e.target);
    console.log("Deleted");
    setItems((preVal) => {
      return preVal.filter((item, index) => {
        return item !== e.target.value;
      });
    });
    console.log(items);
  }
  return <>
    <div className='outerDiv'>
      <div className='innerDiv'>
        <h1>ToDo List</h1>

        <input type='text' placeholder='Enter a Event' onChange={inputEvent} value={inputList} />
        <button onClick={ListOfItems}> + </button>
        <ol>{
          items.map((itemval, index) => {
            return (<>
              <div className='item-style' key={index}>
                <i className="fa-solid fa-circle-xmark" value={itemval} onClick={deleteItems}></i>
                <li>{itemval}</li>
              </div>

            </>);
          })}
          {/* <li>{inputList}</li> */}
        </ol>
      </div>
    </div>
  </>;
}

export default App;
