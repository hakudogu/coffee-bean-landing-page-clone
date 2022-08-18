import React, { Component } from 'react'

export class OurStory extends Component {
  render() {
    return (
      <div className=' w-full h-80 md:h-full justify-center items-center relative flex flex-col'>
        <img className='object-cover h-96 md:w-full' src='https://www.coffeebean.com.ph/wp-content/uploads/2018/07/our_story_bg_1.jpg' alt='hot black coffee'/>
        <div className='absolute text-yellow-50 w-4/5 mx-auto items-center md:text-xl md:w-3/5'>
          <h1 className='text-4xl md:text-5xl font-extrabold my-4 '>
            OUR STORY
            </h1>
            <p className=' font-semibold -mb-3 text-xs text-yellow-50 md:text-base '>
              A lot has changed since '63, but our philosophy never has. We're passionate 
              about delivering the best handcrafted
               products and take pride 
               in the journey from seed to cup.
            </p>
            <br/>
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

export default OurStory