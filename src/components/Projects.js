import React from 'react'
import './Projects.css'
import Umate from './umate.jpg'
import medival from './medival.jpg'
import amitee from './amitee.jpg'
import Aos from "aos"
import 'aos/dist/aos.css'

export default function Project(props){

    React.useEffect(
        () => {
            Aos.init({ duration: 2000})
        }, []
    )

    return (
        <div>
            <h2 className='projectTitle' data-aos="zoom-in">My Projects</h2>
            <div className={props.windowWidth > 900 ? 'project' : 'mobileProject'}>
                <div className='projectText' data-aos="fade-right">
                    <h1>Amitee</h1>
                    <p>
                        A desktop app that searches the user's Google Calendar schedule info to suggest recommendations 
                        for how they can spend their free time with friends
                    </p>
                </div>
                <img src={amitee} alt='a group of friends' className='projectPicture' data-aos="fade-left"/>
            </div>
            <div className={props.windowWidth > 900 ? 'project uMate' : 'mobileProject'}>
                <div className='projectText ' data-aos="fade-left">
                    <h1>UMate</h1>
                    <p>
                        An app created for university students to find roomates for off campus housing using match making algorithms
                    </p>
                </div>
                <img src={Umate} alt='a group of friends' className='projectPicture'data-aos="fade-right"/>
                
            </div>
            <div className={props.windowWidth > 900 ? 'project' : 'mobileProject'}>
                <div className='projectText' data-aos="fade-right">
                    <h1>Medival Life</h1>
                    <p>
                        A game enabling you to experience the life of a medival peasent through everyday actions
                    </p>
                </div>
                <img src={medival} alt='a group of friends' className='projectPicture' data-aos="fade-left"/>
            </div>
        </div>
    )
}