import React from 'react'
import ReviewContainer from './ReviewContainer'
import L1 from '../assets/motionarteffect-img1.png'
import L2 from '../assets/motionarteffect-img2.png'
import L3 from '../assets/motionarteffect-img3.png'
const Review = () => {
  return (
    <div className='p-5'>
        <p className='font-medium text-center text-white text-lg'>Trusted by businesses around the world</p>
        <div className='flex flex-wrap justify-around gap-5 pt-12 px-5'>
            <ReviewContainer img={L1} text={"Seamless Communication"}/>
            <ReviewContainer img={L2} text={"Grow Your Business"}/>
            <ReviewContainer img={L3} text={" Quick & Easy"}/>
          
        </div>
    </div>
  )
}

export default Review