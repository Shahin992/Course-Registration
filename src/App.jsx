
import { useState } from 'react'
import './App.css'
import Cards from './Component/Cards/Cards'
import Cart from './Component/Cart/Cart'

function App() {
  const [selected,setSelected] = useState([])

  const selectedBtn =cardDetails =>{
    const newSelected = [...selected,cardDetails]
    setSelected(newSelected);

  }
  
  

  return (
    <>
     
      <h1 className='text-7xl font-bold mb-10'>Course Registration</h1>
      <div className='flex gap-8'>
        <Cards selectedBtn={selectedBtn}></Cards>
        <Cart selected={(selected)}></Cart>

      </div>
      
    </>
  )
}

export default App
