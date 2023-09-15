
import { useState } from 'react'
import './App.css'
import Cards from './Component/Cards/Cards'
import Cart from './Component/Cart/Cart'

function App() {
  let Remaining = 20
  const [selected,setSelected] = useState([])
  const [total,setTotal] = useState(0)
  const [hour,setHour] = useState(0)
  let [remaining,setRemaining] = useState(Remaining);
  
  
  


  const selectedBtn =cardDetails =>{
    const newSelected = [...selected,cardDetails]
   

    let creditHour = cardDetails.credit_hour;
    let count = cardDetails.price ;
    
    selected.forEach((item)=>{
      count = count +item.price
      creditHour = creditHour + item.credit_hour
    
    }
      
      ) 

      remaining = Remaining - creditHour;

      setSelected(newSelected);
      setHour(creditHour);
      setTotal(count);
      setRemaining(remaining);
      

  }
  
  

  return (
    <>
     
      <h1 className='text-7xl font-bold mb-10'>Course Registration</h1>
      <div className='flex gap-8'>
        <Cards selectedBtn={selectedBtn}></Cards>
        <Cart remaining={remaining} hour={hour} total={total} selected={(selected)}></Cart>

      </div>
      
    </>
  )
}

export default App
