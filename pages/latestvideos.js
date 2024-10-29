import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Leaderboard from '../components/Ads/Leaderboard'; // Make sure this is the correct path

export default function CardVideos({ color, title, user, category, latest, playlist }) {
  const [playlists, setPlaylists] = useState([]); // Initialize as an empty array
  const [isLoading, setIsLoading] = useState(true); // Initialize loading state
  const [error, setError] = useState(null); // Initialize error state

  let url = '';

  if (process.env.platform === 'youtube') {
    url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=${process.env.latestYoutubeID}&key=${process.env.youtubeApiKey}&maxResults=20`;
  } else {
    url = `https://api.dailymotion.com/user/${process.env.channel}/videos?fields=owner%2Cthumbnail_180_url%2Cid%2Cthumbnail_240_url%2Cthumbnail_360_url%2Ctitle%2Cid%2Cviews_total%2Cduration%2Cowner.screenname%2Cdescription&limit=20`;
  }

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setPlaylists(result); // Set fetched playlists
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false); // Set loading to false regardless of success or failure
      }
    };

    fetchPlaylists(); // Fetch playlists once on mount
  }, [url]); // Only depend on url

  return (
    <section className="text-gray-600 body-font bg-black">
      <div className="container px-5 py-24 mx-auto mobileVideosPadding">
        <center>
          <Leaderboard />
        </center>
        <h2 className="text-white text-center mb-4">{title}</h2>
        <div>
          {isLoading ? (
            <p className="text-white text-center">Loading...</p> // Display loading message
          ) : error ? (
            <p className="text-red-500 text-center">{error}</p> // Display error message if any
          ) : (
            <div className="flex flex-wrap">
              {process.env.platform === 'youtube' ? (
                playlists.items?.map((item) => (
                  item.snippet.title !== 'Private video' && (
                    <div className="w-full lg:w-3/12 sm:w-1/12 px-2 py-2 mobileVideos" key={item.contentDetails.videoId}>
                      <Link href={`/video/v2/${item.contentDetails.videoId}`}>
                        <div className="Extra">
                          <img alt={item.snippet.title} src={item.snippet.thumbnails.medium.url} className="w-full align-middle rounded-t-lg" />
                          <h4 className="text-xl font-bold text-white line-clamp-2">{item.snippet.title}</h4>
                        </div>
                      </Link>
                    </div>
                  )
                ))
              ) : (
                playlists.list?.map((item) => (
                  <div className="w-full lg:w-3/12 sm:w-1/12 px-2 py-2 mobileVideos" key={item.id}>
                    <Link href={`/video/v1/${item.id}`}>
                      <div className="Extra">
                        <img alt={item.title} src={item.thumbnail_240_url} className="w-full align-middle rounded-t-lg" />
                        <h4 className="text-xl font-bold text-white line-clamp-2">{item.title}</h4>
                      </div>
                    </Link>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

CardVideos.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string.isRequired,
  user: PropTypes.string,
  category: PropTypes.string,
  latest: PropTypes.bool,
  playlist: PropTypes.array,
};
