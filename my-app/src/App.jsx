import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Item from './componets/Item'
import ShowInfo from './componets/ShowInfo'





function App() {
  const [ count, setCout ] = useState(0);
  const products = [
    {id: 1, name: "Product A"},
    {id: 2, name: "Product B"},
    {id: 3, name: "Product C"},
  ];

  const removeItem = (id) => {
    const newProduct = products.filter(item => item.id !== id);
    setProduct(newsProducts);
  }
  


  return (
    <div className="App">
    
      {products.map((item,index) => <div>{item.name}
          <button onClick={() => removeItem(item.id)}>Remove</button>
        </div>)}

      <ShowInfo name="Tuan" age={29}/>

    </div>
  )
}

export default App
