import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';


// components


export default function CardVideosDM({ color, title, user, category, latest, playlist }) {

  const settings = {
    dots: false,
    centerMode: false,
    navigation: false,
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: true,
    fade: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: false,
        },
      },
    ],
  };


  // alert(category);
  // alert(process.env.channel);
  const [playlists, setPlaylist] = useState(null);
  const [isloading, setisloading] = useState(false);
  
  let url = 'https://api.dailymotion.com/playlist/' + category + '/videos?fields=owner%2Cthumbnail_180_url%2Cid%2Cthumbnail_240_url%2Cthumbnail_360_url%2Ctitle%2Cid%2Cviews_total%2Cduration%2Cowner.screenname%2Cdescription&limit=9';
  
  useEffect(() => {
    // const count = 0;

    if (playlists == null) {
      // alert(props.id);

      fetch(url).then((resp) => {

        resp.json().then((result) => {
          setPlaylist(result);
          setisloading(true);
          console.log(result)


        })


      })
    }

  })



  return (
    <>
       {/* Code block starts */}
       <div className="lg:my-6 md:my-6 sm:my-6 container px-1 py-2 mx-auto flex md:flex-row items-start md:items-center justify-between">
                <div>
                <h4 className="text-2xl heading mobilefont font-bold leading-tight text-gray-800 text-white uppercase">{title}</h4>                    
                </div>
                <div className="md:mt-0">
                   
                    <a href={"playlist/" + playlist}>
                    <button className="transition focus:outline-none duration-150  font-semibold	 ease-in-out hover:bg-yellow bg-indigo-700 rounded bg-yellow px-3 py-2 text-sm text-white2">See More</button>
                    </a>
                 
                    
                </div>
                {/* Code block ends */}
            </div>

     <div>
        <Slider {...settings}>

          {playlists ? playlists.list.map((item, i) => (
            <Link href={{
              pathname: "/video/v1/" + item.id,
            }}
            // state={{ titles: "item.title" }}

            // as={`video?id=${item.id}`}
            >
              <div className="Extra cursor-pointer">
                <img
                  alt="..."
                  src={item.thumbnail_240_url}
                  className="w-full align-middle rounded-t-lg"
                />

                <h4 className="text-xl font-bold text-white truncate">
                  {item.title}
                </h4>
                {/* <p className="text-md font-light mt-2 text-white">
                    Putting together a page has never been easier than matching
                    
                  </p> */}

              </div>
            </Link>
          )) : null}

        </Slider>
      </div>


    </>
  );
}
