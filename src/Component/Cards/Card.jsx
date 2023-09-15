

const Card = ({card,selectedBtn}) => {
    const {image,title,details,price,credit_hour} = card;
    return (
        <div className='p-3 bg-slate-100 rounded-lg '>
            <img className='mb-4 h-36' src={image} alt="" />
            <h4 className="text-left text-lg h-10 font-semibold mb-2">{title}</h4>
            <p className='text-left mb-2 h-20'>{details}</p>
            <div className="mt-4 flex justify-between">
                <p className="font-medium">Price:$ {price}</p>
                <p className="font-medium">Credit: {credit_hour}hr</p>
            </div>
            <button onClick={()=>selectedBtn(card)} className="bg-cyan-500 w-full my-4 py-2 text-2xl font-semibold text-white rounded-xl ">Select</button>

        
            
        </div>
    );
};

export default Card;