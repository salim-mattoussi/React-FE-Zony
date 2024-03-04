import React from 'react'
import './Footer.css'
import Logo from '../../assets/logo.png'
import {InboxIcon ,PhoneIcon, LocationMarkerIcon,LoginIcon,UsersIcon}from "@heroicons/react/outline"
const Footer = () => {
  return (
    <div className="cFooterWrapper">
        <hr />
        <div className="cFooter">
            <div className="cLogo">
                <img src={Logo} alt="" />
                <span>Zony</span>
            </div>
            <div className="block">
                <div className="detail">
                    <span>Contact Us</span>
                    <span className="pngLine">
                        <LocationMarkerIcon className="icon"/>
                        <span> 111 NY,USA ,AM 85522</span>
                    </span>
                    <span className="pngLine">
                        {" "}
                        <PhoneIcon className="icon"/>
                        <span> +216 90327156</span>
                    </span>
                    <span className="pngLine">
                        <InboxIcon className="icon"/>
                        <a href="mail@gmail.com">Mail@gmail.com</a>
                    </span>
                </div>
            </div>

            <div className="block">
                <div className="detail">
                    <span>Account</span>
                    <span className="pngLine">
                        <LoginIcon className="icon"/>
                        <span> Sign In</span>
                    </span>
                    
                </div>
            </div>
            <div className="block">
                <div className="detail">
                    <span>Company</span>
                    <span className="pngLine">
                        <UsersIcon className="icon"/>
                        <span> About us</span>
                    </span>
                    
                </div>
            </div>
        </div>

        <div className="copyRight">
            <span>Copyright ©2024 by Zeny ,SM</span>
            <span>All rights reserved.</span>
        </div>
    </div>
  )
}

export default Footer