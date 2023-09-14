
import './App.css'
import Cards from './Component/Cards/Cards'
import Cart from './Component/Cart/Cart'

function App() {
  

  return (
    <>
     
      <h1 className='text-7xl font-bold mb-10'>Course Registration</h1>
      <div className='flex gap-10'>
        <Cards></Cards>
        <Cart></Cart>

      </div>
      
    </>
  )
}

export default App
