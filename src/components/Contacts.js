import React from "react";
import Contact from './contact.jpeg'
import './Contacts.css'
import Aos from "aos"
import 'aos/dist/aos.css'

export default function Contacts(props){
    React.useEffect(
        () => {
            Aos.init({ duration: 2000})
        }, []
    )

    return (
        <div className="contacts" data-aos="slide-up">
            <div className="invitation">
                
                <h3>Work with me</h3>
                <img src={Contact} alt='Boaz smiling' className='contactPic' />
            </div>
            <div className="contactInfo">
                <h4>Contact me at</h4>
                <a href='mailto:woming.cheung@mail.utoronto.ca'>woming.cheung@{props.windowWidth < 580 && ' ' }mail.utoronto.ca</a>
                <h3>+1 647-764-3124</h3>
            </div>

            <div className="footer-describtion top">
                <p>Desgined and developed by</p>
                <p>Socials</p>
            </div>
            <div className="footer-describtion">
                <p>Boaz Cheung</p>
                <div className="socials">
                    <a href='https://www.instagram.com/boaz_cheung/' target='_blank' rel="noreferrer">Instagram</a>
                    <a href='https://www.linkedin.com/in/woming-boaz-cheung' target='_blank' rel="noreferrer">LinkedIn</a>
                    <a href='https://www.github.com/rethegreat' target='_blank' rel="noreferrer">GitHub</a>
                </div>
            </div>
        </div>
    )
}