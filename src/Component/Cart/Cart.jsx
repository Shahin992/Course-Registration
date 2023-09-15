import React from 'react';

const Cart = ({selected}) => {
    
    return (
        <div className='w-1/3 text-left'>
           <div className='border-b-4'>
           <h4 className='text-lg font-bold pb-4 '>Credit Hour Remaining: </h4>
           </div>
           <h4 className='text-lg font-semibold my-4'>Course Name: </h4>

            {
          
         
          
          selected.map((select) => (
           
            
            <div className="bg-gray-300 p-3 mr-5">
            <div className="bg-white rounded-xl p-3 gap-y-3">
             <li className="text-2xl ml-3 font-medium">{select.title}</li>
            </div>
          </div>
                )
            )
        } 

<h4 className='text-lg font-semibold my-4 border-y-4 pt-5 pb-2'>Total Credit Hour : </h4>




        </div>
    );
};

export default Cart;