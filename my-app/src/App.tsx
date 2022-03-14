import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ShowInfo from './components/ShowInfo'
import { ProducType } from './types/product';

function App() {
  const [info, setInfo] = useState<ProducType>({
    name: "Dat",
    age: 22
  });
  
  return (
    <div className="App">
      <ShowInfo info={info}/>
    </div>
  )
}

export default App

