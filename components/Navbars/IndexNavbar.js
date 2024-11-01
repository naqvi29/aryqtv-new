import Link from "next/link";
import React, { useEffect, useState } from "react";


// components

import { NavLink } from "react-bootstrap";


export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [searchField, setSearchField] = useState("");

  const handleChange = e => {
    setSearchField(e.target.value);
  };
  const handleSubmit = e => {
    alert(e.target.query.value);
    // Router.push(`/search/`);
    // <Redirect to="/dashboard" />
  };
  return (
    <>


      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-1 navbar-expand-lg bg-qtv shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <a
                className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 whitespace-nowrap uppercase"
                href="#"
              >
                <img width="50%" src="/img/aryqtv.jpg" />
              </a>
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center lg:bg-opacity-0 lg:shadow-none  " +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto">
              <Link
                className=""
                href="/"
              >
                <li className="hover:text-white-500 text-white2 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold cursor-pointer">

                  <i className="text-white2 fas fa-home text-md leading-lg mr-2" />{" "}
                  Home

                </li>
              </Link>
              <Link href="/latestvideos"
                className=""
              >
                <li className="flex items-center hover:text-white-500 text-white2 px-3 py-4 lg:py-2 text-xs uppercase font-bold cursor-pointer">


                  <i className="text-white2 fas fa-video text-md leading-lg mr-2" />{" "}
                  Latest Videos


                </li>
              </Link>

              <Link href="/on-air"
                className=""
              >
                <li className="hover:text-white-500 text-white2 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold cursor-pointer">

                  <i className="text-white2 fas fa-file text-md leading-lg mr-2" />{" "}
                  ON AIR

                </li>
              </Link>

              {/* <Link href="/popularplaylists"
                className=""
              >
                <li className="hover:text-white-500 text-white2 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold cursor-pointer">

                  <i className="text-white2 fas fa-file text-md leading-lg mr-2" />{" "}
                  Popular

                </li>
              </Link> */}

              <Link href="/archiveplaylists"
                className=""
              >
                <li className="hover:text-white-500 text-white2 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold cursor-pointer">

                  <i className="text-white2 fas fa-archive text-md leading-lg mr-2" />{" "}
                  Archive

                </li>
              </Link>

              <Link href="/schedule"
                className=""
              >
                <li className="hover:text-white-500 text-white2 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold cursor-pointer">
                  <i className="text-white2 fas fa-calendar-week text-md leading-lg mr-2" />{" "}
                  Schedule
                </li>
              </Link>

              <Link href="/blogs"
                className=""
              >
                <li className="hover:text-white-500 text-white2 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold cursor-pointer">
                
                  <i className="text-white2 fas fa-feather-alt text-md leading-lg mr-2" />{" "}
                  BLOGS

                </li>
              </Link>
              {/* <Link href="/schedule"
                className=""
              >
                <li className="hover:text-white-500 text-white2 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold cursor-pointer">

                  <i className="text-white2 fas fa-clock text-md leading-lg mr-2" />{" "}
                  Schedule

                </li>
              </Link> */}
            </ul>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto mobileSocial ">
              {/* <li className="flex items-center">
                <IndexDropdown />
              </li> */}
              {/* <form className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-2" action="/search">
                <div className="relative flex w-full flex-wrap items-stretch">
                  <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-2">
                    <i className="fas fa-search"></i>
                  </span>
                  <input
                    type="text"
                    placeholder="Search here..."
                    className="border-0 px-5 py-2 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
                    name="query"
                  />
                </div>
              </form> */}

              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-1 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.facebook.com/ARYQTV/"
                  target="_blank"
                >
                  <i className="text-white2 fab fa-facebook leading-lg " />
                  {/* <span className="lg:hidden inline-block ml-2">Share</span> */}
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-1 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://twitter.com/aryqtv"
                  target="_blank"
                >
                  <i className="text-white2 fab fa-twitter leading-lg " />
                  {/* <span className="lg:hidden inline-block ml-2">Tweet</span> */}
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-1 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.instagram.com/aryqtv/"
                  target="_blank"
                >
                  <i className="text-white2 fab fa-instagram leading-lg " />
                  {/* <span className="lg:hidden inline-block ml-2">Star</span> */}+
                </a>
              </li>

              {/* <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-1 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.tiktok.com/@arydigitalasia?lang=en"
                  target="_blank"
                >
                  <i className="text-white2 fab fa-tiktok leading-lg " />
       
                </a>
              </li> */}

              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-1 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.youtube.com/channel/UCE2oY4S4wOu6WofU2YbfWsw"
                  target="_blank"
                >
                  <i className="text-white2 fab fa-youtube leading-lg" />

                </a>
              </li>
              

              {/* <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-1 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.snapchat.com/add/arydigital.tv"
                  target="_blank"
                >
                  <i className="text-white2 fab fa-snapchat leading-lg" />

                </a>
              </li> */}
             
              {/* <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-1 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://webmail.arydigital.tv/"
                  target="_blank"
                >
                  <i className="text-white2 fa fa-envelope leading-lg" />

                </a>
              </li> */}

              <Link href="https://live.aryqtv.tv/">
                <li className="flex items-center">
                  <button
                    className="bg-white text-white active:bg-blueGray-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                    type="button"
                  >
                    <i className="fas fa-tv"></i>{" "} Watch LIVE
                  </button>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>


    </>
  );
}
