import React from 'react';

const Cart = ({selected,hour,total,remaining}) => {
    
    return (
        <div className='w-1/3 text-left'>
           <div className='border-b-4'>
           <h4 className='text-3xl font-bold text-cyan-500 pb-4 '>Credit Hour Remaining: {remaining} hr </h4>
           </div>
           <h4 className='text-3xl font-bold my-4'>Course Name: </h4>

            {
          
         
          
          selected.map((select,idx) => (
           
            
            <div className="bg-gray-300 p-3 mr-5">
            <div className="bg-white rounded-xl p-3 gap-y-3">
             <h3 className="text-2xl ml-3 font-medium">{idx+1}. {select.title}</h3>
            </div>
          </div>
                )
            )
        } 

<h4 className='text-xl font-semibold my-4 border-y-4 pt-5 pb-2'>Total Credit Hour :  {hour} hr</h4>
<h4 className='text-xl font-semibold my-4 border-b-4 pt-5 pb-2'>Total Price :  {total} USD</h4>






        </div>
    );
};

export default Cart;