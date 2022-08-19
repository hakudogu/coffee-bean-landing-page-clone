import React from 'react'
import {useState} from 'react'
function TermsOfUse() {
    const [isActive, setIsActive] = useState(false)

    const options = ['Terms of Us','Privacy','Cookie Policy'];
        
    return (
      <div className=''>
      <div className='' onClick={(e) => setIsActive(!isActive)}>
        <div className='container flex flex-row  justify-between mx-auto w-3/4 '>
                              
                              <h1>CUSTOMER CARE</h1>  
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

export default TermsOfUse