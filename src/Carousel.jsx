import React from 'react';
import CarouselItem from './CarouselItem';
import { useState } from 'react';
import './Carousel.css';

function Carousel() {

const [activeIndex , setActiveIndex]=useState(0);





    const items = [
        {
          title: "Baseball",
          desc:
            "Baseball is a bat-and-ball sport played between two teams of nine players each, taking turns batting and fielding. The game occurs over the course of several plays, with each play generally beginning when a player on the fielding team, called the pitcher.",
          icon: require("file:///C:/Users/aditi/Downloads/undraw_home_run_acyh.svg"),
        },
        {
          title: "Walking",
          desc:
            "Walking (also known as ambulation) is one of the main gaits of terrestrial locomotion among legged animals. Walking is typically slower than running and other gaits. ",
          icon: require("file:///C:/Users/aditi/Downloads/undraw_relaxing_walk_re_7fko.svg"),
        },
        {
          title: "Weights",
          desc:
            "Weightlifting generally refers to activities in which people lift weights, often in the form of dumbbells or barbells. People lift various kinds of weights for a variety of different reasons.",
          icon: require("file:///C:/Users/aditi/Downloads/undraw_indoor_bike_pwa4.svg"),
        },
      ];

      const updateIndex = (newIndex) =>{
        if(newIndex < 0)
        {
            newIndex=0;
        }else if(newIndex >= items.length){
            newIndex = items.length-1;
        }
      setActiveIndex(newIndex);  
    };


  return (
    <div className='carousel'>

        <div 
            className='carousel__container'
            style={{ transform: `translate(-${activeIndex * 100}%)`}}
        >
            {items.map((item) => {
          return <CarouselItem item={item} width={"100%"} />;
        })}
        </div>


        <div className='carousel__buttons'>

            <button 
                 className='button_arrow'
                 onClick={() =>{updateIndex(activeIndex - 1);}}
                 >
                <span className='material-symbols-outlined'>arrow_back_ios</span>
            </button>

            <div className='carousel__button_dots'>
                {items.map((item ,index)=>{
                    return(
                   <button 
                        className='button_dots'
                        onClick={()=>{updateIndex(index);
                        }}>
                        
                        <span 
                        className={`material-symbols-outlined ${
                            index === activeIndex
                              ? "indicator-symbol-active"
                              : "indicator-symbol"
                          }`}>
                        radio_button_checked
                        </span>
                   </button>
                    );
                })}  
            </div>

            <button 
                className='button_arrow'
                onClick={() => {
                    updateIndex(activeIndex + 1);
                  }}
            >
            <span className='material-symbols-outlined'>arrow_forward_ios</span>
            </button>
        </div>
      
    </div>
  );
}

export default Carousel;
