import React from 'react'
import {useState} from 'react'
// import ConditionalComponent from './conditionalComponent';
function TermsOfUse() {
    const [isActive, setIsActive] = useState(false)

    const options = ['Terms of Use','Privacy','Cookie Policy'];
       
    return (
      <div className=''>
      <div className='cursor-pointer' onClick={(e) => setIsActive(!isActive)}>
        <div className='container flex flex-row  justify-between mx-auto w-3/4 '>
                              
                              <h1 className='cursor-pointer'>TERMS OF USE</h1>  
                              <p  className='cursor-pointer'>+</p>
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

export default TermsOfUse