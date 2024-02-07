import React from 'react'

const Secret = () => {
  return (
    <div className="w-full flex justify-center my-20 xmd:flex-col xmd:items-center xmd:justify-around">
        <img className="w-5/12  border-35 border-linen" src="https://i.pinimg.com/originals/29/e8/57/29e85767cecb9526b0284d78ed6424e5.jpg" alt="black-cosmetics-one"/>
        <div className='w-5/12 bg-van-dyke flex flex-col justify-center items-center'>
            <h1 className='capitalize text-6xl  text-white px-20 mb-10 leading-8' >the secret to great skin</h1>
            <p className='text-white px-20 leading-7'>Thousands of people have benefited from our services. But let's be real -  there's no magic bullet, just science. That's why we do what we do.</p>
        </div>
    </div>
  )
}

export default Secret