import React from 'react'
import Slider from "react-slick";
 import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import '../assets/styles/allproductsslick.css'
import BestSellers from '../assets/images/cream.jpg'
import Newarrival from '../assets/images/lipstick.png'
import Fragrances from '../assets/images/perfumes.png'
import Makeup from '../assets/images/makeupkit.png'
import Skin from '../assets/images/creamtubes.png'
import Hair from '../assets/images/lotions.png'
import Mascara from '../assets/images/mascarakit.png'


export default function AllproductsSlick() {
       
          var settings = {
            dots: false,
            className: "productSlickDiv",
            infinite: true,
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 4,
            initialSlide: 3,
            autoplay:true,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: false
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };
          // let slides = [
          //         {
          //           image: BestSellers,
          //           btnName: "Best Sellers",
          //         },
          //         {
          //           image: Newarrival,
          //           btnName: "New Arrivals",
          //         },
          //         {
          //           image: Fragrances,
          //           btnName: "Fragrances",
          //         },
          //         {
          //           image: Makeup,
          //           btnName: "Makeup",
          //         },
          //         {
          //           image: Skin,
          //           btnName: "Skin",
          //         },
          //         {
          //           image: Hair,
          //           btnName: "Hair",
          //         }
          // ]
          let slides = [
            {
              image: BestSellers,
              btnName: 'Best Sellers',
              imgId:1,
            },
            {
              image: Newarrival,
              btnName: "New Arrivals",
              imgId:2,
            },
            {
              image: Fragrances,
              btnName: "Fragrances",
              imgId:3
            },
            {
              image: Makeup,
              btnName: "Makeup",
              imgId:4,
            },
            {
              image: Skin,
              btnName: "Skin",
              imgId:5,
            },
            {
              image: Hair,
              btnName: "Hair",
              imgId:6,
            },
            {
              image: Mascara,
              btnName: "Luxury",
              imgId:7,
            }
    ]
      return (
        <div className='productsSlick'>
            <Slider {...settings}>
              {slides.map((data) => (
                  <div key={data.imgId} >
                    <div className='prod-pics'>
                      <img src={data.image} alt='product images' className='prod-pics'/>
                    </div>
                      
                      <button
                        className={`all-products-btnclr all-products-btnclr${data.imgId}`}
                      > 
                      {/* <span className='all-products-btnfont'> */}
                        {data.btnName}
                        {/* </span> */}
                      </button>
                  
                  </div>
              ))}
               {/* style={{width:'100%'}} */}
            </Slider>
        </div>
      );
    }
