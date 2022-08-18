import React, { Component } from 'react'
import Img1 from './Shop.jpg'
import Img2 from './swirlRewards.jpg'
export class ShopAndSwirl extends Component {
  render() {
    return (
      <div className='w-full md:h-1/2 md:overflow-hidden md:grid md:grid-cols-2'>
        
      <div className='flex flex-col relative items-center justify-center'>
        <img className='object-fill w-full brightness-50  '
            src={Img1} alt='electric kettle'/>
            <div className='absolute'>
              <h1 className='font-bold text-yellow-50 text-4xl mb-8'>SHOP</h1>
              <button className='rounded-sm bg-white p-3 px-4'>
                <p className='font-bold text-purple-500  text-s'>
                SHOP NOW
                </p>
                </button>
            </div>
      </div>
      <div className='flex flex-col relative items-center justify-center'>
        <img className='object-cover h-full'
        src={Img2} alt='reward card'/>
        <div className='absolute'>
              <h1 className='font-bold text-yellow-50 text-4xl mb-8'>SWIRL REWARDS</h1>
              <a className='no-underline'> 
              <button className='bg-white p-3 px-4  rounded-sm'>
                <p className=' font-bold text-purple-700 text-s'>
                  LEARN MORE
                  </p>
                  </button>
                  </a>
            </div>
      </div>
      </div>
    )
  }
}

export default ShopAndSwirl