import React, { Component } from 'react'
// import './hero.css'
import  {Carousel}  from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

export class Hero extends Component {
  render() {

    return (
      <div className='translate-y-24 bg-slate-200'>

      <Carousel autoPlay className=' overflow-hidden'>
      <div>
          <img className='object-contain'
          src="https://www.coffeebean.com.ph/wp-content/uploads/2022/07/optimized_FA-TCBTL-JUL2022-Cold-Brew-Campaign_Website-Banner.jpg" />
      </div>
      <div>
          <img src="https://www.coffeebean.com.ph/wp-content/uploads/2021/03/FA-CBTL-MAR2021-Capsule-Recycling_Website-Banner-Desktop.jpg" />
          
      </div>
      <div>
          <img src="https://www.coffeebean.com.ph/wp-content/uploads/2022/04/FA-TCBTL-APR2022-19th-Anniversary-Tumbler-Campaign-Website-Banner-Desktop.jpg" />
          
      </div>
      <div>
          <img src="https://www.coffeebean.com.ph/wp-content/uploads/2022/06/REV_FA_TCBTL-JUN2022-Purple-Tumbler-Campaign-Website-Banner-Desktop.jpg" />
          
      </div>
      <div>
          <img 
          className='object-contain'
          src="https://www.coffeebean.com.ph/wp-content/uploads/2021/11/FA-TCBTL-NOV2021-Ristretto-Campaign-Website-Banner-Desktop.jpg" />
          
      </div>
    
  </Carousel>
          </div>

    )
  }
}
export default Hero