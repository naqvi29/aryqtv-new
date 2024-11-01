import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import PropTypes from "prop-types";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';
import Leaderboard from '../components/Ads/Leaderboard';


// components

const Aboutus = (props) => {

  const [playlists, setPlaylist] = useState(props.data);
  const [isloading, setisloading] = useState(false);



  return (
    <>

    


      <section class="text-gray-600 body-font bg-black">
        <div class="container px-5 py-20 mx-auto">
          <center>
            <Leaderboard />
          </center>
          <div className="flex flex-wrap mt-10">
          <div class="wpb_wrapper text-white">
            <h1>About Us</h1>
             <br/>
            <p className="font-normal"><strong><a href="https://aryqtv.tv">Qtv</a></strong> has a vision of providing the best in terms of religious enlightenment of spirituality and the knowledge about the faith of Islam. We make our viewers subscribe to a simple belief of removing religious misconception, promoting tolerance and harmony of faith. Our efforts are geared towards promoting Islam as a tolerant and enlightened religion in the world, which is not just a religion but a way of life. We believe in highlighting the true essence of Holy Quran, its teaching and the Message of Our Holy prophet (P.B.U.H). Qtv is one the Pakistan’s Islamic channel that offers you the correct content about Islam for its viewers.</p>
            <br></br>

            <p className="font-normal">Qtv was launched in September 2003, becoming a premier Global Islamic Satellite TV Channel. Qtv is the beacon of light, a missing link between Muslims around the world. It delivers Islamic education and information to millions of Muslim viewers. Qtv is now beaming into more than 144 countries. One of Qtv’s important objectives is to eliminate the religious differences that have risen in the Millennium and he working hard to dispel myths about Islam.</p>
            <br></br>


            <p className="font-normal">Qtv brings the most renowned scholars for discussions, debates, exceptional religious guides, highly informative translations and explanation of the Holy Quran and Hadith, the best Hamd/Naat Khwans and live transmissions of major religious happenings of the Muslim world. Qtv has time and again proved its importance as the true deliver of the Islamic message around the globe. Qtv has its official website www.aryqtv.tv where all the shows are recorded with its 24 hours Live transmissions for its viewers around the world to watch Qtv at their convenience.</p>
            {/* <br/>
            <h2>Our Exclusive Content</h2>
            <br/>
            <p className="font-normal">The dramas to reality shows aired of <em>ARY Digital’s</em> channel everything is available on the website. Explore all this and more on our easily accessible site you can also watch the live transmission of <strong>ARY Digital</strong> on our website. Catch full episodes of all the shows you like at your convenience and you can also share it with your friends.</p> */}
            <br/>
            <p className="font-normal">If you have any queries about us check out the <a href="/contact-us/">contact page</a>.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}



export default Aboutus;