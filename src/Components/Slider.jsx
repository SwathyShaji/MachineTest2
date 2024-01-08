// Import necessary dependencies
import React, { useState } from "react";
import Swiper from "react-id-swiper";
import "swiper/swiper-bundle.css";
import { SwiperSlide } from "swiper/react";
import "../Components/slider.css"; // Import any custom styles if needed

// Import images for the slides
import slide1 from "../images/slider1.jpg";
import slide2 from "../images/slider2.jpg";
import slide3 from "../images/slider3.jpg";

// Define an array of slides with content and labels
const slides = [
  {
    image: slide1,
    content:
      "Peace begins with a smile. Because of your smile, you make life more beautiful. A smile is happiness you’ll find right under your nose",
    label: "Slide 1",
  },
  {
    image: slide2,
    content:
      "Peace begins with a smile. Because of your smile, you make life more beautiful. A smile is happiness you’ll find right under your nose",
    label: "Slide 2",
  },
  {
    image: slide3,
    content:
      "Peace begins with a smile. Because of your smile, you make life more beautiful. A smile is happiness you’ll find right under your nose",
    label: "Slide 3",
  },
];

// Configuration options for Swiper
const HeroSliderConfigs = {
  containerClass: "swiper-container hero-slider",
  parallax: true,
  centeredSlides: true,
  speed: 500,
  spaceBetween: 0,
  effect: "slide",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
};

// Main Slider component
function Slider() {
  // State to manage the parallaxSwiper instance
  const [parallaxSwiper, setParallaxSwiper] = useState(null);

  // Calculate parallax amount and opacity
  const parallaxAmount = parallaxSwiper ? parallaxSwiper.width * 0.95 : 0;
  const parallaxOpacity = 0.5;

  return (
    // Swiper component with configuration and slides
    <Swiper {...HeroSliderConfigs} getSwiper={setParallaxSwiper}>
      {slides.map((slide, index) => (
        // SwiperSlide for each slide
        <SwiperSlide key={index} className="hero-slide">
          {/* Slide Image with parallax effect */}
          <div
            className="slide-image"
            data-swiper-parallax={parallaxAmount}
            data-swiper-parallax-opacity={parallaxOpacity}
          >
            <img
              src={slide.image}
              alt={`image${index + 1}`}
              style={{ height: "130%", width: "100%" }}
            />
          </div>
          
          {/* Slide Content */}
          <div className="col-md-6 offset-md-3 my-auto text-center text-white content">
            <p
              className="mb-5 small"
              style={{
                fontSize: "1.5em",
                backgroundColor: "#d3d3d3",
                padding: "10px",
              }}
            >
              {/* Slide Label and Content */}
              {slide.label}
              <br />
              {slide.content}
            </p>
          </div>
        </SwiperSlide>
      ))}
      
      {/* Swiper Pagination Dots */}
      <div className="swiper-pagination"></div>
    </Swiper>
  );
}

// Export the Slider component
export default Slider;

