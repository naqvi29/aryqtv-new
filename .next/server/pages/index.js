"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405,31,195,80];
exports.modules = {

/***/ 3622:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Index)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/Sliders/MainSlider.js
var MainSlider = __webpack_require__(6852);
// EXTERNAL MODULE: ./components/Cards/CardVideos.js
var CardVideos = __webpack_require__(4092);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
;// CONCATENATED MODULE: ./components/Cards/CardVideosDM.js







// components
function CardVideosDM({ color , title , user , category , latest , playlist  }) {
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
    // alert(category);
    // alert(process.env.channel);
    const { 0: playlists , 1: setPlaylist  } = (0,external_react_.useState)(null);
    const { 0: isloading , 1: setisloading  } = (0,external_react_.useState)(false);
    let url = "https://api.dailymotion.com/playlist/" + category + "/videos?fields=owner%2Cthumbnail_180_url%2Cid%2Cthumbnail_240_url%2Cthumbnail_360_url%2Ctitle%2Cid%2Cviews_total%2Cduration%2Cowner.screenname%2Cdescription&limit=9";
    (0,external_react_.useEffect)(()=>{
        // const count = 0;
        if (playlists == null) {
            // alert(props.id);
            fetch(url).then((resp)=>{
                resp.json().then((result)=>{
                    setPlaylist(result);
                    setisloading(true);
                    console.log(result);
                });
            });
        }
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "lg:my-6 md:my-6 sm:my-6 container px-1 py-2 mx-auto flex md:flex-row items-start md:items-center justify-between",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                            className: "text-2xl heading mobilefont font-bold leading-tight text-gray-800 text-white uppercase",
                            children: title
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "md:mt-0",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "playlist/" + playlist,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "transition focus:outline-none duration-150 font-semibold ease-in-out hover:bg-yellow bg-indigo-700 rounded bg-yellow px-3 py-2 text-sm text-black",
                                children: "See More"
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_slick_default()), {
                    ...settings,
                    children: playlists ? playlists.list.map((item, i)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: {
                                pathname: "/video/v1/" + item.id
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "Extra cursor-pointer",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        alt: "...",
                                        src: item.thumbnail_240_url,
                                        className: "w-full align-middle rounded-t-lg"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        className: "text-xl font-bold text-white truncate",
                                        children: item.title
                                    })
                                ]
                            })
                        })) : null
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/Cards/CardVideosYT.js







