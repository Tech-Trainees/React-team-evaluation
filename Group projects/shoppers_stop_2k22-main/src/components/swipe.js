
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/styles/frag.css";
import SlideContent from "./slidecontent";

export default class Swipe extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 4,
      swipeToSlide: 2,
      afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      },
      responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 3,
            centerPadding: "20px",
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            centerPadding: "10px",
            slidesToScroll: 2,
        
          }
        },
        {
            breakpoint: 400,
            settings: {
              slidesToShow: 1,
              centerPadding: "10px",
              slidesToScroll: 1,
          
            }
          },
        
      ]
    
    };
    return (
      <div>
        <Slider {...settings} className="slide" >
            <div ><SlideContent/> </div>
            <div ><SlideContent/> </div>
            <div ><SlideContent/> </div>
            <div ><SlideContent/> </div>
            <div ><SlideContent/> </div>
            <div ><SlideContent/> </div>
            <div ><SlideContent/> </div>
            <div ><SlideContent/> </div>




        </Slider>
        </div>
    )}
}