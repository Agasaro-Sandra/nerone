import React from 'react'

const Suitable = () => {
  return (
    <div className='w-full flex  justify-evenly items-center mb-30 xmd:grid xmd:gap-10 '>
        <div className='grid gap-4 w-1/3 xmd:w-2/3 '>
          <h1 className="capitalize text-6xl">suitable for all skin types</h1>
          <p>What makes us different? We treat <br />you personally - and honestly.</p>
          <button className="bg-bistre text-white text-xs w-1/3 xmd:w-1/2 h-10">Shop skincare</button>
        </div>
        <div className='w-fit flex justify-around items-center'>
          <img className="w-25/54 xmd:w-2/3" src="https://i.pinimg.com/originals/55/d6/ae/55d6ae223977619ee1c3dde12ddf0d0a.jpg" alt="black-girl-one"/> 
        </div>          
    </div>
  )
}

export default Suitable