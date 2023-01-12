import React from 'react'
import './Projects.css'
import Umate from './umate.jpg'
import spending from './spending.jpeg'
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
                    <a href='https://github.com/PotatoAuthor/HackerSnackers' className='projectTitle'>Amitee</a>
                    <p>
                        A desktop app that searches the user's Google Calendar schedule info to suggest recommendations 
                        for how they can spend their free time with friends
                    </p>
                </div>
                <img src={amitee} alt='a group of friends' className='projectPicture' data-aos="fade-left"/>
            </div>
            <div className={props.windowWidth > 900 ? 'project uMate' : 'mobileProject'}>
                <div className='projectText ' data-aos="fade-left">
                    <a href='https://github.com/CSC207-2022F-UofT/course-project-blob-daily' className='projectTitle'>Blob Daily</a>
                    <p>
                        An app created for to incentivise productivity by introducing a gamification of task
                    </p>
                </div>
                <img src={Umate} alt='a group of friends' className='projectPicture'data-aos="fade-right"/>
                
            </div>
            <div className={props.windowWidth > 900 ? 'project' : 'mobileProject'}>
                <div className='projectText' data-aos="fade-right">
                    <a href='https://github.com/rethegreat/trackie' className='projectTitle'>Trackie</a>
                    <p>
                        Web app is designed to help you keep track of your spending habits and make informed decisions about your finances.
                    </p>
                </div>
                <img src={spending} alt='a group of friends' className='projectPicture' data-aos="fade-left"/>
            </div>
        </div>
    )
}