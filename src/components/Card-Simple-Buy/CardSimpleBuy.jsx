import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Img from './assets/imagem-out.svg';

import './CardSimpleBuy.css';

const CardSimpleBuy = (props) => {


    return(
        <div className="container-main">
            <div className="img-section">
                {props.banner ? <img src={props.banner}/> : <img src={Img}/>}
            </div>
            <div className="info-section">
                <div className="content-section">
                    <h2>{props.titulo ? props.titulo : '----'}</h2>
           
                    <p>{props.description ? props.description : '------'}</p>
                </div>


                <div className="buy-section">
                <h3>R$ {props.price ? parseFloat(props.price) : 0.00}</h3>
                <Link to={'/'}><button onClick={null}>Buy</button></Link>
                </div>
            </div>
        </div>
    );
}

export default CardSimpleBuy;