import { useState, useEffect } from 'react';
import Form from './Form.js';
import List from './List.js';
import Table from './Table.js';

function App() {
  const [reqType, setReqType] = useState('users');
  const [items, setItems] = useState ([]);

  const API_URL = 'https://jsonplaceholder.typicode.com/';

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`);
        const data = await response.json();
        setItems(data)
      } catch (err) {
        console.log(err.message)
      }
    }
    fetchItem()

  },[reqType])
  return (
    <div className="App">
      <Form
        reqType = {reqType}
        setReqType = {setReqType}
      />
      {/* <List
        items={items}
      /> */}
      <Table items={items} />
    </div>
  );
}

export default App;
