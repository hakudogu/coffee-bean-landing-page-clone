import React from 'react'
import {useState} from 'react'

export default function Footerdropdown() {
  const [isActive, setIsActive] = useState(false)

  const options = ['Coffee','Tea','Ice Blended ®',
  'Kitchen by The Coffee Bean & Tea Leaf®','Kitchen by The Coffee Bean & Tea Leaf®'
  ,'26th St. Bistro by The Coffee Bean & Tea Leaf®','Downloadable Menu'];
      
  return (
    <div className=''>
    <div className='' onClick={(e) => setIsActive(!isActive)}>
      <div className='container pt-32 flex flex-row  justify-between mx-auto w-3/4 '>
                            
                            <h1>MENU</h1>  
                            <p>+</p>
                      </div>  
      </div>
      {isActive && (
          <div className='bg-transparent mt-6'>
              {options.map((option) => (
                  <div
                  onClick={(e)=> {
                      setIsActive(false)
                  }} className='container mx-auto text-left justify-start mb-4 font-bold w-3/4 text-sm text-slate-600'>
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
