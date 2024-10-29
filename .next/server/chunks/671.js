"use strict";
exports.id = 671;
exports.ids = [671];
exports.modules = {

/***/ 5416:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ LeaderboardHome)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_gpt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2465);
/* harmony import */ var react_gpt__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_gpt__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reach_window_size__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6486);
/* harmony import */ var _reach_window_size__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_reach_window_size__WEBPACK_IMPORTED_MODULE_5__);






function LeaderboardHome() {
    const { width , height  } = (0,_reach_window_size__WEBPACK_IMPORTED_MODULE_5__.useWindowSize)();
    // console.log("screen width: " + width);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "mt-5",
            children: width > 768 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_gpt__WEBPACK_IMPORTED_MODULE_4__.Bling, {
                    adUnitPath: "/67551462/ARYDigital_Lrec",
                    slotSize: [
                        [
                            160,
                            600
                        ],
                        [
                            336,
                            280
                        ],
                        [
                            300,
                            600
                        ],
                        [
                            300,
                            250
                        ]
                    ]
                })
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_gpt__WEBPACK_IMPORTED_MODULE_4__.Bling, {
                    adUnitPath: "/67551462/AryDigital-Mobile_Lrec",
                    slotSize: [
                        [
                            336,
                            280
                        ],
                        [
                            300,
                            250
                        ],
                        [
                            320,
                            100
                        ],
                        [
                            300,
                            600
                        ],
                        [
                            320,
                            50
                        ]
                    ]
                })
            })
        })
    });
};


/***/ }),

/***/ 4092:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CardVideos)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);







function CardVideos({ color , title , user , category , latest , playlist  }) {
    const settings = {
        dots: false,
        centerMode: false,
        navigation: false,
        infinite: true,
        autoplay: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        pauseOnHover: true,
        fade: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    arrows: true
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    arrows: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    arrows: false
                }
            }, 
        ]
    };
    const { 0: playlists , 1: setPlaylist  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true); // Initialize loading state
    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null); // Initialize error state
    let url = "";
    if (false) {} else {
        url = `https://api.dailymotion.com/user/${"arydigitalofficial"}/videos?fields=owner%2Cthumbnail_180_url%2Cid%2Cthumbnail_240_url%2Cthumbnail_360_url%2Ctitle%2Cid%2Cviews_total%2Cduration%2Cowner.screenname%2Cdescription&limit=9`;
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const fetchPlaylists = async ()=>{
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const result = await response.json();
                setPlaylist(result);
            } catch (error) {
                setError(error.message);
            } finally{
                setIsLoading(false); // Set loading to false regardless of success or failure
            }
        };
        if (!playlists) {
            fetchPlaylists();
        }
    }, [
        playlists,
        url
    ]); // Added dependency array
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "lg:my-6 md:my-6 sm:my-6 container px-1 py-2 mx-auto flex md:flex-row items-start md:items-center justify-between",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                            className: "text-2xl heading mobilefont font-bold leading-tight text-gray-800 text-white uppercase",
                            children: title
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "md:mt-0",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                            href: "/latestvideos",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "text-black transition focus:outline-none duration-150 font-semibold ease-in-out hover:bg-yellow bg-yellow bg-indigo-700 rounded bg-pink px-3 py-2 text-sm",
                                children: "See More"
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "text-white text-center",
                    children: "Loading..."
                }) // Display loading message
                 : error ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "text-red-500 text-center",
                    children: error
                }) // Display error message if any
                 : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_3___default()), {
                    ...settings,
                    children:  false ? 0 : playlists.list.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                            href: `/video/v1/${item.id}`,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "Extra cursor-pointer",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        alt: item.title,
                                        src: item.thumbnail_240_url,
                                        className: "w-full align-middle rounded-t-lg"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                        className: "text-xl font-bold text-white truncate",
                                        children: item.title
                                    })
                                ]
                            })
                        }, item.id))
                })
            })
        ]
    });
};
CardVideos.propTypes = {
    color: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    title: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
    user: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    category: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    latest: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
    playlist: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array)
};


/***/ }),

/***/ 6852:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MainSlider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);






function MainSlider() {
    const settings = {
        dots: false,
        className: "center prevNext",
        centerMode: false,
        navigation: false,
        infinite: true,
        autoplay: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true,
        fade: true,
        borderRadius: 10
    };
    const { 0: playlists , 1: setPlaylist  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: isloading , 1: setisloading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // const count = 0;
        if (playlists == null) {
            // alert(props.ids);
            fetch("https://node.aryzap.com/api/slider/67053b70778135a14ee60af1").then((resp)=>{
                resp.json().then((result)=>{
                    setPlaylist(result.slider.sliderData);
                    setisloading(true);
                    console.log(result);
                });
            });
        }
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_2___default()), {
                ...settings,
                children: playlists ? playlists.map((item, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            className: "slider-image",
                            src: "https://node.aryzap.com/public/slider/" + item.imagePath
                        })
                    })) : null
            })
        })
    });
};


/***/ }),

/***/ 5947:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PlaylistSlider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);







function PlaylistSlider({ title , id , category  }) {
    const { 0: playlists , 1: setPlaylist  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: playlistTitle , 1: setplaylistTitle  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(title);
    const { 0: isloading , 1: setisloading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!playlists) {
            fetch("https://node.aryzap.com/api/series/byCatID/" + category + "/PK").then((resp)=>resp.json()).then((result)=>{
                setPlaylist(result);
                setisloading(true);
                console.log(result);
            });
        }
    }, [
        playlists
    ]);
    const totalSlides = playlists ? playlists.series.length : 0;
    const settings = {
        dots: true,
        centerMode: false,
        variableWidth: false,
        navigation: false,
        infinite: totalSlides > 5,
        autoplay: false,
        speed: 500,
        slidesToShow: playlistTitle === "SHOWS" ? 3 : Math.min(totalSlides, 5),
        slidesToScroll: 1,
        pauseOnHover: true,
        fade: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: Math.min(totalSlides, 5),
                    slidesToScroll: 1,
                    initialSlide: 1,
                    arrows: true,
                    infinite: totalSlides > 5
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: Math.min(totalSlides, 5),
                    slidesToScroll: 1,
                    initialSlide: 1,
                    arrows: true,
                    infinite: totalSlides > 5
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: Math.min(totalSlides, 3),
                    slidesToScroll: 1,
                    initialSlide: 1,
                    arrows: false,
                    infinite: totalSlides > 3
                }
            }, 
        ]
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                className: "text-2xl heading mt-40 mobilefont font-bold leading-tight text-gray-800 text-white uppercase",
                children: playlistTitle
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_3___default()), {
                ...settings,
                children: playlists && playlists.series.filter((item)=>item.status !== "draft") // Filter out the "draft" items
                .map((item, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                        href: {
                            pathname: "/playlist/" + item.seriesDM,
                            query: {
                                story: item.description,
                                name: item.title,
                                timings: item.time,
                                days: item.day
                            }
                        },
                        as: `playlist/${item._id}`,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "Extra cursor-pointer",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "https://node.aryzap.com/public/" + item.imagePoster,
                                alt: item.title
                            })
                        })
                    }, i))
            })
        ]
    });
};


/***/ })

};
;