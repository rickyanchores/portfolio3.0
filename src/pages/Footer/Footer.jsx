import React from 'react'
import { FaFacebook, FaInstagram,FaGithub  } from "react-icons/fa"



const Footer = () => {

    const iconStyle = {
        color: "white",
        fontSize: "2em",
        margin: "0.5"
    }

    return (
        <div className='Footer'>
            <div className="container">
                <div className="left">
                    <h3>GET IN TOUCH:</h3>
                    <h5>Email: ricky23anchores@gmail.com</h5>
                    <h5>London, United Kingdom</h5>
                    <h5>&copy;2023 Developed by Ricky A</h5>
                </div>
                <div className="right" id='contacts'>
                    <h3>Ricky A</h3>
                    <div className="socialLink">
                        <FaFacebook style={iconStyle}/>
                    </div>
                    <div className="socialLink">
                        <FaInstagram style={iconStyle}/>
                    </div>
                    <div className="socialLink">
                        <FaGithub style={iconStyle}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
