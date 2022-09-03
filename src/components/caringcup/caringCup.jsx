import React, { Component } from 'react'
import caringcup from './caringcup.jpg'
export class CaringCup extends Component {
  render() {
    return (
      <div className='w-full h-full flex flex-col relative items-center justify-center'>
          
        <img className='w-full  flex object-cover h-full '
        src={caringcup}/>
        <div className='absolute w-3/4'>
        <h1 className='font-bold text-4xl text-yellow-50 mb-8 uppercase'>
          caring cup
        </h1>
        <p className=' font-bold mb-3 text-xs text-yellow-50 md:text-base'>
        Our social responsibility efforts all over the world, 
       our Caring Cup program, blend commitment and community.
       We respond to the needs of local communities served by our stores
       and the needs of communities where our products are grown. 
        </p>
        <button className=' bg-white p-2 rounded-sm text-purple-700 text-xs'>
              <p className=' font-bold'>
              LEARN MORE
              </p>
              </button>        
        </div>
   </div>
     
     )
     
  }
}

export default CaringCup