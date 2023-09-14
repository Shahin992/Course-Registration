import { useEffect, useState } from "react";
import Card from "./Card";


const Cards = () => {
    const [card,setCard] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCard(data))
    },[])



    return (
        <div className="w-2/3">
            
            <div className="grid grid-cols-3 gap-5">
                
            {
           
           card.map(card => <Card card={card}></Card>)
           }
            </div>


           
        </div>
    );
};

export default Cards;