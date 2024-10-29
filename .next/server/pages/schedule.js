"use strict";
(() => {
var exports = {};
exports.id = 332;
exports.ids = [332,195,80];
exports.modules = {

/***/ 250:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Schedule)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Sliders_MainSlider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6852);
/* harmony import */ var _components_Cards_CardVideos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4092);
/* harmony import */ var _components_Sliders_PlaylistSlider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5947);
/* harmony import */ var react_dailymotion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8773);
/* harmony import */ var react_dailymotion__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dailymotion__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Cards_CardVideosGrid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4623);
/* harmony import */ var _components_Ads_Mrec__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5416);
/* harmony import */ var _components_Ads_Leaderboard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3685);
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3677);
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_render_html__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_html_renderer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4979);
/* harmony import */ var react_html_renderer__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_html_renderer__WEBPACK_IMPORTED_MODULE_13__);
/* eslint-disable react/jsx-no-target-blank */ 













function Schedule() {
    const { 0: data , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: isloading , 1: setisloading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // const count = 0;
        if (data == null) {
            // alert(props.id);
            fetch("https://api.arydigital.tv/v4/schedule.php").then((resp)=>{
                resp.json().then((result)=>{
                    setData(result);
                    setisloading(true);
                    console.log(result);
                });
            });
        }
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
            class: "container mt-20 pt-1 pb-60",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("center", {
                    class: "pb-10",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Ads_Leaderboard__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {})
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                    class: "nav nav-tabs",
                    id: "myTab",
                    role: "tablist",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            class: "nav-item",
                            role: "presentation",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                class: "nav-link active",
                                id: "home-tab",
                                "data-bs-toggle": "tab",
                                "data-bs-target": "#Monday",
                                type: "button",
                                role: "tab",
                                "aria-controls": "home",
                                "aria-selected": "true",
                                children: "Monday"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            class: "nav-item",
                            role: "presentation",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                class: "nav-link",
                                id: "profile-tab",
                                "data-bs-toggle": "tab",
                                "data-bs-target": "#Tuesday",
                                type: "button",
                                role: "tab",
                                "aria-controls": "profile",
                                "aria-selected": "false",
                                children: "Tuesday"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            class: "nav-item",
                            role: "presentation",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                class: "nav-link",
                                id: "contact-tab",
                                "data-bs-toggle": "tab",
                                "data-bs-target": "#Wednesday",
                                type: "button",
                                role: "tab",
                                "aria-controls": "contact",
                                "aria-selected": "false",
                                children: "Wednesday"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            class: "nav-item",
                            role: "presentation",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                class: "nav-link ",
                                id: "home-tab",
                                "data-bs-toggle": "tab",
                                "data-bs-target": "#Thursday",
                                type: "button",
                                role: "tab",
                                "aria-controls": "home",
                                "aria-selected": "true",
                                children: "Thursday"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            class: "nav-item",
                            role: "presentation",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                class: "nav-link ",
                                id: "home-tab",
                                "data-bs-toggle": "tab",
                                "data-bs-target": "#Friday",
                                type: "button",
                                role: "tab",
                                "aria-controls": "home",
                                "aria-selected": "true",
                                children: "Friday"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            class: "nav-item",
                            role: "presentation",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                class: "nav-link ",
                                id: "home-tab",
                                "data-bs-toggle": "tab",
                                "data-bs-target": "#Saturday",
                                type: "button",
                                role: "tab",
                                "aria-controls": "home",
                                "aria-selected": "true",
                                children: "Saturday"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            class: "nav-item",
                            role: "presentation",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                class: "nav-link ",
                                id: "home-tab",
                                "data-bs-toggle": "tab",
                                "data-bs-target": "#Sunday",
                                type: "button",
                                role: "tab",
                                "aria-controls": "home",
                                "aria-selected": "true",
                                children: "Sunday"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    class: "tab-content",
                    id: "myTabContent",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            class: "tab-pane fade show active",
                            id: "Monday",
                            role: "tabpanel",
                            "aria-labelledby": "contact-tab",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                class: "flex flex-wrap",
                                children: data ? data.Schedule.filter((drama)=>drama.dramaDays.monday).map((drama, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        class: "w-full lg:w-3/12 sm:w-1/12 px-2 py-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("center", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                href: {
                                                    pathname: "/playlist/" + drama.dramaPlaylist
                                                },
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    class: "Extra cursor-pointer",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: drama.dramaPoster,
                                                            alt: drama.dramaName
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            class: "scheduleContent",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                class: "timings",
                                                                children: drama.dramaTime
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    })) : null
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            class: "tab-pane fade",
                            id: "Tuesday",
                            role: "tabpanel",
                            "aria-labelledby": "contact-tab",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                class: "flex flex-wrap",
                                children: data ? data.Schedule.filter((drama)=>drama.dramaDays.tuesday).map((drama, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        class: "w-full lg:w-3/12 sm:w-1/12 px-2 py-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("center", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                href: {
                                                    pathname: "/playlist/" + drama.dramaPlaylist
                                                },
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    class: "Extra cursor-pointer",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: drama.dramaPoster,
                                                            alt: drama.dramaName
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            class: "scheduleContent",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                class: "timings",
                                                                children: drama.dramaTime
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    })) : null
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            class: "tab-pane fade",
                            id: "Wednesday",
                            role: "tabpanel",
                            "aria-labelledby": "contact-tab",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                class: "flex flex-wrap",
                                children: data ? data.Schedule.filter((drama)=>drama.dramaDays.wednesday).map((drama, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        class: "w-full lg:w-3/12 sm:w-1/12 px-2 py-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("center", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                href: {
                                                    pathname: "/playlist/" + drama.dramaPlaylist
                                                },
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    class: "Extra cursor-pointer",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: drama.dramaPoster,
                                                            alt: drama.dramaName
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            class: "scheduleContent",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                class: "timings",
                                                                children: drama.dramaTime
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    })) : null
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            class: "tab-pane fade",
                            id: "Thursday",
                            role: "tabpanel",
                            "aria-labelledby": "contact-tab",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                class: "flex flex-wrap",
                                children: data ? data.Schedule.filter((drama)=>drama.dramaDays.thursday).map((drama, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        class: "w-full lg:w-3/12 sm:w-1/12 px-2 py-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("center", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                href: {
                                                    pathname: "/playlist/" + drama.dramaPlaylist
                                                },
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    class: "Extra cursor-pointer",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: drama.dramaPoster,
                                                            alt: drama.dramaName
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            class: "scheduleContent",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                class: "timings",
                                                                children: drama.dramaTime
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    })) : null
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            class: "tab-pane fade",
                            id: "Friday",
                            role: "tabpanel",
                            "aria-labelledby": "contact-tab",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                class: "flex flex-wrap",
                                children: data ? data.Schedule.filter((drama)=>drama.dramaDays.friday).map((drama, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        class: "w-full lg:w-3/12 sm:w-1/12 px-2 py-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("center", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                href: {
                                                    pathname: "/playlist/" + drama.dramaPlaylist
                                                },
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    class: "Extra cursor-pointer",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: drama.dramaPoster,
                                                            alt: drama.dramaName
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            class: "scheduleContent",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                class: "timings",
                                                                children: drama.dramaTime
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    })) : null
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            class: "tab-pane fade",
                            id: "Sunday",
                            role: "tabpanel",
                            "aria-labelledby": "contact-tab",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                class: "flex flex-wrap",
                                children: data ? data.Schedule.filter((drama)=>drama.dramaDays.sunday).map((drama, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        class: "w-full lg:w-3/12 sm:w-1/12 px-2 py-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("center", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                href: {
                                                    pathname: "/playlist/" + drama.dramaPlaylist
                                                },
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    class: "Extra cursor-pointer",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: drama.dramaPoster,
                                                            alt: drama.dramaName
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            class: "scheduleContent",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                class: "timings",
                                                                children: drama.dramaTime
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    })) : null
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            class: "tab-pane fade",
                            id: "Saturday",
                            role: "tabpanel",
                            "aria-labelledby": "contact-tab",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                class: "flex flex-wrap",
                                children: data ? data.Schedule.filter((drama)=>drama.dramaDays.saturday).map((drama, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        class: "w-full lg:w-3/12 sm:w-1/12 px-2 py-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("center", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                href: {
                                                    pathname: "/playlist/" + drama.dramaPlaylist
                                                },
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    class: "Extra cursor-pointer",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: drama.dramaPoster,
                                                            alt: drama.dramaName
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            class: "scheduleContent",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                class: "timings",
                                                                children: drama.dramaTime
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    })) : null
                            })
                        })
                    ]
                })
            ]
        })
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

/***/ 8773:
/***/ ((module) => {

module.exports = require("react-dailymotion");

/***/ }),

/***/ 2465:
/***/ ((module) => {

module.exports = require("react-gpt");

/***/ }),

/***/ 4979:
/***/ ((module) => {

module.exports = require("react-html-renderer");

/***/ }),

/***/ 4336:
/***/ ((module) => {

module.exports = require("react-infinite-scroll-component");

/***/ }),

/***/ 3677:
/***/ ((module) => {

module.exports = require("react-render-html");

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
var __webpack_exports__ = __webpack_require__.X(0, [952,664,685,671,623], () => (__webpack_exec__(250)));
module.exports = __webpack_exports__;

})();