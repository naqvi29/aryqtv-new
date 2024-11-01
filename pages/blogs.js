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
  const [isLoading, setIsLoading] = useState(false);
  const sectionTitle = title;
  const [page, setPage] = useState(1);
  const [prevPage, setPrevPage] = useState(0);
  // console.log(category);

  useEffect(() => {
    // const count = 0;

    if (blogs == null) {
      // alert(props.id);
      

      fetch('https://blogs.arydigital.tv/api/jsonify.php?post_type=post&cat=drama-reviews&tax=category&count=12&page=0').then((resp) => {
        resp.json().then((result) => {
          setBlogs(result.data);

          setIsLoading(true);
          // alert(result[0].yoast_head_json.og_image[0].url);


        })


      })
    }

    

  })


  function next() {
    window.scrollTo({ 
      top: 0,  
      behavior: 'smooth'
    }); 
    setPage(page + 1);
    // alert(page);
    fetch('https://blogs.arydigital.tv/api/jsonify.php?post_type=post&cat=drama-reviews&tax=category&count=12&page='+ page ).then((resp) => {

      resp.json().then((results) => {
        console.log(results)
        setBlogs(results.data);
        setPrevPage(page - 1);

      })


    })




  }

  function prev() {
    window.scrollTo({ 
      top: 0,  
      behavior: 'smooth'
    }); 
    
    setPrevPage(prevPage - 1);
    // alert(prevPage);

    fetch('https://blogs.arydigital.tv/api/jsonify.php?post_type=post&cat=drama-reviews&tax=category&count=12&page='+ prevPage).then((resp) => {

      resp.json().then((results) => {
        console.log(results)
        setBlogs(results.data);
        setPage(prevPage + 1);
      })


    })




  }


  // useEffect(() => {
  //   const fetchData = async () => {
  //     setIsLoading(true);
  //     const cachedBlog = localStorage.getItem('cachedBlog');

  //     if (cachedBlog) {
  //       // Use cached data
  //       setBlogs(JSON.parse(cachedBlog));
  //       setIsLoading(false);
  //     } else {
  //       await fetchDataFromAPI();
  //     }
  //   };

  //   const fetchDataFromAPI = async () => {
  //     try {
  //       const response = await fetch(`https://blogs.arydigital.tv/api/jsonify.php?count=100&post_type=post&cat=drama-reviews&tax=category`);
  //       const result = await response.json();
  //       setBlogs(result.data);
  //       setIsLoading(false);
  //       // Cache the data
  //       localStorage.setItem('cachedBlog', JSON.stringify(result.data));
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchData();

  //   // Set interval to refresh data from API every minute
  //   const interval = setInterval(fetchDataFromAPI, 1800000); // 1 minute

  //   // Clear interval on component unmount
  //   return () => clearInterval(interval);
  // }, [category]); // Fetch data when category changes

  return (
    <>
    <section className="container px-5 py-20 mx-auto paddingMobile ">
     
    <center>
            <Leaderboard />
          </center>
          {/* Blogs */}

          <div class="flex justify-center items-center">

       
  
  <div class="2xl:mx-auto 2xl:container w-96 sm:w-auto mobileBlog ">

    <div class="lg:flex items-stretch ">
      <div class="lg:w-2/2 mt-10">
        <div class="items-center flex flex-wrap">

        {blogs ? blogs.specific_post.map((item, i) =>
        <div class="w-full lg:w-3/12 sm:w-1/12 px-2 py-2 relative mobilePadding">
          <div>

          <a href={"/" + item.slugs}> <img src={item.image ? item.image.replace("-150x150", "") : item.thumbnail } class="w-full blogImage" alt={item.title} /> </a>
          
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
       
        <div className="text-center mt-5 mb-5">
            {page > 1 ?
              <button onClick={() => prev()}
                className="bg-yellow text-white2 active:bg-blueGray-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                type="button"> Previous </button>
              : null}
            <span>  </span>
            {blogs && blogs.specific_post.length > 11 ?

              <button onClick={() => next()}
                className="bg-yellow text-white2 active:bg-blueGray-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                type="button"> Next </button>


              : null}
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
