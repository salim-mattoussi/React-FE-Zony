import React from 'react'
import './Virtual.css'
import Shade from '../../assets/shade.png'
import ReactCompareImage from 'react-compare-image'
import Before from '../../assets/before.png'
import After from '../../assets/after.png'
const Virtual = () => {
  return (
    <div className="virtual">
         <div className="left">
            <span>VIRTUAL TRY-ON</span>
            <span>NEVER BUY THE WRONG SHADE AGAIN!</span>
            <span>Try Now!</span>
            <img src={Shade} alt="" />
         </div>
         <div >
            <div className="wrapper-V">
           <ReactCompareImage leftImage={Before}  rightImage={After} />

            </div>
         </div>
    </div>
  )
}

export default Virtual