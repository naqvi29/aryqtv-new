"use strict";
exports.id = 879;
exports.ids = [879];
exports.modules = {

/***/ 4879:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Blogs)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Sliders_MainSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6852);
/* harmony import */ var _components_Cards_CardVideos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4092);
/* harmony import */ var _components_Sliders_PlaylistSlider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5947);
/* harmony import */ var _components_Ads_Catfish__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3614);
/* harmony import */ var _components_Ads_Mrec__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5416);
/* harmony import */ var _components_Ads_Leaderboard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3685);









function Blogs({ category , title  }) {
    const { 0: blogs , 1: setBlogs  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: isloading , 1: setisloading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const sectionTitle = title;
    // console.log(category);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // const count = 0;
        if (blogs == null) {
            // alert(props.id);
            fetch("https://blogs.arydigital.tv/api/jsonify.php?count=10&post_type=post&cat=" + category + "&tax=category").then((resp)=>{
                resp.json().then((result)=>{
                    setBlogs(result.data);
                    setisloading(true);
                    console.log("Blogs Data " + result.data.specific_post[0].slugs);
                // console.log("SLUGGGG " + result.specific_post[0].slugs);
                });
            });
        }
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
            className: "",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                class: "flex justify-center items-center",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    class: "2xl:mx-auto 2xl:container lg:px-20 lg:py-10 md:py-10 md:px-6 py-9 px-4 w-96 sm:w-auto",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            role: "main",
                            class: "flex flex-col items-center justify-center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                class: "text-4xl font-semibold leading-9 text-center text-white",
                                children: sectionTitle
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            class: "lg:flex items-stretch md:mt-12 mt-8",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    class: "lg:w-1/2",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            class: "sm:flex items-center justify-between xl:gap-x-8 gap-x-6",
                                            children: blogs ? blogs.specific_post.slice(0, 2).map((item, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    class: "sm:w-1/2 relative mobilePadding",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                href: "/" + item.slugs,
                                                                children: [
                                                                    " ",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        src: item.image.replace("-150x150", ""),
                                                                        class: "w-full blogImage",
                                                                        alt: item.title
                                                                    }),
                                                                    " "
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                class: "bottom-0 left-0 p-6 blogContent",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                        href: "/" + item.slugs,
                                                                        children: [
                                                                            " ",
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                                                class: "text-xl font-semibold 5 text-white",
                                                                                children: item.title
                                                                            }),
                                                                            " "
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                        href: "/" + item.slugs,
                                                                        class: "focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                class: "pr-2 text-sm font-medium leading-none",
                                                                                children: "Read More"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                                class: "fill-stroke",
                                                                                width: "16",
                                                                                height: "16",
                                                                                viewBox: "0 0 16 16",
                                                                                fill: "none",
                                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                    d: "M5.75 12.5L10.25 8L5.75 3.5",
                                                                                    stroke: "currentColor",
                                                                                    "stroke-width": "2",
                                                                                    "stroke-linecap": "round",
                                                                                    "stroke-linejoin": "round"
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                })) : null
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            class: "relative mobilePadding ",
                                            children: blogs ? blogs.specific_post.slice(2, 3).map((item, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                        href: "/" + item.slugs,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    class: "absolute bottom-0 left-0 md:p-10 p-3 background",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                                            class: "text-xl font-semibold 5 text-white blogTitle",
                                                                            children: item.title
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                            href: "/" + item.slugs,
                                                                            class: "bloglink focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                    class: "pr-2 text-sm font-medium leading-none ",
                                                                                    children: "Read More"
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                                    class: "fill-stroke",
                                                                                    width: "16",
                                                                                    height: "16",
                                                                                    viewBox: "0 0 16 16",
                                                                                    fill: "none",
                                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                        d: "M5.75 12.5L10.25 8L5.75 3.5",
                                                                                        stroke: "currentColor",
                                                                                        "stroke-width": "2",
                                                                                        "stroke-linecap": "round",
                                                                                        "stroke-linejoin": "round"
                                                                                    })
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: item.image.replace("-150x150", ""),
                                                                alt: item.title,
                                                                class: "w-full mt-8 md:mt-6 hidden sm:block"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                class: "w-full mt-4 sm:hidden",
                                                                src: item.image.replace("-150x150", ""),
                                                                alt: item.title
                                                            })
                                                        ]
                                                    })
                                                })) : null
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    class: "lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 lg:flex flex-col justify-between",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            class: "relative mobilePadding",
                                            children: blogs ? blogs.specific_post.slice(3, 4).map((item, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                        href: "/" + item.slugs,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    class: "absolute bottom-0 left-0 md:p-10 p-3 background",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                                            class: "text-xl font-semibold 5 text-white blogTitle",
                                                                            children: item.title
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                            href: "/" + item.slugs,
                                                                            class: "bloglink focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                    class: "pr-2 text-sm font-medium leading-none ",
                                                                                    children: "Read More"
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                                    class: "fill-stroke",
                                                                                    width: "16",
                                                                                    height: "16",
                                                                                    viewBox: "0 0 16 16",
                                                                                    fill: "none",
                                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                        d: "M5.75 12.5L10.25 8L5.75 3.5",
                                                                                        stroke: "currentColor",
                                                                                        "stroke-width": "2",
                                                                                        "stroke-linecap": "round",
                                                                                        "stroke-linejoin": "round"
                                                                                    })
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: item.image.replace("-150x150", ""),
                                                                alt: item.title,
                                                                class: "w-full sm:block hidden shadow-inner"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                class: "w-full sm:hidden shadow-inner",
                                                                src: item.image.replace("-150x150", ""),
                                                                alt: item.title
                                                            })
                                                        ]
                                                    })
                                                })) : null
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            class: "sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4",
                                            children: blogs ? blogs.specific_post.slice(4, 6).map((item, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "/" + item.slugs,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        class: "relative w-full mobilePadding",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                    src: item.image.replace("-150x150", ""),
                                                                    class: "w-full blogImage",
                                                                    alt: item.title
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    class: "blogContent bottom-0 left-0 p-6",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                                            class: "text-xl font-semibold 5 text-white",
                                                                            children: item.title
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                            href: "/" + item.slugs,
                                                                            class: "focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                    class: "pr-2 text-sm font-medium leading-none",
                                                                                    children: "Read More"
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                                    class: "fill-stroke",
                                                                                    width: "16",
                                                                                    height: "16",
                                                                                    viewBox: "0 0 16 16",
                                                                                    fill: "none",
                                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                        d: "M5.75 12.5L10.25 8L5.75 3.5",
                                                                                        stroke: "currentColor",
                                                                                        "stroke-width": "2",
                                                                                        "stroke-linecap": "round",
                                                                                        "stroke-linejoin": "round"
                                                                                    })
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    })
                                                })) : null
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
};


/***/ })

};
;