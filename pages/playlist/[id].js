import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';
import CardVideosGridDM from '../../components/Cards/CardVideosGridDM';
import CardVideosGridYT from '../../components/Cards/CardVideosGridYT';
import Leaderboard from '../../components/Ads/Leaderboard';

const PlaylistId = ({ data1, id }) => {
  const [playlistDetails, setPlaylistDetails] = useState(data1);
  const DMplaylistID = data1.seriesDM;
  const YTplaylistID = data1.seriesYT;
  const [isLoading, setIsLoading] = useState(false);

  // Find and Replace function
  const findAndReplace = (str, find, replace) => {
    return str.replace(find, replace);
  };

  return (
    <>
      {playlistDetails && (
        <div className="mt-72 bg-black mx-auto mb-minus relative">
          {/* Background Image Div */}
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundColor: "hsl(0deg 0% 0%)",
              backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0.82), rgba(0, 0, 0, 0.1)), url(https://node.aryzap.com/public/${playlistDetails.imageCoverDesktop})`,
              backgroundAttachment: "fixed",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              boxShadow: "2px -62px 89px 10px rgba(0,0,0,1) inset",
              transform: "scaleX(-1)", // This will flip the background image horizontally
              zIndex: 0
            }}
          ></div>

          {/* Content Div */}
          <section>
            <div className="py-10 lg:text-left">
              <div className="mx-auto">
                <div className="grid items-center gap-2 lg:grid-cols-2">
                  <div className="lg:mt-0 px-6 py-3 md:px-12 contentDiv">
                    {playlistDetails.logo === "logo/null" ? (
                      <h1 className="mb-6 text-white text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
                        {playlistDetails.title}
                      </h1>
                    ) : (
                      <img
                        src={`https://node.aryzap.com/public/${playlistDetails.logo}`}
                        alt={`${playlistDetails.title} Logo`}
                        width="50%"
                      />
                    )}
                    <p className="text-lg text-white">
                      {playlistDetails.description}
                    </p>

                    {playlistDetails.categoryId[0].title !== "DRAMA ARCHIVE" && playlistDetails.time ? 
                    <div className="mt-6 px-0">
                    <button
                      className="text-white active:bg-blueGray-600 text-xs font-bold uppercase rounded outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                      type="button"
                    >
                      <i className="fas fa-clock"></i> {`${playlistDetails.time} - `} <i className="fas fa-calendar"></i> {` ${playlistDetails.day}`}
                    </button>
                  </div>
                    : 
                      null
                    }
                    
                  </div>
                  <div className="mb-12 lg:mb-0 px-6 py-3">
                    <div className="single-video">
                      <iframe
                        className="dailysingle custom-iframe"
                        src={findAndReplace(playlistDetails.ost.split('&list=')[0], "https://www.youtube.com/watch?v=", "https://www.youtube.com/embed/")}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={`${playlistDetails.title} Video`}
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      <section className="text-gray-600 body-font bg-black mb-60 mt-20 pt-1">
        <div className="container-fluid px-5 mx-auto">
          <center>
            <Leaderboard />
          </center>

          {process.env.platform == 'youtube' ? 
           <CardVideosGridYT category={YTplaylistID} platform="YT" />
              :
           <CardVideosGridDM category={DMplaylistID} platform="DM" /> 
          }
        </div>
      </section>

     
    </>
  );
};

PlaylistId.propTypes = {
  data: PropTypes.object.isRequired,
  data1: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
};

// This gets called on every request
export async function getServerSideProps(context) {
  const { id } = context.query;

  try {
    // Fetch series details from your API
    const res1 = await fetch(`https://node.aryzap.com/api/series/${id}`);
    const data1 = await res1.json();

    // Check if the response from series API is successful
    if (!res1.ok || !data1) {
      console.error("Failed to fetch data from series API");
      return {
        notFound: true, // This will return a 404 page instead of redirecting
      };
    }

    // Pass data to the page via props
    return { props: { id, data1 } };
  } catch (error) {
    // Log any errors for debugging purposes
    console.error("Error fetching data:", error);

    return {
      notFound: true,
    };
  }
}

export default PlaylistId;
