import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ShowInfo from './components/ShowInfo'
import axios from 'axios';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import WebsiteLayout from './pages/layouts/WebsiteLayout';
import Product from './pages/Product';
import AdminLayout from './pages/layouts/AdminLayout';
import ManagerProduct from './pages/ManagerProduct';
import ProductAdd from './pages/ProductAdd';
import { add, list, remove , update } from './api/product';
import "bootstrap/dist/css/bootstrap.min.css"
import { ProductType } from './types/product';
import ProductEdit from './pages/ProductEdit';
import PrivateRouter from './components/PrivateRouter';
import Signup from './pages/Signup';
import Signin from './pages/Singin';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // const [count, setCount] = useState(0)
  const [products, setProduct] = useState<ProductType[]>([]);
  // const [count, setCount] = useState<number>(0);

  useEffect(() => { 
    const getProducts = async () => {
      const { data } = await  list();
      setProduct(data);
    }
    getProducts();
  },[])

const removeItem = async (id: number)=>{
    // Xóa trên ADI
    // const { data } = await remove(id);
    //reRender
    remove(id);
    setProduct(products.filter(item => item.id !== id));
}
const onHandleAdd = async (product: ProductType)=> {
  //call api
  const { data } = await add(product);
  setProduct([...products,data])
}
const onHandleUpdate = async (product:ProductType) => {
  console.log(product);
 const { data } = await update(product)
 setProduct(products.map(item => item.id == data.id ? data : item));
}
  return (
    <div>
      <Routes>
        <Route path="/" element={<WebsiteLayout/>}>
          <Route index element={<Home/>} />
          <Route path="product" element={<Product/>} />
          {/* <Route path="login" element={ <h1>LoginPage</h1> } /> */}
          
          
        </Route>
          <Route path="signup" element= {<Signup/>}/>
          <Route path="signin" element= {<Signin/>}/>
        <Route path="admin" element={<AdminLayout/>}> 
          <Route index element={<Navigate to="dashboard"/>} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="product" >
                    <Route index  element={<ManagerProduct data={products} onRemove={removeItem}/>}/>
                    <Route path="add" element={<ProductAdd  onAdd={onHandleAdd}/>} />
                    <Route path=":id/edit" element={<ProductEdit onUpdate={onHandleUpdate}/>} />
          </Route> 
        </Route>  
    </Routes>
    </div>
    

  )
}

export default App


