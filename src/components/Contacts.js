import React from "react";
import Contact from './contact.jpeg'
import './Contacts.css'

export default function Contacts(){
    return (
        <div className="contacts">
            <div className="invitation">
                
                <h3>Work with me</h3>
                <img src={Contact} alt='picture of Boaz smiling' className='contactPic' />
            </div>
            <div className="contactInfo">
                <h4>Contact me at</h4>
                <h1>boazcheung2003@gmail.com</h1>
                <h3>+1 6477643124</h3>
            </div>
        </div>
    )
}