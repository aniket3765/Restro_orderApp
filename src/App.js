import React ,{ useState } from 'react';
import './App.css';
import List from './Components/List';

function App() {
  const [uniqueId, setUniqueId] = useState('');
  const [order, setOrder] = useState('');
  const [prize, setPrize] = useState('');
  const [table, setTable] = useState('1');
  const [orderList, setOrderList] = useState([
    {
      id:1,
      table:"1",
      order:"paneer tikka",
      prize:123
    },
    {
      id:2,
      table:"2",
      order:"chiken",
      prize:1
    },
    {
      id:3,
      table:"3",
      order:"chinese",
      prize:87
    }
  ]);
  
  const onDelete = (event) => {
    setOrderList(orderList.filter((order)=> {if(order.id != event.target.id) return order}))
  }

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
    setOrderList([...orderList, newOrder]);
    

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
        <label>Table: 1</label>
        <List 
        orderList={orderList.filter((order)=> {if(order.table === "1") return order})} 
        onDelete = {onDelete}
        ></List><br />
        <label>Table: 2</label>
        <List 
        orderList={orderList.filter((order)=> {if(order.table === "2") return order})}
        onDelete = {onDelete}></List><br />
        <label>Table: 3</label>
        <List 
        orderList={orderList.filter((order)=> {if(order.table === "3") return order})}
        onDelete = {onDelete}></List>
        
    </div>
  );
}

export default App;
