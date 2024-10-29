"use strict";
exports.id = 111;
exports.ids = [111];
exports.modules = {

/***/ 111:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CardVideosGrid)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);






// components
function CardVideosGrid({ color , title , user , category , platform  }) {
    const { 0: playlists , 1: setPlaylist  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: page , 1: setPage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    // For Youtube
    const { 0: nextPageToken , 1: setNextPageToken  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: prevPageToken , 1: setPrevPageToken  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const seasonRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null); // To scroll to the specific tab
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        fetchVideos(category, "");
    }, [
        category
    ]); // fetchVideos will run when category changes
    const fetchVideos = (category, pageToken)=>{
        setIsLoading(true);
        fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=${category}&key=${"AIzaSyDJraNMuVIoIVQWVnrejH6-OzoEEYNtFls"}&maxResults=12&pageToken=${pageToken}`).then((resp)=>resp.json()).then((result)=>{
            setPlaylist(result.items); // Correctly setting playlist items
            setNextPageToken(result.nextPageToken || "");
            setPrevPageToken(result.prevPageToken || "");
            setIsLoading(false);
        }).catch((error)=>{
            console.error("Error fetching videos:", error);
            setIsLoading(false);
        });
    };
    const handlePageChange = (pageToken)=>{
        fetchVideos(category, pageToken);
        if (seasonRef.current) {
            seasonRef.current.scrollIntoView({
                behavior: "smooth"
            });
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
            className: "text-gray-600 body-font bg-black",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container mx-auto",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex flex-wrap",
                        children: playlists && playlists.map((item, i)=>item.snippet.title !== "Private video" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-full lg:w-3/12 sm:w-1/12 px-2 py-2",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    href: {
                                        pathname: "/video/v2/" + item.contentDetails.videoId
                                    },
                                    className: "hover:scale-110",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "Extra cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                alt: item.snippet.title,
                                                src: item.snippet.thumbnails.medium.url,
                                                className: "w-full align-middle rounded-t-lg"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                className: "text-xl font-bold text-white line-clamp-2",
                                                children: item.snippet.title
                                            })
                                        ]
                                    })
                                })
                            }, i) : null)
                    }),
                    isLoading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "text-center mt-5",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-white",
                            children: "Loading..."
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "text-center mt-5 mb-5",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: `${!prevPageToken ? "bg-gray-400 cursor-not-allowed" : "bg-yellow hover:shadow-lg"}
              text-white active:bg-blueGray-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150`,
                                onClick: ()=>handlePageChange(prevPageToken),
                                disabled: !prevPageToken,
                                children: "Previous"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: `${!nextPageToken ? "bg-gray-400 cursor-not-allowed" : "bg-yellow hover:shadow-lg"} text-white active:bg-blueGray-600 text-xs font-bold uppercase px-4 py-2 rounded shadow outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150`,
                                onClick: ()=>handlePageChange(nextPageToken),
                                disabled: !nextPageToken,
                                children: "Next"
                            })
                        ]
                    })
                ]
            })
        })
    });
};


/***/ })

};
;