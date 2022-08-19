import React, { Component, useState } from 'react'
import {Icon} from '@iconify/react'

const Dropdown = () => {
            const [isActive, setIsActive] = useState(false)
        const options = ['MENU','CARING CUP' ,'UPDATES','STORE LOCATOR'
    , 'SHOP', 'SWIRL REWARDS','ABOUT US', 'CONTACT US']
        return (
       
       <div className=''>
      <div className='' onClick={(e) => setIsActive(!isActive)}>
        <Icon className='lg:hidden ' width='48' icon="prime:bars" color="#532d6d" />
        </div>
        {isActive && (
            <div className='bg-transparent'>
                {options.map((option) => (
                    <div
                    onClick={(e)=> {
                        setIsActive(false)
                    }} className='text-left ml-3 mb-4 font-bold w-40 text-sm text-slate-600'>
                        <a className='mb-1'href='#'>{option}</a>
                        <hr className='w-full'></hr>
                    </div>
                ))}
               </div> 
        )
        }
       </div> 
    )
  }


export default Dropdown