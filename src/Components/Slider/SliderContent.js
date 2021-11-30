import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './Slider.scss';

export default function SliderContent() {
  const sliderContent = [
    {
      image: '/images/slider1.jpeg',
    },
    {
      image: '/images/slider2.jpeg',
    },
    {
      image: '/images/slider1.jpeg',
    },
    {
      image: '/images/slider2.jpeg',
    },
  ];


  const sliderContentInner = [
    {
      title: 'THE WITCHER',
      description:
      'Geralt of Rivia, a solitary monster hunter, struggles to find his place in a worl where people often prove more wicked that beasts.',
      button: 'PLAY',
      image: '/images/slider1.jpeg',
      trailer: '/images/slidertrailer1.jpeg',
      watch: 'WATCH TRAILER'
    },
    {
      title: 'THE IRISHMAN',
      description:
      'A mob hitman recalls his possible involvement with the slaying of Jimmy Hoffa',
      button: 'PLAY',
      image: '/images/slider2.jpeg',
      trailer: '/images/slidertrailer2.jpeg',
      watch: 'WATCH TRAILER'

    },
    {
      title: 'THE WITCHER',
      description:
      'Geralt of Rivia, a solitary monster hunter, struggles to find his place in a worl where people often prove more wicked that beasts.',
      button: 'PLAY',
      image: '/images/slider1.jpeg',
      trailer: '/images/slidertrailer1.jpeg',
      watch: 'WATCH TRAILER'

    },
    {
      title: 'THE IRISHMAN',
      description:
      'A mob hitman recalls his possible involvement with the slaying of Jimmy Hoffa',
      button: 'PLAY',
      image: '/images/slider2.jpeg',
      trailer: '/images/slidertrailer2.jpeg',
      watch: 'WATCH TRAILER'

    }
  ];
  return (
    <div className="contentSlider">
          <Slider className="slider-wrapper backSlider" autoplay={4000} infinite={true}>
              {sliderContent.map((item, index) => (
            <div
              key={index}
              className="slider-content"
              style={{ background: `url('${item.image}') no-repeat center top`}}
            >
              </div>
            ))}
              
          </Slider>
          <Slider className="slider-wrapper innerSlider" autoplay={4000} infinite={true}>
            {sliderContentInner.map((item, index) => (
              <div
                key={index}
                className="slider-content"
                style={{ background: `url('${item.image}') no-repeat center top`}}
              >
                 <div className="inner">
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <button className="innerPlayButton">{item.button}</button>
                    <div className="trailerCont" style={{ background: `url('${item.trailer}') no-repeat center top`}}>
                      <button className="watchButton">{item.watch}</button>
                    </div>
                  </div>
                </div>
              ))}
          </Slider>
        </div> 
  )
}
