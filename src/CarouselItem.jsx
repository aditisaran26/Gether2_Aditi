import React from 'react';
import './CarouselItem.css';

function CarouselItem({item , width}) {
  return (
    <div className='carouselitem' style={{width: width}}>
        <div>
            <img className='carouselitem__image' 
            src={item.icon.default}
            />
            <div className='carouselitem__desc'>{item.desc}</div>
        </div>
      
    </div>
  )
}

export default CarouselItem;