// components
function CardVideosYT({ color , title , user , category , latest , playlist  }) {
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
    // alert(category);
    // alert(process.env.channel);
    const { 0: playlists , 1: setPlaylist  } = useState(null);
    const { 0: isloading , 1: setisloading  } = useState(false);
    let url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=${category}&key=${"AIzaSyDJraNMuVIoIVQWVnrejH6-OzoEEYNtFls"}&maxResults=9`;
    useEffect(()=>{
        // const count = 0;
        if (playlists == null) {
            // alert(props.id);
            fetch(url).then((resp)=>{
                resp.json().then((result)=>{
                    setPlaylist(result);
                    setisloading(true);
                    console.log(result);
                });
            });
        }
    });
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsxs("div", {
                className: "lg:my-6 md:my-6 sm:my-6 container px-1 py-2 mx-auto flex md:flex-row items-start md:items-center justify-between",
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        children: /*#__PURE__*/ _jsx("h4", {
                            className: "text-2xl heading mobilefont font-bold leading-tight text-gray-800 text-white uppercase",
                            children: title
                        })
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "md:mt-0",
                        children: /*#__PURE__*/ _jsx("a", {
                            href: "playlist/" + playlist,
                            children: /*#__PURE__*/ _jsx("button", {
                                className: "transition focus:outline-none duration-150 font-semibold ease-in-out hover:bg-yellow bg-indigo-700 rounded bg-yellow px-3 py-2 text-sm text-black",
                                children: "See More"
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ _jsx("div", {
                children: /*#__PURE__*/ _jsx(Slider, {
                    ...settings,
                    children: playlists && playlists.items.map((item, i)=>item.snippet.title !== "Private video" ? /*#__PURE__*/ _jsx(Link, {
                            href: {
                                pathname: "/video/v2/" + item.contentDetails.videoId
                            },
                            children: /*#__PURE__*/ _jsxs("div", {
                                className: "Extra cursor-pointer",
                                children: [
                                    /*#__PURE__*/ _jsx("img", {
                                        alt: item.snippet.title || "Thumbnail",
                                        src: item.snippet.thumbnails.medium.url,
                                        className: "w-full align-middle rounded-t-lg"
                                    }),
                                    /*#__PURE__*/ _jsx("h4", {
                                        className: "text-xl font-bold text-white truncate",
                                        children: item.snippet.title
                                    })
                                ]
                            })
                        }, i) : null)
                })
            })
        ]
    });
};

// EXTERNAL MODULE: ./components/Sliders/PlaylistSlider.js
var PlaylistSlider = __webpack_require__(5947);
// EXTERNAL MODULE: ./components/Ads/Catfish.js
var Catfish = __webpack_require__(3614);
// EXTERNAL MODULE: ./components/Ads/Mrec.js
var Mrec = __webpack_require__(5416);
// EXTERNAL MODULE: ./components/Ads/MrecHome.js
var MrecHome = __webpack_require__(5572);
// EXTERNAL MODULE: ./components/Ads/Leaderboard.js
var Leaderboard = __webpack_require__(3685);
// EXTERNAL MODULE: ./pages/blog.js
var blog = __webpack_require__(5705);
// EXTERNAL MODULE: ./components/Ads/LeaderboardHome.js
var LeaderboardHome = __webpack_require__(4855);
// EXTERNAL MODULE: ./pages/ScheduleHome.js
var ScheduleHome = __webpack_require__(6873);
;// CONCATENATED MODULE: ./pages/index.js















function Index() {
    const { 0: playlists , 1: setPlaylist  } = (0,external_react_.useState)(null);
    const { 0: isloading , 1: setisloading  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        // const count = 0;
        if (playlists == null) {
            // alert(props.id);
            fetch("https://node.aryzap.com/api/series/byCatID/Digital:%20Single%20Series/PK").then((resp)=>{
                resp.json().then((result)=>{
                    setPlaylist(result);
                    setisloading(true);
                    console.log(result);
                });
            });
        }
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "homePageMobile",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container-fluid mx-auto items-center flex flex-wrap mt-10",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-full sm:w-12/12 md:w-12/12 lg:w-12/12 xl:w-12/12 px-4 mt-2 mb-3",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("center", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(LeaderboardHome/* default */.Z, {})
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mainSlider",
                children: /*#__PURE__*/ jsx_runtime_.jsx("center", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(MainSlider/* default */.Z, {})
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                class: "onAir",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    class: "container-fluid bg-gradient-golden",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        class: "row align-items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                class: "col-lg-3 col-12",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    class: "text-white p-xl-0",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                        class: "h1 text-white scheduleHeading",
                                        children: [
                                            "TODAY ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "ON AIR "
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                class: "col-lg-9 col-12 d-lg-block",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(ScheduleHome["default"], {})
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "pb-40 relative bg-black",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container mx-auto",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-full md:w-12/12 lg:w-12/12 xl:w-12/12 px-4 mt-10"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(CardVideos/* default */.Z, {
                            title: "LATEST VIDEOS",
                            category: "latest"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(PlaylistSlider/* default */.Z, {
                            title: "ON AIR",
                            id: "0",
                            category: "DIGITAL: On Air"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(PlaylistSlider/* default */.Z, {
                            title: "SHOWS",
                            id: "0",
                            category: "DIGITAL: Shows",
                            slides: "3"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(blog["default"], {
                            category: "drama-reviews",
                            title: "EDITORIAL"
                        }),
                        playlists ? playlists.series.slice(0, 4).map((item, i)=> false ? /*#__PURE__*/ 0 : /*#__PURE__*/ jsx_runtime_.jsx(CardVideosDM, {
                                title: item.title,
                                category: item.seriesDM,
                                playlist: item._id
                            }, i)) : null,
                        /*#__PURE__*/ jsx_runtime_.jsx(PlaylistSlider/* default */.Z, {
                            title: "POPULAR",
                            id: "2",
                            category: "DIGITAL: Popular"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(PlaylistSlider/* default */.Z, {
                            title: "ARCHIVE DRAMAS",
                            id: "1",
                            category: "DIGITAL: Archive"
                        })
                    ]
                })
            })
        ]
    });
};


/***/ }),

/***/ 6486:
/***/ ((module) => {

module.exports = require("@reach/window-size");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 7561:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/styled-jsx");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 580:
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 2465:
/***/ ((module) => {

module.exports = require("react-gpt");

/***/ }),

/***/ 8096:
/***/ ((module) => {

module.exports = require("react-slick");

/***/ }),

/***/ 1187:
/***/ ((module) => {

module.exports = require("react-toastify");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,664,685,671,614,873,705,16], () => (__webpack_exec__(3622)));
module.exports = __webpack_exports__;

})();