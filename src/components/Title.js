import './Title.css'
import React from "react";
import Cover from './cover.jpeg'



export default function Title(){

    //Add the Name and menu into a nav bar
    //Make the photo dragable to show different pictures

    return (
        <div className="title" >
            <div className='intro'>
                <h2>Boaz Cheung</h2>
                <h2>Current Student at the University of Toronto</h2>
                <h2>Born in Hong Kong, <br></br> raised globally</h2>
                <h2>Work, About, Contact</h2>

            </div>
            <div className='main'>
                <h1 className='main'>Student Web Developer <span className='bottomRightArrow'>↘</span></h1>
                <img src={Cover} alt="picture of Boaz" className='coverPicture'/>
            </div>
            <div className='bottom'>
                <p>↓</p>
                <h3 className='quote'>Creating web and mobile applications that make a difference</h3>
                <h3 className='name'>Boaz Cheung</h3>
            </div>
        </div>
    )
}