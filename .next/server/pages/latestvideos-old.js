"use strict";
(() => {
var exports = {};
exports.id = 618;
exports.ids = [618,195,80];
exports.modules = {

/***/ 2038:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Ads_Leaderboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3685);










// components
const Latestvideos = (props)=>{
    const { 0: playlists , 1: setPlaylist  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: isloading , 1: setisloading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: page , 1: setPage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const { 0: prevPage , 1: setPrevPage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    let url = "https://api.dailymotion.com/user/" + "arydigitalofficial" + "/videos?fields=owner%2Cthumbnail_180_url%2Cid%2Cthumbnail_240_url%2Cthumbnail_360_url%2Ctitle%2Cid%2Cviews_total%2Cduration%2Cowner.screenname%2Cdescription&page=" + page + "&limit=12";
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
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
        fetch("https://api.dailymotion.com/user/" + "arydigitalofficial" + "/videos?fields=owner%2Cthumbnail_180_url%2Cid%2Cthumbnail_240_url%2Cthumbnail_360_url%2Ctitle%2Cid%2Cviews_total%2Cduration%2Cowner.screenname%2Cdescription&page=" + page + "&limit=12").then((resp)=>{
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
        fetch("https://api.dailymotion.com/user/" + "arydigitalofficial" + "/videos?fields=owner%2Cthumbnail_180_url%2Cid%2Cthumbnail_240_url%2Cthumbnail_360_url%2Ctitle%2Cid%2Cviews_total%2Cduration%2Cowner.screenname%2Cdescription&page=" + prevPage + "&limit=12").then((resp)=>{
            resp.json().then((results)=>{
                console.log(results);
                setPlaylist(results);
                setPage(prevPage + 1);
            });
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_6___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "ARY Digital Popular Videos"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                class: "text-gray-600 body-font bg-black",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    class: "container px-5 py-24 mx-auto mobileVideosPadding",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("center", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Ads_Leaderboard__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex flex-wrap",
                            children: playlists ? playlists.list.map((item, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "w-full lg:w-3/12 sm:w-1/12 px-2 py-2 mobileVideos",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        href: {
                                            pathname: "/video/v1/" + item.id
                                        },
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "Extra",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    alt: "...",
                                                    src: item.thumbnail_240_url,
                                                    className: "w-full align-middle rounded-t-lg cursor-pointer"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                    className: "text-xl font-bold text-white line-clamp-2",
                                                    children: item.title
                                                })
                                            ]
                                        })
                                    })
                                })) : null
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "text-center mt-5 mb-5",
                            children: [
                                prevPage > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: ()=>prev(),
                                    className: "bg-yellow text-white active:bg-blueGray-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150",
                                    type: "button",
                                    children: " Previous "
                                }) : null,
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "  "
                                }),
                                playlists && playlists.list.length > 7 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
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
        ]
    });
};
// // This gets called on every request
// export async function getServerSideProps(context) {
//   // console.log(context.query);
//   const { id } = context.query;
//     // Fetch data from external API
//   const res = await fetch('https://api.dailymotion.com/user/'+process.env.channel+'/videos?fields=owner%2Cthumbnail_180_url%2Cid%2Cthumbnail_240_url%2Cthumbnail_360_url%2Ctitle%2Cid%2Cviews_total%2Cduration%2Cowner.screenname%2Cdescription&page='+page+'limit=12')
//   const data = await res.json()
//   // Pass data to the page via props
//   return { props: { data } }
// }
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Latestvideos);


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

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

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
var __webpack_exports__ = __webpack_require__.X(0, [952,664,685], () => (__webpack_exec__(2038)));
module.exports = __webpack_exports__;

})();