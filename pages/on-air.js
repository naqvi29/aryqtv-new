import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import PropTypes from "prop-types";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';
import Head from 'next/head';
import Leaderboard from '../components/Ads/Leaderboard';


// components

const OnAir = (props) => {

  const [playlists, setPlaylist] = useState(props.data);
  const [isloading, setisloading] = useState(false);



  return (
    <>

      {/* <h2 className="text-2xl mb-5 heading text-white font-semibold leading-normal">
              {title}
          </h2> */}

      <Head>

        <title>ARY Digital On Air</title>

      </Head>
      <section class="text-gray-600 body-font bg-black">
        <div class="container px-5 py-24 mx-auto">
          <center>
            <Leaderboard />
          </center>
          <div className="flex flex-wrap">
          {playlists && playlists.series
        .filter(item => item.status !== "draft")  // Filter out the "draft" items
        .map((item, i) => (
              <div className="w-full lg:w-2/12 sm:w-1/12 px-2 py-2">

                <center>
                  <Link href={{
                    pathname: "/playlist/" + item._id
                  }}
                  // state={{ titles: "item.title" }}

                  // as={`video/${item.id}/${item.title}`}

                  >
                    <div className="Extra cursor-pointer">
                      <img src={"https://node.aryzap.com/public/" + item.imagePoster} />

                    </div>
                  </Link>
                </center>
              </div>
            ) )}
          </div>
        </div>
      </section>







    </>
  );
}


// This gets called on every request
export async function getServerSideProps(context) {
  // console.log(context.query);
  const { id } = context.query;
  // Fetch data from external API
  const res = await fetch(process.env.onair)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}


export default OnAir;