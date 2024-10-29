"use strict";
exports.id = 414;
exports.ids = [414];
exports.modules = {

/***/ 4414:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PlyrLive)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var hls_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2621);
/* harmony import */ var hls_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hls_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var plyr_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1469);
/* harmony import */ var plyr_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(plyr_react__WEBPACK_IMPORTED_MODULE_3__);




const MyComponentVOD = (props)=>{
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const loadVideo = async ()=>{
            const video = document.getElementById("plyr");
            var hls = new (hls_js__WEBPACK_IMPORTED_MODULE_2___default())();
            hls.loadSource(props.link);
            hls.attachMedia(video);
            // @ts-ignore
            ref.current.plyr.media = video;
            hls.on((hls_js__WEBPACK_IMPORTED_MODULE_2___default().Events.MANIFEST_PARSED), function() {
                ref.current.plyr.play();
            });
        };
        loadVideo();
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((plyr_react__WEBPACK_IMPORTED_MODULE_3___default()), {
        id: "plyr",
        options: {
            volume: 0.1,
            autoplay: false,
            ads: {
                enabled: true,
                publisherId: "6216589748683079",
                tagUrl: "https://pubads.g.doubleclick.net/gampad/ads?iu=/67551462/ARYZap_PR&description_url=http%3A%2F%2Faryzap.com&tfcd=0&npa=0&sz=300x250%7C320x180%7C352x288%7C640x480%7C854x480%7C1280x720&max_ad_duration=60000&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator="
            }
        },
        source: {},
        ref: ref
    });
};
function PlyrLive(props) {
    // const supported = Hls.isSupported();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MyComponentVOD, {
            link: props.link
        })
    });
};


/***/ })

};
;