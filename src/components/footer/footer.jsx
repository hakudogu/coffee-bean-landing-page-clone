import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <div className='w-full h-full bg-gray-100 '>
        <div className='lg:hidden flex flex-col font-bold text-slate-700'>
                      <div className='container pt-32 flex flex-row  justify-between mx-auto w-3/4 '>
                            <h1 className='uppercase'>Menu</h1>
                            <p>+</p>
                      </div>        
                      <div className='container mb-6 mx-auto w-3/4'>
                      <hr className='w-full'/>
                      </div>
                      <div className='container flex flex-row  justify-between mx-auto w-3/4 '>
                            <h1 className='uppercase'>Our Story</h1>
                            <p>+</p>
                      </div>        
                      <div className='container mb-6 mx-auto w-3/4'>
                      <hr className='w-full'/>
                      </div>
                      <div className='container  flex flex-row  justify-between mx-auto w-3/4 '>
                            <h1>CUSTOMER CARE</h1>
                            <p>+</p>
                      </div>        
                      <div className='container mb-6 mx-auto w-3/4'>
                      <hr className='w-full'/>
                      </div>
                      <div className='container flex flex-row  justify-between mx-auto w-3/4 '>
                            <h1>TERMS OF USE</h1>
                            <p>+</p>
                      </div>        
                      <div className='container mb-6 mx-auto w-3/4'>
                      <hr className='w-full'/>
                      </div>
                    <div className='pt-6 container mx-auto w-3/4 flex justify-start'>
                      <label htmlFor='' className='mr-1 font-light text-sm text-black'>
                        JOIN OUR NEWSLETTER 
                        </label>
                      <input type='text' placeholder=' Email Address'
                       className='border border-slate-500 text-slate-100 font-light text-sm' >
                      </input><br/>
                    </div>

                      <h1 className='pt-6 container mx-auto w-3/4 flex justify-start text-slate-400'>
                        THE COFFEE BEAN<p className='text-xs align-bottom underline'>&</p> TEA LEAF
                      </h1>
                      <p className='pb-6 container mx-auto w-3/4 flex text-xs text-left justify-start text-slate-400'>
                        © 2019 International Coffee & Tea, LLC “The Coffee Bean & Tea Leaf” and logo are registered trademark of International Coffee & Tea, LLC.
                        </p>
        </div>
        {/* footer large version */}
                  <div className='container hidden lg:grid grid-cols-6 gap-4 mx-auto h-full justify-center '>
                    <div className='flex flex-col text-left '>
                      <div className='w-30 mt-20'>
                        <a href='#' className='no-underline'>
                      <h1 className='mb-6 font-bold text-slate-700'>MENU</h1>
                        </a>
                        <a href='#' className='no-underline'>
                      <p className='mb-6 text-sm'>Coffee</p>
                        </a>
                        <a href='#' className='no-underline'>
                      <p className='mb-6 text-sm'>Tea</p>
                        </a>
                        <a href='#' className='no-underline'>
                      <p className='mb-6 text-sm'>Ice Blended® </p>
                        </a>
                        <a href='#' className='no-underline'>
                      <p className='mb-6 text-sm'>Kitchen by The Coffee Bean & Tea Leaf®</p>
                        </a>
                        <a href='#' className='no-underline'>
                      <p className='mb-6 text-sm'>26th St. Bistro by The Coffee Bean & Tea Leaf®</p>
                        </a>
                        <a href='#' className='no-underline'>
                      <p className='mb-6 text-sm'>Downloadable Menu</p>
                        </a>
                      </div>
{/* second column */}
                      
                    </div>
                    <div className='w-30 mt-20 flex flex-col text-left'>
                        <a href='#' className='no-underline'>
                      <h1 className='mb-6 font-bold text-slate-700'>OUR STORY</h1>
                        </a>
                        <a href='#' className='no-underline'>
                      <p className='mb-6 text-sm'>Our Heritage</p>
                        </a>
                        <a href='#' className='no-underline'>
                      <p className='mb-6 text-sm'>Careers</p>
                        </a>
                        <a href='#' className='no-underline'>
                      <p className='mb-6 text-sm'>Caring Cup</p>
                        </a>
                        <a href='#' className='no-underline'>
                      <p className='mb-6 text-sm'>Events</p>
                        </a>
                        <a href='#' className='no-underline'>
                      <p className='mb-6 text-sm'>Stories</p>
                        </a>
                        <a href='#' className='no-underline'>
                      <p className='mb-6 text-sm'>Swirl Rewards</p>
                        </a>
                      </div>
                      <div className='w-30 mt-20 flex flex-col text-left'>
                        <a href='#' className='no-underline'>
                      <h1 className='mb-6 font-bold text-slate-700'>CUSTOMER CARE</h1>
                        </a>
                        <a href='#' className='no-underline'>
                      <p className='mb-6 text-sm'>Contact Us</p>
                        </a>
                        <a href='#' className='no-underline'>
                      <p className='mb-6 text-sm'>Store Locator</p>
                        </a>
                        <a href='#' className='no-underline'>
                      <p className='mb-6 text-sm'>FAQs</p>
                        </a>
                        </div>
                      <div className='w-30 mt-20 flex flex-col text-left'>
                        <a href='#' className='no-underline'>
                      <h1 className='mb-6 font-bold text-slate-700'>TERMS OF USE</h1>
                        </a>
                        <a href='#' className='no-underline'>
                      <p className='mb-6 text-sm'>Terms of Use</p>
                        </a>
                        <a href='#' className='no-underline'>
                      <p className='mb-6 text-sm'>Privacy Policy</p>
                        </a>
                        <a href='#' className='no-underline'>
                      <p className='mb-6 text-sm'>Cookie Policy</p>
                        </a>
                        </div>
                        {/* subscribe to newsletter */}
                    <div className='col-span-2 mt-20'>
                        <div className='container mx-auto w-3/4 flex flex-col items-start'>
                      <label htmlFor='' className='mr-1 font-light text-sm text-black'>
                        JOIN OUR NEWSLETTER 
                        </label>
                      <input type='text' placeholder=' Email Address'
                       className='border border-slate-500 text-slate-100 font-light text-sm' >
                      </input><br/>
                    </div>
                        </div>
                       </div>

                       <h1 className='hidden lg:flex container mx-auto justify-start text-slate-400'>
                        THE COFFEE BEAN<p className='text-xs align-bottom underline'>&</p> TEA LEAF
                      </h1>
                      <p className='hidden lg:flex text-xs container mx-auto text-slate-400'>
                        © 2019 International Coffee & Tea, LLC “The Coffee Bean & Tea Leaf” and logo are registered trademark of International Coffee & Tea, LLC.
                        </p>               
                          </div>
    )
  }
}

export default Footer