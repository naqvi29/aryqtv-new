import React, {useState, useEffect } from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';


export default function MainSlider() {

  const settings = {
    dots: false,
    className: "center prevNext",
    centerMode: false,
    navigation: false,
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    fade: true,
    borderRadius: 10,

  };


  const [playlists, setPlaylist] = useState(null);
	const [isloading, setisloading] = useState(false);

  useEffect(() => {
    // const count = 0;
  
    if(playlists == null){ 
      // alert(props.ids);
     fetch(process.env.mainslider).then((resp) => {
      
    resp.json().then((result) => {
      
      setPlaylist(result.slider.sliderData);
      setisloading(true);
      console.log(result)
      
   
  })
  
  
  }) } 
  
  })
  
  return (
    <>
      <div>
        <Slider {...settings}>

        {playlists ? playlists.map((item, i) => (
          <div>
            {/* <Link href={item.link}> */}
              <img className="slider-image" src={"https://node.aryzap.com/public/slider/" + item.imagePath} />
                {/* <div class="contentSlider">
                <p>{"https://node.aryzap.com/public/slider/" + item.imagePath}</p>
                <h3>{item.days}</h3>
                </div> */}
            {/* </Link> */}
          </div>

          )): null}	
          
        </Slider>
      </div>
    </>
  );
}

