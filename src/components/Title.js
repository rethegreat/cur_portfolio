import './Title.css'
import React from "react";
import Cover from './cover.jpeg'
import { NavLink } from 'react-router-dom'



export default function Title(props){

    //Add the Name and menu into a nav bar
    //Make the photo dragable to show different pictures

    function changeColor(event){
        event.target.style.color = 'orange'
    }


    function mouseLeave(event){
        event.target.style.color = 'black'
    }

    const school = 'Current Student at the University of Toronto'
    const background = 'Grew up around the world'

    return (
        

        <div className="title" >
            <nav className='navbar intro'>
                <h2 onMouseEnter={changeColor} onMouseLeave={mouseLeave}><NavLink to='/' onClick={() => window.scrollTo(0, 0) }>Boaz Cheung</NavLink></h2>
                <h2> </h2>
                <h2> </h2>
                <h2 >
                    <NavLink to='/about'>
                        <span onMouseEnter={changeColor} onMouseLeave={mouseLeave}>About</span></NavLink>, 
                    <NavLink to='/' onClick={() => window.scrollTo(0, 1450)}> 
                        <span onMouseEnter={changeColor} onMouseLeave={mouseLeave}> Projects</span></NavLink>,
                    <NavLink to='/' onClick={() => window.scrollTo(0, 3500)}> 
                        <span onMouseEnter={changeColor} onMouseLeave={mouseLeave}> Contact</span></NavLink>
                </h2>
            </nav>
            <div className='intro'>
                <h2> </h2>
                <h2>{props.windowWidth > 800 && school}</h2>
                <h2>{props.windowWidth > 800 && background}</h2>
                <h2> </h2>
            </div>
            <div className='main'>
                <h1 className='main'>Student Web Developer <span className='bottomRightArrow'>↘</span></h1>
                <img src={Cover} alt="Boaz" className={props.windowWidth > 610 ? 'coverPicture' : 'mobileCoverPicture'}/>
            </div>
            <div className={props.windowWidth > 750 ? 'bottom' : 'mobileBottom'}>
                <p>↓</p>
                <h3 className='quote'>Creating web and mobile applications that make a difference</h3>
                <h3 className='name'>Boaz Cheung</h3>
            </div>

        </div>
    )
}