import './Work.css'
import React from 'react'
import Aos from "aos"
import 'aos/dist/aos.css'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'


export default function Work(){
    React.useEffect(
        () => {
            Aos.init({ duration: 2000})
        }, []
    )

    function changeColor(event){
        event.target.style.background = '#e6c66e'
        event.target.style.color = 'black'
    }


    function mouseLeave(event){
        event.target.style.background = 'black'
        event.target.style.color = 'white'
    }
    

    return (
        <div className='aboutMe' >
            <p> </p>
            <h3 className='work' data-aos="slide-right">
                Passionate about building a future with web and applications that are accessible and inclusive for all. Positively impacting the life for those that use these technologies.
            </h3>
            <p> </p>
            <h3 className='self' data-aos="slide-left">
                In my free times I boulder, and solve different type of problems to challenge myself think critically about each situation. 

                <NavLink to='/about'>
                <motion.button 
                    className='learnMore' 
                    onMouseOver={changeColor} 
                    onMouseLeave={mouseLeave}
                    whileHover={{scale:1.1}}
                    whileTap={{scale:.9}}
                >
                    About me
                </motion.button>
                </NavLink>
            </h3>
            <p> </p>
        </div>
    )
}