import React, { useState, useEffect } from 'react';
import Link from "next/link";
import MainSlider from "../components/Sliders/MainSlider";
import CardVideos from "../components/Cards/CardVideos";
import PlaylistSlider from "../components/Sliders/PlaylistSlider";
import Catfish from "../components/Ads/Catfish";
import Mrec from "../components/Ads/Mrec";
import Leaderboard from "../components/Ads/Leaderboard";

export default function Blogs({category, title}) {

  const [blogs, setBlogs] = useState(null);
  const [isloading, setisloading] = useState(false);
  const sectionTitle = title;
  // console.log(category);

  useEffect(() => {
    // const count = 0;

    if (blogs == null) {
      // alert(props.id);

      fetch('https://blogs.arydigital.tv/api/jsonify.php?count=10&post_type=post&cat='+category+'&tax=category').then((resp) => {

        resp.json().then((result) => {
          setBlogs(result.data);
          setisloading(true);
          console.log("Blogs Data " + result.data.specific_post[0].slugs)
          // console.log("SLUGGGG " + result.specific_post[0].slugs);


        })


      })
    }

  })

  return (
    <>
    <section className="">
     
          {/* Blogs */}
          <div class="flex justify-center items-center">
  <div class="2xl:mx-auto 2xl:container lg:px-20 lg:py-10 md:py-10 md:px-6 py-9 px-4 w-96 sm:w-auto">
    <div role="main" class="flex flex-col items-center justify-center">
      <h1 class="text-4xl font-semibold leading-9 text-center text-white">{sectionTitle}</h1>
      {/* <p class="text-base leading-normal text-center text-gray-600 dark:text-white mt-4 lg:w-1/2 md:w-10/12 w-11/12">If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough</p> */}
    </div>
    <div class="lg:flex items-stretch md:mt-12 mt-8">
      <div class="lg:w-1/2">
        <div class="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">

        {blogs ? blogs.specific_post.slice(0,2).map((item, i) =>
          <div class="sm:w-1/2 relative mobilePadding">
          <div>

          <a href={"/" + item.slugs}> <img src={item.image.replace("-150x150", "")} class="w-full blogImage" alt={item.title} /> </a>
            {/* <p class="p-1 text-xs font-medium leading-3 absolute top-0 right-0 blogContentDate ">{item.date}</p> */}
            <div class="bottom-0 left-0 p-6 blogContent">
            <a href={"/" + item.slugs}> <h2 class="text-xl font-semibold 5 text-white">{item.title}</h2> </a>
              {/* <p class="text-base leading-4 text-white mt-2">Dive into minimalism</p> */}
              <a href={"/" + item.slugs} class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                <p class="pr-2 text-sm font-medium leading-none">Read More</p>
                <svg class="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </a>
            </div>
          </div>
          
        </div>
          ) : null}
          
         
        </div>
        <div class="relative mobilePadding ">
        {blogs ? blogs.specific_post.slice(2,3).map((item, i) =>
          <>
          <a href={"/" + item.slugs}>
          <div>
            {/* <p class="md:p-10 p-3 text-xs font-medium leading-3 absolute top-0 right-0 blogContentDate">{item.date}</p> */}
            <div class="absolute bottom-0 left-0 md:p-10 p-3 background">
              <h2 class="text-xl font-semibold 5 text-white blogTitle">{item.title}</h2>
              {/* <p class="text-base leading-4 text-white mt-2">Dive into minimalism</p> */}
              <a href={"/" + item.slugs} class="bloglink focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                <p class="pr-2 text-sm font-medium leading-none ">Read More</p>
                <svg class="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </a>
            </div>
        
          </div>
          <img src={item.image.replace("-150x150", "")} alt={item.title} class="w-full mt-8 md:mt-6 hidden sm:block" />
          <img class="w-full mt-4 sm:hidden" src={item.image.replace("-150x150", "")} alt={item.title} />
          </a>
          </>
          ) : null}
          </div>
      
      </div>
      <div class="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 lg:flex flex-col justify-between">
        <div class="relative mobilePadding">
        {blogs ? blogs.specific_post.slice(3,4).map((item, i) =>   
          <>
          <a href={"/" + item.slugs}>
          <div>
            {/* <p class="md:p-10 p-3 text-xs font-medium leading-3 text-white absolute top-0 right-0 blogContentDate">{item.date}</p> */}
            <div class="absolute bottom-0 left-0 md:p-10 p-3 background">
              <h2 class="text-xl font-semibold 5 text-white blogTitle">{item.title}</h2>
              {/* <p class="text-base leading-4 text-white mt-2">Dive into minimalism</p> */}
              <a href={"/" + item.slugs} class="bloglink focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                <p class="pr-2 text-sm font-medium leading-none ">Read More</p>
                <svg class="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </a>
            </div>
          </div>
          
          <img src={item.image.replace("-150x150", "")} alt={item.title} class="w-full sm:block hidden shadow-inner" />
          <img class="w-full sm:hidden shadow-inner" src={item.image.replace("-150x150", "")} alt={item.title} />
          </a>
          </>
          ) : null}
        </div>
        <div class="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
          
        {blogs ? blogs.specific_post.slice(4,6).map((item, i) =>

<a href={"/" + item.slugs}>
          <div class="relative w-full mobilePadding">
            <div>
            <img src={item.image.replace("-150x150", "")} class="w-full blogImage" alt={item.title} />
              {/* <p class="p-1 text-xs font-medium leading-3 text-white absolute blogContentDate top-0 right-0">{item.date}</p> */}
              <div class="blogContent bottom-0 left-0 p-6">
                <h2 class="text-xl font-semibold 5 text-white">{item.title}</h2>
                {/* <p class="text-base leading-4 text-white mt-2">Dive into minimalism</p> */}
                <a href={"/" + item.slugs} class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                  <p class="pr-2 text-sm font-medium leading-none">Read More</p>
                  <svg class="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
            
          </div>
          </a>

            ) : null}
          
        </div>
      </div>
    </div>
  </div>
</div>
{/* Blogs */}
          
      </section>





    </>
  );
}
