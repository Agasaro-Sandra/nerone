import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css" 
import "slick-carousel/slick/slick-theme.css"

const Curated = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3
  };
  const adjustments = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className='w-5/6 flex flex-col justify-center my-10 m-auto'>
      <h1 className='capitalize text-4xl text-center'>curated with premium products for self care</h1>
      <div className='mt-20 xmd:hidden'>
        <Slider {...settings}>
          {data.map( (d) => (
            <div className="w-[300px] p-4 border-gray-200 border">
                <div className='w-full mb-3 '>
                  <img className="w-full" src={d.img} />
                </div>
                <h2 className="capitalize font-bold text-sm mb-3">{d.product}</h2>
                <div className='w-full flex justify-between mb-3'>
                  <p className='w-1/2 pt-3 text-xs text-center border-gray-300 border-t border-r inline'>{d.type}</p>
                  <span className=" w-1/2 pt-3 font-bold text-xs border-gray-300 border-t text-center">{d.price}</span>
                </div>              
                <button className="font-bold text-xs border-slate-300 border-2 w-full py-3">Shop now</button>
            </div>
          ))}
        </Slider>
      </div>
      <div className='mt-20 hidden xmd:block'>
        <Slider {...adjustments}>
          {data.map( (d) => (
            <div className="w-[300px] p-4 border-gray-200 border">
                <div className='w-full mb-3 '>
                  <img className="w-full" src={d.img} />
                </div>
                <h2 className="capitalize font-bold text-sm mb-3">{d.product}</h2>
                <div className='w-full flex justify-between mb-3'>
                  <p className='w-1/2 pt-3 text-xs text-center border-gray-300 border-t border-r inline'>{d.type}</p>
                  <span className=" w-1/2 pt-3 font-bold text-xs border-gray-300 border-t text-center">{d.price}</span>
                </div>              
                <button className="font-bold text-xs border-slate-300 border-2 w-full py-3">Shop now</button>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

const data = [
  {
    img: "https://i.pinimg.com/236x/e4/9c/df/e49cdf96c0bf9f8c739c95f95cbfb07f.jpg",
    product: "Anti Acne Face Wash",
    type: "CLEANSER",
    price: "$60.00 USD" 
 
  },
  {
    img: "https://i.pinimg.com/236x/e4/9c/df/e49cdf96c0bf9f8c739c95f95cbfb07f.jpg",
    product: "Anti Acne Face Wash",
    type: "CLEANSER",
    price: "$60.00 USD" 
 
  },
  {
    img: "https://i.pinimg.com/236x/e4/9c/df/e49cdf96c0bf9f8c739c95f95cbfb07f.jpg",
    product: "Anti Acne Face Wash",
    type: "CLEANSER",
    price: "$60.00 USD" 
 
  },
  {
    img: "https://i.pinimg.com/236x/e4/9c/df/e49cdf96c0bf9f8c739c95f95cbfb07f.jpg",
    product: "Anti Acne Face Wash",
    type: "CLEANSER",
    price: "$60.00 USD" 
 
  },
  {
    img: "https://i.pinimg.com/236x/e4/9c/df/e49cdf96c0bf9f8c739c95f95cbfb07f.jpg",
    product: "Anti Acne Face Wash",
    type: "CLEANSER",
    price: "$60.00 USD" 
 
  },
  {
    img: "https://i.pinimg.com/236x/e4/9c/df/e49cdf96c0bf9f8c739c95f95cbfb07f.jpg",
    product: "Anti Acne Face Wash",
    type: "CLEANSER",
    price: "$60.00 USD" 
 
  },
  {
    img: "https://i.pinimg.com/236x/e4/9c/df/e49cdf96c0bf9f8c739c95f95cbfb07f.jpg",
    product: "Anti Acne Face Wash",
    type: "CLEANSER",
    price: "$60.00 USD" 
 
  },
  {
    img: "https://i.pinimg.com/236x/e4/9c/df/e49cdf96c0bf9f8c739c95f95cbfb07f.jpg",
    product: "Anti Acne Face Wash",
    type: "CLEANSER",
    price: "$60.00 USD" 
 
  }
]

export default Curated