//  import { FaBookOpen, FaDollarSign} from 'react-icons/fa';
 import {FiDollarSign} from 'react-icons/fi';
  import {BsBook} from 'react-icons/bs';

const Card = ({card,selectedBtn}) => {
    const {image,title,details,price,credit_hour} = card;
    return (
        <div className='p-3 bg-slate-100 rounded-lg '>
            <img className='mb-4 h-36 w-full' src={image} alt="" />
            <h4 className="text-left text-lg h-10 font-semibold mb-2">{title}</h4>
            <p className='text-left mb-2 h-20'>{details}</p>
            <div className="mt-4 flex justify-between items-center">
                <div className='flex justify-center items-center gap-1'>
                    <span className='text-3xl'><FiDollarSign></FiDollarSign></span>
                    <p className="font-medium text-xl ">Price: {price}</p> 
                </div>
                <div className='flex justify-center gap-1 items-center '>
                <span className='text-3xl'><BsBook></BsBook></span>
                <p className="font-medium text-xl"> Credit: {credit_hour}hr</p>
                </div>
                
            </div>
            <button onClick={()=>selectedBtn(card)} className="bg-cyan-500 w-full my-4 py-2 text-2xl font-semibold text-white rounded-xl ">Select</button>

        
            
        </div>
    );
};

export default Card;