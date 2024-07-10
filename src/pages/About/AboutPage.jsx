// import '../home/components/HomePage.css'
import './AboutPage.css'
import VS from '../../images/vscode.png'
import UTD from '../../images/newutd.png'
import AIS from '../../images/ais.png'


// import ScrollAnimation from '../home/components/ScrollAnimation';
import Animations from'./AboutAnimations.jsx'
import Footer from './footer/Footer.jsx';
import { forwardRef } from 'react';
import { Form } from 'react-router-dom'
import Profile from './ProfilePicture.jsx'

function Headline({ text}, ref) {


    return(
        <>
        <div className="about-page">
            <div className="about-me-title">about.</div>
            <div className="vscode-window-container">
            <h2 ref={ref}>{text}</h2>

            <Animations/>
            <Footer/>
                </div>
                <div className="profile-container"data-aos="fade-in">
                    <img src={AIS}></img>
                </div>
                <div className="utd-logo " data-aos="fade-left">
                    <img className='utd'  src={UTD}></img>
                </div>
        </div>

        </>
    )
}

export default forwardRef(Headline)
