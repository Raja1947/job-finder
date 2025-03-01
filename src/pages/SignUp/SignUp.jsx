import React from 'react'
import imageUrl from '../../assets/chair.jpg'

const SignUp = () => {
  return (
    <div className='h-[82vh] flex flex-col items-center justify-center '>
      <img src={imageUrl} width={400} height={200}/>
      <button className='px-12 py-3 mt-[2rem] bg-purple-700 hover:bg-purple-900 transition-all duration-300 rounded-lg text-white'>Sign Up Now</button>
    </div>
  )
}

export default SignUp
