import React from 'react'
import Star from "../assets/motionarteffect-img4.png"

const ReviewContainer = ({text,img}) => {
  return (
    <div className='flex gap-2'>
        <img src={img} alt='img'/>
        <div className='flex flex-col justify-center gap-3'>
            <img src={Star}/>
            <p className='text-gray-400'> {text}</p>
        </div>
    </div>
  )
}

export default ReviewContainer