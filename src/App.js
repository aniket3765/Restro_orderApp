import React ,{ useState } from 'react';
import './App.css';
import List from './Components/List';

function App() {
  const [uniqueId, setUniqueId] = useState('');
  const [order, setOrder] = useState('');
  const [prize, setPrize] = useState('');
  const [table, setTable] = useState('1');
  const [orderList, setOrderList] = useState([]);
  

  const uniqueIdHandler = (event) =>{
    console.log(uniqueId)
    setUniqueId(event.target.value)
  }

  const orderHandler = (event) => {
    setOrder(event.target.value);
  }

  const prizeHandler = (event) => {
    setPrize(event.target.value);
  }

  const tableHandler = (event) => {
    setTable(event.target.value)
  }
  const addOrder = (event)=>{
    event.preventDefault()
    const newOrder = {
      id:uniqueId,
      prize:prize,
      order:order,
      table:table
    }
    setOrderList([...orderList, newOrder])
    

  }
  

  return (
    <div>
      <form onSubmit={addOrder}>
        <label>ID : </label>
        <input id="uniqueId" type="number" value={uniqueId} onChange={uniqueIdHandler}></input>
        <label>Order : </label>
        <input id="orderName" type="text" value={order} onChange={orderHandler}></input>
        <label>Prize : </label>
        <input id="prize" type="number" value={prize} onChange={prizeHandler}></input>
        <label>Select Table : </label>
        <select id="tabel" value={table} onChange ={tableHandler}>
          <option value="1">Table 1</option>
          <option value="2">Table 2</option>
          <option value="3">Table 3</option>
        </select>
        <button type='submit'>Place Order</button>
        </form>
       {orderList.map((order)=>{return (<List key={Math.random()} id={order.id} order={order.order} prize={order.prize} table={order.table}></List>)})}
    </div>
  );
}

export default App;
