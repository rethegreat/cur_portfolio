import './Work.css'
import React from 'react'
import Aos from "aos"
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'

export default function Work(){
    React.useEffect(
        () => {
            Aos.init({ duration: 2000})
        }, []
    )


    return (
        <div className='aboutMe' >
            <h3 className='work' data-aos="slide-right">
                Passionate about building a future with web and applications that are accessible and inclusive for all. Positively impacting the life for those that use these technologies.
            </h3>

            <h3 className='self' data-aos="slide-left">
                In my free times I boulder, and solve different type of problems to challenge myself think critically about each situation. 

                <Link to='/about'>
                <button className='learnMore'>
                    <p className='circleText'>About me</p>
                </button>
                </Link>
            </h3>
        </div>
    )
}