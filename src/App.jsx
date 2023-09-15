
import { useState } from 'react'
import './App.css'
import Cards from './Component/Cards/Cards'
import Cart from './Component/Cart/Cart'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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

    const isItemInCart = selected.find((item) => item.title === cardDetails.title);
   if(isItemInCart){
      return (toast.error("Course already Selected", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000, 
      }));
    
    }
   

    console.log(isItemInCart);
    
    selected.forEach((item)=>{
      count = count +item.price
      creditHour = creditHour + item.credit_hour
    
    }
      
      ) 
      

      
      remaining = Remaining - creditHour;

      if(creditHour>Remaining){
        return (toast.error("You don't have enough credit hour", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000, 
        }));
      
      }
      
      setSelected(newSelected);
      setTotal(count);
      setRemaining(remaining);
      setHour(creditHour);
      

  }
  
  

  return (
    <>
     
      <h1 className='text-7xl font-bold mb-10'>Course Registration</h1>
      <div className='flex gap-8'>
        <Cards selectedBtn={selectedBtn}></Cards>
        <Cart remaining={remaining} hour={hour} total={total} selected={(selected)}></Cart>
        <ToastContainer/>

      </div>
      
    </>
  )
}

export default App
