import React, { useState, useEffect } from 'react';
import Link from "next/link";
import MainSlider from "../components/Sliders/MainSlider";
import CardVideos from "../components/Cards/CardVideos";
import CardVideosDM from "../components/Cards/CardVideosDM";
import CardVideosYT from "../components/Cards/CardVideosYT";
import PlaylistSlider from "../components/Sliders/PlaylistSlider";
import Catfish from "../components/Ads/Catfish";
import Mrec from "../components/Ads/Mrec";
import MrecHome from "../components/Ads/MrecHome";
import Leaderboard from "../components/Ads/Leaderboard";
import Blogs from './blog';
import LeaderboardHome from '../components/Ads/LeaderboardHome';
import ScheduleHome from './ScheduleHome';

export default function Index() {

  const [playlists, setPlaylist] = useState(null);
  const [isloading, setisloading] = useState(false);


  useEffect(() => {
    // const count = 0;

    if (playlists == null) {
      // alert(props.id);

      fetch(process.env.singleseries).then((resp) => {

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
      <section className="homePageMobile">
        {/* <section className="header relative pt-16 items-center flex bg-black"> */}


        <div className="container-fluid mx-auto items-center flex flex-wrap mt-10">
          <div className="w-full sm:w-12/12 md:w-12/12 lg:w-12/12 xl:w-12/12 px-4 mt-2 mb-3">
            <center>
              <LeaderboardHome />
            </center>
          </div>



          {/* <div className="w-full sm:w-12/12 md:w-3/12 lg:w-3/12 xl:w-3/12 px-4 mt-5">
      <center>
              <MrecHome />
            </center>
      </div> */}
        </div>

        {/* <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full sm:w-9/12 md:w-9/12 lg:w-9/12 xl:w-12/12 px-4 mt-5">
            <center>
              <MainSlider />
            </center>
          </div>



          <div className="w-full sm:w-12/12 md:w-3/12 lg:w-3/12 xl:w-3/12 px-4 mt-5">
            <center>
              <MrecHome />
            </center>
          </div>
        </div> */}


      </section>

      {/* <div className='mainSlider'>
      <center>
      <MainSlider />
      </center>
      </div> */}

      {/* <section class="onAir">

        <div class="container-fluid bg-gradient-golden">

          <div class="row align-items-center">
            <div class="col-lg-3 col-12">
              <div class="text-white p-xl-0">

                <h2 class="h1 text-white scheduleHeading">TODAY <span>ON AIR </span></h2>

              </div>
            </div>
            <div class="col-lg-9 col-12 d-lg-block">
              <ScheduleHome />
            </div>

          </div>
        </div>
      </section> */}


      <section className="pb-40 relative bg-black">

        <div className="container mx-auto">
          <div className="w-full md:w-12/12 lg:w-12/12 xl:w-12/12 px-4 mt-10">


          </div>
          <CardVideos title="LATEST VIDEOS" category="latest"/>

          <PlaylistSlider title="ON AIR" id="0" category="QTV ON AIR" />


          <PlaylistSlider title="FEATURED" id="0" category="QTV FEATURED" slides="3" />

          {/* Blogs */}

          {/* <Blogs category="blogs" title="STORIES"/> */}

          {/* Blogs */}

          {/* Blogs */}

          {/* <Blogs category="drama-reviews" title="EDITORIAL"  /> */}

          {/* Blogs */}
          {playlists ? playlists.series.slice(0, 4).map((item, i) =>
              process.env.platform === 'youtube' ? (
                <CardVideosYT key={i} title={item.title} category={item.seriesYT} playlist={item._id} />
              ) : (
                <CardVideosDM key={i} title={item.title} category={item.seriesDM} playlist={item._id} />
              )
            ) : null}
          {/* <CardVideos title={process.env.playlist2_title} category={process.env.playlist2} />
          <CardVideos title={process.env.playlist3_title} category={process.env.playlist3} /> */}


          {/* <PlaylistSlider title="POPULAR" id="2" category="DIGITAL: Popular" /> */}

          {/* Feature Section Start*/}
          {/* <div className="container mx-auto items-center flex flex-wrap pt-20">
            <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12">
              <div className="sm:pt-0">
                <h2 className="font-bold text-6xl text-white">
                  JEETO PAKISTAN
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  Jeeto Pakistan is a Pakistani game show, hosted by actor Fahad Mustafa on ARY Digital. ... It has been called the "biggest game show" of Pakistan. Jeeto Pakistan's participants are selected randomly from a studio audience, who require passes to attend the show.
                </p>
                <div className="mt-12">
                  <span className="get-started text-white font-bold px-2 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-yellow active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150 cursor-pointer" >
                    8:00 PM - Sunday
                  </span>

                  <Link href="playlist/x6e1bn">

                    <span className="github-star ml-1 text-white font-bold px-2 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-181818 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg cursor-pointer">
                      View Playlist
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full md:w-4/12 lg:w-6/12 xl:w-6/12">
              <div className="pt-32 sm:pt-0">
                <img

                  src="./img/jeeto-Pak-new.jpeg"
                  alt="..."
                />
              </div>
            </div>
          </div> */}


          {/* Feature Section End*/}

          <PlaylistSlider title="ARCHIVE" id="1" category="QTV ARCHIVE"/>
        </div>

        {/* <Catfish /> */}
        {/* <Mrec/> */}
      </section>





    </>
  );
}
