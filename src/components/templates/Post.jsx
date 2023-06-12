import './Post.css';
import React from "react";
import sonic from "../../assets/images/Fv5rti-WcAAd31A.jpg"

export default props => 
    <div className="post-main">
        <h1 className="mt-3">
            {props.title}
        </h1>
        <div className="subtitle-items">
            <i className="lead text-muted name ms-2">Por: {props.name}</i>
            <i className="lead text-muted date"> | {props.date}</i>  
            <i className="lead text-muted subtitle">{props.subtitle}</i>
        </div>

        <div className="body-post">
            <img src={sonic} alt="" className="image" />
            <div className="post-content">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus cupiditate magnam vero in animi fugit explicabo est. Cumque perspiciatis, odio quo distinctio delectus rem architecto, iusto qui saepe veniam minima!
            </div>
            <a href="/" className='read-more'>Leia mais...</a>
        </div>
        {/* <div className="read-more">
            
        </div> */}
        
    </div>