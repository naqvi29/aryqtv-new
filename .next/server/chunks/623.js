"use strict";
exports.id = 623;
exports.ids = [623];
exports.modules = {

/***/ 4623:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export default */
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
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4336);
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_5__);








// components
function CardVideosGrid({ color , title , user , category  }) {
    const { 0: playlists , 1: setPlaylist  } = useState(null);
    const { 0: isloading , 1: setisloading  } = useState(false);
    const { 0: page , 1: setPage  } = useState(1);
    const { 0: prevPage , 1: setPrevPage  } = useState(0);
    let url = "https://api.dailymotion.com/playlist/" + category + "/videos?fields=owner%2Cthumbnail_180_url%2Cid%2Cthumbnail_240_url%2Cthumbnail_360_url%2Ctitle%2Cid%2Cviews_total%2Cduration%2Cowner.screenname%2Cdescription&page=" + page + "&limit=8";
    useEffect(()=>{
        // const count = 0;
        if (playlists == null) {
            // alert(props.id);
            fetch(url).then((resp)=>{
                resp.json().then((result)=>{
                    setPlaylist(result);
                    setPage(2);
                    setisloading(true);
                    console.log(result);
                });
            });
        }
    });
    function next() {
        setPage(page + 1);
        // alert(page);
        fetch("https://api.dailymotion.com/playlist/" + category + "/videos?fields=owner%2Cthumbnail_180_url%2Cid%2Cthumbnail_240_url%2Cthumbnail_360_url%2Ctitle%2Cid%2Cviews_total%2Cduration%2Cowner.screenname%2Cdescription&page=" + page + "&limit=8").then((resp)=>{
            resp.json().then((results)=>{
                console.log(results);
                setPlaylist(results);
                setPrevPage(page - 1);
            });
        });
    }
    function prev() {
        setPrevPage(prevPage - 1);
        // alert(prevPage);
        fetch("https://api.dailymotion.com/playlist/" + category + "/videos?fields=owner%2Cthumbnail_180_url%2Cid%2Cthumbnail_240_url%2Cthumbnail_360_url%2Ctitle%2Cid%2Cviews_total%2Cduration%2Cowner.screenname%2Cdescription&page=" + prevPage + "&limit=8").then((resp)=>{
            resp.json().then((results)=>{
                console.log(results);
                setPlaylist(results);
                setPage(prevPage + 1);
            });
        });
    }
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: /*#__PURE__*/ _jsx("section", {
            class: "text-gray-600 body-font bg-black",
            children: /*#__PURE__*/ _jsxs("div", {
                class: "container px-5 mx-auto",
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: "flex flex-wrap",
                        children: playlists ? playlists.list.map((item, i)=>/*#__PURE__*/ _jsx("div", {
                                className: "w-full lg:w-3/12 sm:w-1/12 px-2 py-2",
                                children: /*#__PURE__*/ _jsx(Link, {
                                    href: {
                                        pathname: "/video/" + item.id
                                    },
                                    className: "hover:scale-110",
                                    children: /*#__PURE__*/ _jsxs("div", {
                                        className: "Extra cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ _jsx("img", {
                                                alt: "...",
                                                src: item.thumbnail_240_url,
                                                className: "w-full align-middle rounded-t-lg"
                                            }),
                                            /*#__PURE__*/ _jsx("h4", {
                                                className: "text-xl font-bold text-white line-clamp-2",
                                                children: item.title
                                            })
                                        ]
                                    })
                                })
                            })) : null
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: "text-center mt-5 mb-5",
                        children: [
                            prevPage > 0 ? /*#__PURE__*/ _jsx("button", {
                                onClick: ()=>prev(),
                                className: "bg-yellow text-white active:bg-blueGray-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150",
                                type: "button",
                                children: " Previous "
                            }) : null,
                            /*#__PURE__*/ _jsx("span", {
                                children: "  "
                            }),
                            playlists && playlists.list.length > 7 ? /*#__PURE__*/ _jsx("button", {
                                onClick: ()=>next(),
                                className: "bg-yellow text-white active:bg-blueGray-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150",
                                type: "button",
                                children: " Next "
                            }) : null
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