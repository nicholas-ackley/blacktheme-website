import React from "react";
import Hero from "./Hero.jsx";
import './HomePage.css'
import Navbar from '../navbar/Navbar.jsx'
// import Scroll from "./ScrollAnimation.jsx";
import ScrollAnimation from "./ScrollAnimation.jsx";
import About from '../../About/AboutPage.jsx'
import Name from './NameAnimation.jsx'

// import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
const HomePage = () => {

    
    return(
        <>
            <Navbar/>
            <Name/>
            <Hero/>
            <ScrollAnimation/>

        </>



    )
}
export default HomePage