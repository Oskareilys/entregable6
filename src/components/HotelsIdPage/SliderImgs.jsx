import React, { useState } from 'react'
import '../styles/SliderImg.css'


const SliderImgs = ( { hotel } ) => {

    const [imgSelected, setImgSelected] = useState(0)

        const objStyle ={
            width: `${hotel?.images.length *100}%`,
            transform: `translateX(calc(-${imgSelected} / ${hotel?.images.length} * 100%))`

        }

    const handlePrev = () => {
        if(imgSelected !== 0){
            setImgSelected(imgSelected - 1)
        }

    }

    const handleNext = () => {
        if(imgSelected !== hotel?.images.length - 1){
            setImgSelected(imgSelected +1)
        }
    }

  return (
    <div className='slider__container'>
    <div className="slider">
    <button onClick={handlePrev} className='slider__btn slider__prev' >
        &lt; 
    </button>
    <div style= {objStyle} className="slider__movable">
      {
        hotel?.images.map(imgInfo => (
          <div key={imgInfo.url} className="slider__img-container">
            <img className='slider__img'  src={imgInfo.url}  alt="" />
          </div>
        ))
      }
    </div>
    <button onClick={handleNext} className='slider__btn slider__next' >
        &gt; 
    </button>
  </div>
  <div className='slider__footer'>
        {
          hotel?.images.map((imgInfo,index)=> (
            <div key={imgInfo.url} className="slider__footer__container">
              <img onClick= { () => setImgSelected(index)} className={`slider__footer__img ${index ===imgSelected && "slider__footer__active"}`}  src={imgInfo.url} alt="" />
            </div>
          ))
      }
</div>
  </div>
    
  )
}

export default SliderImgs