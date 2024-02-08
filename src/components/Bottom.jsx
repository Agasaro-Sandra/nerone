import React from 'react'

const Bottom = () => {
  return (
    <div className='flex flex-col items-center h-full w-full mb-10'>
        <h1>Follow @nerone on Instagram</h1>
        <p className="text-gray-500 text-xs">Follow us <span>@nerone</span></p>
        <div className='grid grid-cols-3 gap-5 w-10/12 items-center'>
          <div className='bg-van-dyke h-8/10 min-w-full'>
            <img src="https://i.pinimg.com/236x/c8/a6/1e/c8a61eba873d877e54fbe5ea303c5934.jpg" alt="wooden-comb" className="w-full h-full"/>
          </div>
          <div className='bg-van-dyke h-8/10 min-w-full'>
            <img src="https://i.pinimg.com/236x/5f/f6/8f/5ff68f5ec9944f8a1073f3730107784a.jpg" alt="syrup" className="w-full h-full"/>
          </div>
          <div className='bg-van-dyke h-8/10 min-w-full'>
            <img src="https://i.pinimg.com/236x/12/eb/d2/12ebd279a1701023f7005fe79d9cc5ac.jpg" alt="sculp-oil" className="w-full h-full"/>
          </div>
        </div>
        <div className="w-full h-full mt-12 flex flex-col items-center justify-center">
          <h1 className='text-6xl font-bold text-van-dyke mb-10'>Nerone</h1>
          <div className="w-7/12 flex justify-evenly">
            <input type="email" name="subscribe" placeholder="Enter Your Email" className="bg-linen border border-gray h-12 pl-3 w-8/12"/>
            <button type="submit" className="bg-van-dyke text-white text-center border border-gray h-12 p-auto w-3/12 xmd:text-xs">Submit</button>
          </div>
        </div>
        
    </div>
  )
}

export default Bottom