// YOUTUBE

/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import MainSlider from "../../../components/Sliders/MainSlider";
import CardVideos from "../../../components/Cards/CardVideos";
import PlaylistSlider from "../../../components/Sliders/PlaylistSlider";
import Dailymotion from 'react-dailymotion';
import Head from "next/head";
import CardVideosGridYT from "../../../components/Cards/CardVideosGridYT";
import Mrec from "../../../components/Ads/Mrec";
import Leaderboard from "../../../components/Ads/Leaderboard";

const SingleVideoid = (props) => {


  const [video, setVideo] = useState(props.data.items[0]);
   const [related, setRelated] = useState(props.data1.items[0].id.playlistId);
  // console.log(JSON.stringify(video));
  // const router = useRouter();
  // const { channel } = router.query;


  return (
    <>

      {video ?
        <>
          <Head>
            <title>{video.snippet.title}</title>
            <meta name="description" content={video.snippet.description.substring(0, 155)} />
            <meta name="title" content={video.snippet.title} />
            <meta property="og:title" content={video.snippet.title} />
            <meta property="og:description" content={video.snippet.description.substring(0, 155)} />
            <meta property="og:image" content={video.snippet.thumbnails.maxres} />

          </Head>

          <section className="header relative pt-16 items-center flex bg-black">

            <div className="container mx-auto items-center flex flex-wrap">
              <div className="w-full md:w-12/12 lg:w-12/12 xl:w-12/12 px-4 mt-3">

                <center>
                  <Leaderboard />
                </center>
              </div>
              <div className="w-full sm:w-12/12 md:w-9/12 lg:w-9/12 xl:w-12/12 px-4 mt-5">

               

                  <div className="single-video">

                    <iframe className="dailysingle"
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.snippet.title}
                      frameborder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-shar; fullscreen" 
                      referrerpolicy="strict-origin-when-cross-origin">
                    </iframe>
               
                 </div>
                  


            
                <h3 className="text-xl font-bold text-white truncate">
                  {video.snippet.title}
                </h3>
              </div>

              <div className="w-full sm:w-12/12 md:w-3/12 lg:w-3/12 xl:w-12/12 px-4 mt-5">


                <center>
                  <Mrec />
                </center>

              </div>

            </div>

          </section>

          <section className="pt-40 pb-40 relative bg-black">

            <div className="container mx-auto">
            <h4 className="text-2xl heading mobilefont font-bold leading-tight text-gray-800 text-white mt-40">RELATED VIDEOS</h4>

              {/* <h2 className="text-2xl heading text-white font-semibold leading-normal">
                OTHER EPISODES
              </h2> */}
              <CardVideosGridYT category={related} />
            </div>


          </section>
        </>


        : null}

    </>
  );
}



// This gets called on every request
export async function getServerSideProps(context) {
  console.log(context.query);

    const { id, channel } = context.query;
  console.log(channel);
  // alert(channel);
  // Fetch data from external API
 
  const res = await fetch(`https://www.googleapis.com/youtube/v3/videos?id=${id}&key=${process.env.youtubeApiKey}&part=snippet`)
  const data = await res.json()
  const videoTitle = data.items[0].snippet.title;
  console.log(videoTitle)
  // const res1 = await fetch('https://api.dailymotion.com/video/' + id + '/playlists?owner=x1bx0w0')
  const res1 = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=id%2Csnippet&maxResults=1&q=${videoTitle}&type=playlist&key=${process.env.youtubeApiKey}`)
  // https://youtube.googleapis.com/youtube/v3/search?part=id%2Csnippet&maxResults=1&q=Baby%20Baji%20Ki%20Bahuwain%20Episode%201%20|%2023%20Sep%202024%20(English%20Subtitles)%20|%20ARY%20Digital&type=playlist&key=AIzaSyDJraNMuVIoIVQWVnrejH6-OzoEEYNtFls
  const data1 = await res1.json()

  // Pass data to the page via props
  return { props: { data, data1, videoTitle } }
}

export default SingleVideoid;