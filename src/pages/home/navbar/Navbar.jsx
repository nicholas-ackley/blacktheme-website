import React from "react";
import '../components/HomePage.css'
import { useRef } from "react";
import About from "../../About/AboutPage";


const Navbar = () => {
    const ref = useRef(null)

    const handleClick = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'})
    }


    return(
        <>
            <div className="name-title">nicholasAckley();</div>

            <nav className="navbar">
                <ul className="navbar-links">
                    <li><a href="/">Home</a></li>
                    <li><a onClick={handleClick}>About</a></li>
                    <li><a href="/">Projects</a></li>
                    <li><a href="https://github.com/nicholas-ackley">Github</a></li>

                </ul>
            </nav>
            <About ref={ref}/>
        </>
    )
}
export default Navbar