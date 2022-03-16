import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ShowInfo from './components/ShowInfo'
import { ProducType } from './types/product';
import axios from 'axios';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

import WebsiteLayout from './pages/layouts/WebsiteLayout';
import Product from './pages/Product';
import AdminLayout from './pages/layouts/AdminLayout';
import ManagerProduct from './pages/ManagerProduct';


function App() {
  
  const [products, setProduct] = useState<ProducType[]>([]);
  const [count, setCount] = useState<number>(0);

  useEffect(() => { 
    const getProducts = async () => {
      const { data } = await axios.get('http://localhost:3000/products');
      setProduct(data);
    }
    getProducts();
  },[])

const removeItem = (id: number)=>{

}

  return (
    <div className="App">
      {count} <button onClick={() => setCount(count + 1)}>Click</button>

      <hr />
      {/* <table>
        <thead>
          <th>#</th>
          <th></th>
          <th></th>
        </thead>
        <tbody>
          {products && products.map((item, index) => {
            return <tr>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>
                        <button onClick={() => removeItem(item._id)}>Remove</button>
                      </td>
                  </tr>
          })}
        </tbody>
      </table> */}
      <header>
        <ul>
          <li><NavLink to="/">Home page</NavLink></li>
          <li><NavLink to="/product">Product page</NavLink></li>
          <li><NavLink to="/about">About page</NavLink></li>
          <li><NavLink to="/admin/dashboad">Admin Dashboad</NavLink></li>
        </ul>
      </header>
      <main>
        <Routes>
            {/* <Route path="/" element={<h1>Home page</h1>}/>
            <Route path="/product" element={<h1>Products page</h1>}/>
            <Route path="/about" element={<h1>About page</h1>}/> */}

            <Route path="/" element={<WebsiteLayout/>}>
              <Route index element={<Home/>} />
              <Route path="product" element={<Product/>} />
            </Route>
            <Route path="admin" element={<AdminLayout />}> 
              <Route index element={<Navigate to="dashboard"/>} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="product" element={<ManagerProduct />} />
            </Route>
        </Routes>
      </main>
      {/* {products.map(item => <div>{item.name}</div>)} */}
    </div>
  )
}

export default App


