import React from 'react'
import './testimonoal.css'
import Hero from '../../assets/testimonialHero.png'
import {Swiper ,SwiperSlide}from 'swiper/react'
import {TestimonialsData  } from "../../data/testimonials"
const Testimonial = () => {
  return (
    <div className="testimonials">
        <div className="wrapperr">
            <div className="containerT">
            <span>Top Rated</span>
            <span>SEEDILY SAY HAS SUITABLE DISPOSAL AND BOY. EXERCISE JOY MAN CHILDREN REJOICED.</span>
        </div>
        <img src={Hero} alt="" />
        <div className="containerT">
            <span>100K</span>
            <span>HAPPY CUSTOMERS WITH US</span>
        </div>
         </div>



            <div className="reviews">Reviews</div>
         <div className="carousel">
            <Swiper
            slidesPerView={3}
            slidesPerGroup={1}
            spaceBetween={20}
            className="tCarousal"
            breakpoints={{
                856:{
                    slidesPerView :3
                },
                640:{
                    slidesPerView :2
                },
                0:{
                    slidesPerView : 1
                }
            }}
            >
                {TestimonialsData.map((Testimonial,i)=>(
                    <SwiperSlide>
                        <div className="testimonial">
                            <img src={Testimonial.image} alt="" />
                            <span>{Testimonial.comment}</span>
                            <hr />
                            <span>{Testimonial.name} </span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
         </div>
    </div>
    
    )
}

export default Testimonial