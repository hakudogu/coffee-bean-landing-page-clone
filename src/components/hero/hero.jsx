import React, { useState} from 'react'
import img1 from './slide1.jpg'
import img2 from './slide2.jpg'
import img3 from './slide3.jpg'
import img4 from './slide4.jpg'
import img5 from './slide5.jpg'
import img6 from './slide6.jpg'
import img7 from './slide7.jpg'
import { Icon } from '@iconify/react';
import { useEffect } from 'react';

function Hero() {
  const [currImg, setCurrImg] = useState(0);
  const images = [{ 'content': <img className='mySlides delay-100  flex object-cover w-full md:h-full'src={img1} />
                  ,'index': 0}
              ,{'content':  <img  className='mySlides flex object-cover min-h-full md:min-h-max ' src={img2} />
                ,'index': 1},
                {'content':<img className='mySlides object-cover  w-full' src={img3} />
                 ,'index': 2},
                {'content':<img className='mySlides object-cover w-full' src={img4} />
                 ,'index': 3},
                {'content':<img className='mySlides object-cover w-full' src={img5} />
                ,'index': 4},
                {'content':<img className='mySlides object-cover w-full' src={img6} />
                ,'index':5},
                {'content':<img className='mySlides object-cover w-full' src={img7} />
                ,'index':6}
             ]
          
   const left =()=>{
    currImg===0 ? 
    setCurrImg(images.length-1):
    setCurrImg(currImg-1)
  }              
      const right = () => {
        currImg===images.length -1 ? 
        setCurrImg(0):
        setCurrImg(currImg+1)
      }
      const goToFirst =()=>{
        setCurrImg(currImg-currImg)
      }
      const goToSecond=()=>{
        setCurrImg(currImg-currImg + images[1].index)
      }
      const goToThird=()=>{
        setCurrImg(currImg-currImg +images[2].index)
      }
      const goToFourth=()=>{
        setCurrImg(currImg-currImg +images[3].index)
      }
      const goToFifth=()=>{
        setCurrImg(currImg-currImg +images[4].index)
      }
      const goToSixth=()=>{
        setCurrImg(currImg-currImg +images[5].index)
      }
      const goToSeventh=()=>{
        setCurrImg(currImg-currImg +images[6].index)
      }

      const autoScroll= true;
      let slideInterval;
      function slideShow (){ 
        slideInterval= setInterval(()=> 
        right()
        ,5000)
      }
      useEffect(()=>{
        if(autoScroll){
          slideShow()
        }
        return () => clearInterval(slideInterval)
      }, [currImg])
     
      
     
    //  const handleChange =()=>{
    //   let id= null
    //    let pos=0
    //   id= setInterval(frame, 5000)
    //         {clearInterval(id)}
    //   const frame = ()=>{
    //     pos++
    //      images[currImg].content.style.right= -pos + 'px'
    //    }
    //    }
      
       
  
  
   return (    

    <div className= " pt-20 "  >
      <div  className="h-auto w-full justify-center flex relative">
        {images[currImg].content} 
      <div className='h-10 w-full absolute md:gap-3 gap-2 flex items-center justify-center -bottom-3 md:bottom-0'>
        <div onClick={()=>goToFirst()} className='dots bg-slate-600 w-1 h-1 sm:w-2 sm:h-2 rounded hover:bg-white active:bg-purple-800 '>          
        </div>
        <div onClick={()=>goToSecond()}className='dots bg-slate-600 w-1 h-1 sm:w-2 sm:h-2 rounded hover:bg-white active:bg-purple-800  '>          
        </div>
        <div onClick={()=>goToThird()}className='dots bg-slate-600 w-1 h-1 sm:w-2 sm:h-2 rounded hover:bg-white active:bg-purple-800 '>          
        </div>
        <div onClick={()=>goToFourth()}className='dots bg-slate-600 w-1 h-1 sm:w-2 sm:h-2 rounded hover:bg-white active:bg-purple-800 '>          
        </div>
        <div onClick={()=>goToFifth()}className='dots bg-slate-600 w-1 h-1 sm:w-2 sm:h-2 rounded hover:bg-white active:bg-purple-800 '>          
        </div>
        <div onClick={()=>goToSixth()}className='dots bg-slate-600 w-1 h-1 hover:bg-white active:bg-purple-800 sm:w-2 sm:h-2 rounded'>          
        </div>
        <div onClick={()=>goToSeventh()}className='dots bg-slate-600 hover:bg-white active:bg-purple-800 w-1 h-1 sm:w-2 sm:h-2 rounded'>          
        </div>
      </div>
        <div
          className="left  h-full text-center flex items-center absolute left-0 z-10 bg-white bg-opacity-20"
          onClick={() => {
            left();
          }}
        >
          <Icon icon="eva:arrow-ios-back-fill" className='text-sm' style={{ fontSize: 30 }} />
        </div>
        <div className="center">
         
        </div>
        <div
          className="right mr-0 absolute  items-center h-full flex right-0 z-10 bg-white bg-opacity-20 "
          onClick={() => {
            right();
          }}
        >
          <Icon className='blur-none'icon="eva:arrow-ios-forward-fill" style={{ fontSize: 30}} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
  