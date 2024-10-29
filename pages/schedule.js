/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import MainSlider from "../components/Sliders/MainSlider";
import CardVideos from "../components/Cards/CardVideos";
import PlaylistSlider from "../components/Sliders/PlaylistSlider";
import Dailymotion from 'react-dailymotion';
import Head from "next/head";
import CardVideosGrid from "../components/Cards/CardVideosGrid";
import Mrec from "../components/Ads/Mrec";
import Leaderboard from "../components/Ads/Leaderboard";
import renderHTML from 'react-render-html';
import HTMLRenderer from 'react-html-renderer';

export default function Schedule() {
  const [data, setData] = useState(null);
  const [isloading, setisloading] = useState(false);


  useEffect(() => {
    // const count = 0;

    if (data == null) {
      // alert(props.id);

      fetch(process.env.scheduleApi).then((resp) => {

        resp.json().then((result) => {
          setData(result);
          setisloading(true);
          console.log(result)


        })


      })
    }

  })


  return (
    <>


      <section class="container mt-20 pt-1 pb-60">

      <center class="pb-10">
            <Leaderboard />
          </center>

        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#Monday" type="button" role="tab" aria-controls="home" aria-selected="true">Monday</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#Tuesday" type="button" role="tab" aria-controls="profile" aria-selected="false">Tuesday</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#Wednesday" type="button" role="tab" aria-controls="contact" aria-selected="false">Wednesday</button>
          </li>
         
          <li class="nav-item" role="presentation">
            <button class="nav-link " id="home-tab" data-bs-toggle="tab" data-bs-target="#Thursday" type="button" role="tab" aria-controls="home" aria-selected="true">Thursday</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link " id="home-tab" data-bs-toggle="tab" data-bs-target="#Friday" type="button" role="tab" aria-controls="home" aria-selected="true">Friday</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link " id="home-tab" data-bs-toggle="tab" data-bs-target="#Saturday" type="button" role="tab" aria-controls="home" aria-selected="true">Saturday</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link " id="home-tab" data-bs-toggle="tab" data-bs-target="#Sunday" type="button" role="tab" aria-controls="home" aria-selected="true">Sunday</button>
          </li>
          {/* <!-- Add remaining days here --> */}
        </ul>
        <div class="tab-content" id="myTabContent">
         
          {/* <!-- Add remaining tab panes for other days --> */}

          <div class="tab-pane fade show active" id="Monday" role="tabpanel" aria-labelledby="contact-tab">
          <div class="flex flex-wrap">
            {data ? data.Schedule.filter(drama => drama.dramaDays.monday).map((drama, index) => (
              <div class="w-full lg:w-3/12 sm:w-1/12 px-2 py-2">
                <center>
                <Link href={{
                    pathname: "/playlist/" + drama.dramaPlaylist
                  }}
                  >
                  <div class="Extra cursor-pointer">

                    <img src={drama.dramaPoster} alt={drama.dramaName} />
                    <div class="scheduleContent">
                    {/* <h2>{drama.dramaName}</h2>
                    <p>{drama.dramaDesc}</p> */}
                    <p class="timings">{drama.dramaTime}</p>
                    </div>
                  </div>
                  </Link>
                </center>
              </div>
            )) : null}
          </div>
          </div>

          <div class="tab-pane fade" id="Tuesday" role="tabpanel" aria-labelledby="contact-tab">
          <div class="flex flex-wrap">
            {data ? data.Schedule.filter(drama => drama.dramaDays.tuesday).map((drama, index) => (
              <div class="w-full lg:w-3/12 sm:w-1/12 px-2 py-2">
              <center>
              <Link href={{
                  pathname: "/playlist/" + drama.dramaPlaylist
                }}
                >
                <div class="Extra cursor-pointer">

                  <img src={drama.dramaPoster} alt={drama.dramaName} />
                  <div class="scheduleContent">
                  {/* <h2>{drama.dramaName}</h2>
                  <p>{drama.dramaDesc}</p> */}
                  <p class="timings">{drama.dramaTime}</p>
                  </div>
                </div>
                </Link>
              </center>
            </div>
            )) : null}
          </div>
          </div>

          <div class="tab-pane fade" id="Wednesday" role="tabpanel" aria-labelledby="contact-tab">
          <div class="flex flex-wrap">
            {data ? data.Schedule.filter(drama => drama.dramaDays.wednesday).map((drama, index) => (
              <div class="w-full lg:w-3/12 sm:w-1/12 px-2 py-2">
              <center>
              <Link href={{
                  pathname: "/playlist/" + drama.dramaPlaylist
                }}
                >
                <div class="Extra cursor-pointer">

                  <img src={drama.dramaPoster} alt={drama.dramaName} />
                  <div class="scheduleContent">
                  {/* <h2>{drama.dramaName}</h2>
                  <p>{drama.dramaDesc}</p> */}
                  <p class="timings">{drama.dramaTime}</p>
                  </div>
                </div>
                </Link>
              </center>
            </div>
            )) : null}
          </div>
          </div>

          <div class="tab-pane fade" id="Thursday" role="tabpanel" aria-labelledby="contact-tab">
          <div class="flex flex-wrap">
            {data ? data.Schedule.filter(drama => drama.dramaDays.thursday).map((drama, index) => (
              <div class="w-full lg:w-3/12 sm:w-1/12 px-2 py-2">
              <center>
              <Link href={{
                  pathname: "/playlist/" + drama.dramaPlaylist
                }}
                >
                <div class="Extra cursor-pointer">

                  <img src={drama.dramaPoster} alt={drama.dramaName} />
                  <div class="scheduleContent">
                  {/* <h2>{drama.dramaName}</h2>
                  <p>{drama.dramaDesc}</p> */}
                  <p class="timings">{drama.dramaTime}</p>
                  </div>
                </div>
                </Link>
              </center>
            </div>
            )) : null}
          </div>
          </div>

          <div class="tab-pane fade" id="Friday" role="tabpanel" aria-labelledby="contact-tab">
          <div class="flex flex-wrap">
            {data ? data.Schedule.filter(drama => drama.dramaDays.friday).map((drama, index) => (
              <div class="w-full lg:w-3/12 sm:w-1/12 px-2 py-2">
              <center>
              <Link href={{
                  pathname: "/playlist/" + drama.dramaPlaylist
                }}
                >
                <div class="Extra cursor-pointer">

                  <img src={drama.dramaPoster} alt={drama.dramaName} />
                  <div class="scheduleContent">
                  {/* <h2>{drama.dramaName}</h2>
                  <p>{drama.dramaDesc}</p> */}
                  <p class="timings">{drama.dramaTime}</p>
                  </div>
                </div>
                </Link>
              </center>
            </div>
            )) : null}
          </div>
          </div>

          <div class="tab-pane fade" id="Sunday" role="tabpanel" aria-labelledby="contact-tab">
          <div class="flex flex-wrap">
            {data ? data.Schedule.filter(drama => drama.dramaDays.sunday).map((drama, index) => (
              <div class="w-full lg:w-3/12 sm:w-1/12 px-2 py-2">
              <center>
              <Link href={{
                  pathname: "/playlist/" + drama.dramaPlaylist
                }}
                >
                <div class="Extra cursor-pointer">

                  <img src={drama.dramaPoster} alt={drama.dramaName} />
                  <div class="scheduleContent">
                  {/* <h2>{drama.dramaName}</h2>
                  <p>{drama.dramaDesc}</p> */}
                  <p class="timings">{drama.dramaTime}</p>
                  </div>
                </div>
                </Link>
              </center>
            </div>
            )) : null}
          </div>
          </div>

          <div class="tab-pane fade" id="Saturday" role="tabpanel" aria-labelledby="contact-tab">
          <div class="flex flex-wrap">
          {data ? data.Schedule.filter(drama => drama.dramaDays.saturday).map((drama, index) => (
              <div class="w-full lg:w-3/12 sm:w-1/12 px-2 py-2">
              <center>
              <Link href={{
                  pathname: "/playlist/" + drama.dramaPlaylist
                }}
                >
                <div class="Extra cursor-pointer">

                  <img src={drama.dramaPoster} alt={drama.dramaName} />
                  <div class="scheduleContent">
                  {/* <h2>{drama.dramaName}</h2>
                  <p>{drama.dramaDesc}</p> */}
                  <p class="timings">{drama.dramaTime}</p>
                  </div>
                </div>
                </Link>
              </center>
            </div>
            )) : null}
          </div>

        </div>
        </div>

        
      </section>


    </>
  );
}
