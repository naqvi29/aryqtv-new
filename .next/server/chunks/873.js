"use strict";
exports.id = 873;
exports.ids = [873];
exports.modules = {

/***/ 6873:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ScheduleHome)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7561);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* eslint-disable react/jsx-no-target-blank */ 



function ScheduleHome() {
    const { 0: data , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const currentDate = new Date();
    const weekdays = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    const weekdayIndex = currentDate.getDay();
    const weekdayName = weekdays[weekdayIndex].toLowerCase();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (data === null) {
            fetch("https://api.arydigital.tv/v4/schedule.php").then((resp)=>{
                resp.json().then((result)=>{
                    setData(result);
                    setIsLoading(true);
                    console.log("WeekDay is: " + weekdayName);
                });
            });
        }
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "jsx-f335b51a599dc0ef" + " " + "container-fluid pt-1 ScheduleHome",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "jsx-f335b51a599dc0ef" + " " + "scroll-container",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "jsx-f335b51a599dc0ef" + " " + "grid-container",
                        children: isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: data ? data.Schedule.filter((drama)=>drama.dramaDays[weekdayName]).map((drama, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "jsx-f335b51a599dc0ef" + " " + "grid-item",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("center", {
                                        className: "jsx-f335b51a599dc0ef",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            href: {
                                                pathname: "/playlist/" + drama.dramaPlaylist
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "jsx-f335b51a599dc0ef" + " " + "Extra cursor-pointer",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "jsx-f335b51a599dc0ef" + " " + "scheduleContentHome",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                            className: "jsx-f335b51a599dc0ef" + " " + "truncate",
                                                            children: drama.dramaName
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "jsx-f335b51a599dc0ef" + " " + "timings",
                                                            children: drama.dramaTime
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    })
                                }, index)) : null
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "jsx-f335b51a599dc0ef" + " " + "text-black",
                            children: " LOADING... "
                        })
                    })
                })
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "f335b51a599dc0ef",
                children: ".scroll-container.jsx-f335b51a599dc0ef{overflow-x:auto;width:100%;scrollbar-width:thin;scrollbar-color:#fbd003#213087;margin-bottom:2px}.grid-container.jsx-f335b51a599dc0ef{display:grid;grid-template-columns:repeat(5,1fr);gap:1rem;width:-webkit-max-content;width:-moz-max-content;width:max-content}.grid-item.jsx-f335b51a599dc0ef{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;max-width:100%}.scheduleContentHome.jsx-f335b51a599dc0ef{text-align:center;width:100%}.truncate.jsx-f335b51a599dc0ef{white-space:nowrap;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:block;max-width:160px}.timings.jsx-f335b51a599dc0ef{font-size:1rem}@media(max-width:1200px){.grid-container.jsx-f335b51a599dc0ef{grid-template-columns:repeat(4,1fr)}}@media(max-width:992px){.grid-container.jsx-f335b51a599dc0ef{grid-template-columns:repeat(3,1fr)}}@media(max-width:768px){.grid-container.jsx-f335b51a599dc0ef{grid-template-columns:repeat(2,1fr)}}@media(max-width:576px){.grid-container.jsx-f335b51a599dc0ef{grid-template-columns:repeat(1,1fr)}}"
            })
        ]
    });
};


/***/ })

};
;