import React, { useState } from 'react'
import "./Header.css"
import Logo from '../../assets/logo.png'
import {CgShoppingBag} from 'react-icons/cg'
import {GoThreeBars} from 'react-icons/go'


const Header = () => {
    const [ShowMenu , setShowMenu] = useState(true)
    const toggleMenu = () =>{
        setShowMenu((ShowMenu)=>!ShowMenu)
    }
  return (
        <div className="container">
            <div className="logo">
                <img src={Logo} alt="" />
                <span>Zony</span>
            </div>

            <div className="right">
                <div className="bars" onClick={toggleMenu}> 
                    <GoThreeBars/>
                </div>
            
                    <ul className="menu"  style={{display: ShowMenu? 'inherit' : 'none'}}>
                        <li> Collections</li>
                        <li> Brands</li>
                        <li> New</li>
                        <li>Sales</li>
                        <li>ENG</li>
                    </ul>
               
               
                <input type="text" placeholder='Search' className="serach" />
                <CgShoppingBag className="cart"/>
            </div>
        </div>
  )
}

export default Header
