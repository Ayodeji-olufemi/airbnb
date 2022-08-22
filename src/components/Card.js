import React from "react";

export default function Card(props) {
    return(
       <div className="card--box">
           <img className="main--image" src={props.img} alt="swimmer" />
           <div className="rating">
               <img className="star" src="./star.png" alt=""/>
               <p className="bold">5.0</p>
               <p className="thin">(6).USA</p>
           </div>
           <p className="script">{props.title}</p>
           <div className="bro">
               <p>From ${props.rrp}</p>
               <p>/ per person</p>
           </div>
       </div> 
    )
}