"use strict";
exports.id = 705;
exports.ids = [705];
exports.modules = {

/***/ 5705:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Blog)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function Blog({ category , title  }) {
    const { 0: blogs , 1: setBlogs  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const fetchData = async ()=>{
            setIsLoading(true);
            const cachedData = localStorage.getItem("cachedData");
            if (cachedData) {
                // Use cached data
                setBlogs(JSON.parse(cachedData));
                setIsLoading(false);
            } else {
                await fetchDataFromAPI();
            }
        };
        const fetchDataFromAPI = async ()=>{
            try {
                const response = await fetch(`https://blogs.arydigital.tv/api/jsonify.php?count=100&post_type=post&cat=drama-reviews&tax=category`);
                const result = await response.json();
                setBlogs(result.data);
                setIsLoading(false);
                // Cache the data
                localStorage.setItem("cachedData", JSON.stringify(result.data));
            } catch (error) {
                console.error("Error fetching data:", error);
                setIsLoading(false);
            }
        };
        fetchData();
        // Set interval to refresh data from API every minute
        const interval = setInterval(fetchDataFromAPI, 60000); // 1 minute
        // Clear interval on component unmount
        return ()=>clearInterval(interval);
    }, [
        category
    ]); // Fetch data when category changes
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
            className: "paddingMobile",
            children: [
                isLoading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    children: "Loading..."
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mt-10 flex md:flex-row items-start md:items-center justify-between",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                className: "text-2xl heading mobilefont font-bold leading-tight text-gray-800 text-white",
                                children: title
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "md:mt-0",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "/blogs",
                                target: "_blank",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "text-black transition focus:outline-none duration-150 font-semibold ease-in-out hover:bg-yellow bg-yellow bg-indigo-700 rounded bg-pink px-3 py-2 text-sm",
                                    children: "Read More"
                                })
                            })
                        })
                    ]
                }),
                blogs && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex justify-center items-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "2xl:mx-auto 2xl:container w-96 sm:w-auto mobileBlog",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "lg:flex items-stretch",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "lg:w-2/2 mt-2",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "items-center flex flex-wrap",
                                    children: blogs.specific_post.slice(0, 4).map((item, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "w-full lg:w-3/12 sm:w-1/12 px-2 py-2 relative mobilePadding",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                        href: "/" + item.slugs,
                                                        target: "_blank",
                                                        children: [
                                                            " ",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: item.image ? item.image.replace("-150x150", "") : item.thumbnail,
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
                                        }, i))
                                })
                            })
                        })
                    })
                })
            ]
        })
    });
};


/***/ })

};
;