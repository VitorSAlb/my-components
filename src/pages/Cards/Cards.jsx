import { useEffect, useState } from "react"; 
import CardSimpleBuy from "../../components/Card-Simple-Buy/CardSimpleBuy";

import imgExmplo from '../../components/Card-Simple-Buy/assets/card-exemplo.webp';

import './Cards.css'

const Cards = () => {

    return(
        <main>
            <div className="CardsSimpleBuy">
                <CardSimpleBuy 
                    titulo='Notebook' 
                    banner={imgExmplo}
                    description='Barato'
                    price={1999.99}
                />
            </div>
            
        </main>
    );
};

export default Cards;