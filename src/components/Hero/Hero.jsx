import React from "react";
import "./Hero.css";
import heroImage from "../../assets/hero.png";
import { RiShoppingBagFill } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
import {motion} from 'framer-motion'
const Hero = () => {

  const transition = {duration: 3, type:"spring"}
  return (
    <div className="containeer">
      <div className="h-side">
        <span className="text1">skin PROTECTION cream</span>
        <div className="text2">
          <span>trendly Collections</span>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque.
          </span>
        </div>
      </div>
      {/* middle */}
      <div className="wrapper">


        <motion.div
        initial={{bottom: "4rem"}}
        whileInView={{bottom : "0rem"}}
        className="blueCircle"
          transition={transition}>


        </motion.div>
        <motion.img
        transition={transition}
        initial={{bottom : "-2rem"}}
        whileInView={ {bottom: "0rem"}}
        src={heroImage} alt="" width={600} />


        <motion.div
        transition={transition}
        initial={{right:"4%"}}
        whileInView={{right:"2%"}}
        className="cart2">
          <RiShoppingBagFill />

          <div className="signup">
            <span>Best Signup Offers</span>
            <div>
              <BsArrowRight />
            </div>
          </div>
        </motion.div>
      </div>

      {/* right */}
      <div className="h-side">
        <div className="traffic">
          <span>1.5m</span>
          <span> Monthely Traffic</span>
        </div>
        <div className="customers">
          <span>100K</span>
          <span>Happy Customers</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
