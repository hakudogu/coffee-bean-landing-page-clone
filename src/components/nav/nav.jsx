import Dropdown from './dropdown.jsx';
import { Icon } from '@iconify/react';
import React, { Component } from 'react'

export class Nav extends Component {

  render() {
      
    return (

    <div className='bg-white justify-end h-fit -mb-20 flex flex-col relative z-20'>
      {/*find a store section start*/}
      {/* <FontAwesomeIcon icon="fa-thin fa-location-dot" className='h-96 z-20'  /> */}
      <div style={{backgroundColor: '#532d6d'}} className='py-2 px-2 w-full flex flex-row'>
      <Icon icon="ci:location" color="white" className='text-xl -translate-y-0'/>
        <p className='flex justify-start items-center font-semibold px-1 text-white text-xs'>Find a store</p>
      </div>
      {/*find a store section end*/}

      <div className='py-1 flex justify-start lg:py-5 lg:justify-end'>

          {/* navbar start */}
          <Dropdown/>
          <div className='w-96 h-4 flex '>

          <img src='https://www.coffeebean.com.ph/wp-content/themes/mondays-made-better-theme/dist/images/brand/logo-mobile_37382b4c.svg' 
          alt='logo-mobile'
          className='lg:hidden justify-start absolute left-12 top-12 '
          />
          <img src='https://www.coffeebean.com.ph/wp-content/themes/mondays-made-better-theme/dist/images/brand/logo-desktop_59e7c25c.svg' 
          alt='logo'
          className='hidden lg:flex absolute left-2 mt-1  '/>
          </div>
          <div className='hidden md:mw-2/5 lg:flex md:justify-end lg:mr-4 gap-4 links'>
          <a href='#' className=' mr-3 hidden md:flex  text-sm font-bold text-slate-500'>CARING CUP</a>
          <a href='#' className=' mr-3 hidden md:flex text-sm font-bold text-slate-500'>MENU</a>          
          <a href='#' className=' mr-3 hidden md:flex  text-sm font-bold text-slate-500'>UPDATES</a>
          <a href='#' className=' mr-3 hidden md:flex  text-sm font-bold text-slate-500'>STORE LOCATOR</a>
          <a href='#' className=' mr-3 hidden md:flex  text-sm font-bold text-slate-500'>SHOP</a>          
          <a href='#' className=' mr-3 hidden md:flex  text-sm font-bold text-slate-500'>SWIRL REWARDS</a>
          <a href='#' className=' mr-3 hidden md:flex  text-sm font-bold text-slate-500'>AWARDS</a>
          <a href='#' className=' mr-3 hidden md:flex  text-sm font-bold text-slate-500'>CONTACT US</a>
          </div>
        </div>
          </div>
    )
  }
}

export default Nav