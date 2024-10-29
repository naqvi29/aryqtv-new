"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888,195];
exports.modules = {

/***/ 4628:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyApp)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "react-dom"
const external_react_dom_namespaceObject = require("react-dom");
var external_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_react_dom_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__(7544);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
;// CONCATENATED MODULE: ./components/PageChange/PageChange.js


// reactstrap components
// import { Spinner } from "reactstrap";
// core components
function PageChange(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "bg-cover fixed z-40 w-full h-full top-0 left-0",
                style: {
                    backgroundImage: "url('/img/img-1-1000x600.jpg')"
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "top-0 left-0 w-full h-full block z-50 absolute bg-black bg-opacity-50"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "my-32 mx-auto max-w-sm text-center relative z-50 top-0",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "block mb-4",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "fas fa-circle-notch animate-spin text-white mx-auto text-6xl"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                        className: "text-lg font-medium text-white",
                        children: [
                            "Loading page contents for: ",
                            props.path
                        ]
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/Footers/Footer.js

function Footer() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
            className: "relative bg-121212 pt-8 pb-6",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20",
                    style: {
                        transform: "translateZ(0)"
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                        className: "absolute bottom-0 overflow-hidden",
                        xmlns: "http://www.w3.org/2000/svg",
                        preserveAspectRatio: "none",
                        version: "1.1",
                        viewBox: "0 0 2560 100",
                        x: "0",
                        y: "0",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("polygon", {
                            className: "text-yellow fill-current",
                            points: "2560 0 2560 100 0 100"
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container mx-auto px-4",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            class: "flex flex-wrap text-center lg:text-left",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    class: "w-full lg:w-3/12 text-left px-2 py-2",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/img/digital-logo.gif"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            class: "mt-6 lg:mb-0 mb-6",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    target: "_blank",
                                                    href: "https://twitter.com/arydigitalasia?lang=en",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                        class: "bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2",
                                                        type: "button",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            class: "fab fa-twitter"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    target: "_blank",
                                                    href: "https://www.facebook.com/arydigital.tv/",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                        class: "bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2",
                                                        type: "button",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            class: "fab fa-facebook-square"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    target: "_blank",
                                                    href: "https://www.instagram.com/arydigital.tv/?hl=en",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                        class: "bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2",
                                                        type: "button",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            class: "fab fa-instagram"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    target: "_blank",
                                                    href: "https://www.tiktok.com/@arydigitalasia?lang=en",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                        class: "bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2",
                                                        type: "button",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            class: "fab fa-tiktok"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    target: "_blank",
                                                    href: "https://www.snapchat.com/add/arydigital.tv",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                        class: "bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2",
                                                        type: "button",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            class: "fab fa-snapchat"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    target: "_blank",
                                                    href: "https://www.youtube.com/channel/UC4JCksJF76g_MdzPVBJoC3Q",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                        class: "bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2",
                                                        type: "button",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            class: "fab fa-youtube"
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    class: "w-full lg:w-3/12 text-left px-2 py-2",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            class: "block uppercase text-yellow text-sm font-semibold mb-2 ",
                                            children: "About Us"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            class: "text-white font-light",
                                            children: [
                                                "Arydigital.tv, is an online entertainment platform which brings you its very own official and original content of ARY Digital. We are the only site which offers official and original content from all your favorite shows of ARY Digital. ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "/about-us",
                                                    children: " Read More.."
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    class: "w-full lg:w-6/12 text-left",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        class: "flex flex-wrap items-top mb-6 text-left",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                class: "lg:w-4/12 text-left px-2 py-2",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        class: "block uppercase text-yellow text-sm font-semibold mb-2 text-left",
                                                        children: "Useful Links"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        class: "list-unstyled text-left",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    class: "text-white hover:text-black font-semibold block pb-2 text-sm",
                                                                    href: "https://arydigital.tv/",
                                                                    target: "_blank",
                                                                    children: "Home"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    class: "text-white hover:text-black font-semibold block pb-2 text-sm",
                                                                    href: "/about-us/",
                                                                    target: "_blank",
                                                                    children: "About Us"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    class: "text-white hover:text-white-800 font-semibold block pb-2 text-sm",
                                                                    href: "/blogs/",
                                                                    target: "_blank",
                                                                    children: "Blogs"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    class: "text-white hover:text-black font-semibold block pb-2 text-sm",
                                                                    href: "contact-us",
                                                                    target: "_blank",
                                                                    children: "Contact Us"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    class: "text-white hover:text-black font-semibold block pb-2 text-sm",
                                                                    href: "privacy-policy",
                                                                    target: "_blank",
                                                                    children: "Privacy Policy"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                class: "w-full lg:w-4/12 px-2 py-2",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        class: "block uppercase text-yellow text-sm font-semibold mb-2 text-left",
                                                        children: "Download Our App"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        class: "list-unstyled",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    class: "text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm",
                                                                    href: "https://play.google.com/store/apps/details?id=com.aryservices.arydigital&hl=en&gl=US",
                                                                    target: "_blank",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        src: "https://aryzap.com/img/google.png"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    class: "text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm",
                                                                    href: "https://apps.apple.com/in/app/ary-digital/id895703637",
                                                                    target: "_blank",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        src: "https://aryzap.com/img/apple.png"
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                            className: "my-6 border-blueGray-300"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex flex-wrap items-center md:justify-between justify-center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-full md:w-4/12 px-4 mx-auto text-center",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "text-sm text-blueGray-500 font-semibold py-1",
                                    children: [
                                        "Copyright \xa9 ",
                                        new Date().getFullYear(),
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#",
                                            className: "text-blueGray-500 hover:text-blueGray-800",
                                            children: "ARY DIGITAL"
                                        }),
                                        "."
                                    ]
                                })
                            })
                        })
                    ]
                })
            ]
        })
    });
};

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: external "react-bootstrap"
const external_react_bootstrap_namespaceObject = require("react-bootstrap");
;// CONCATENATED MODULE: ./components/Navbars/IndexNavbar.js



// components

function Navbar(props) {
    const [navbarOpen, setNavbarOpen] = external_react_default().useState(false);
    const { 0: searchField , 1: setSearchField  } = (0,external_react_.useState)("");
    const handleChange = (e)=>{
        setSearchField(e.target.value);
    };
    const handleSubmit = (e)=>{
        alert(e.target.query.value);
    // Router.push(`/search/`);
    // <Redirect to="/dashboard" />
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
            className: "top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-181818 shadow",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container px-4 mx-auto flex flex-wrap items-center justify-between",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 whitespace-nowrap uppercase",
                                    href: "#",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        width: "50%",
                                        src: "/img/digital-logo.gif"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none",
                                type: "button",
                                onClick: ()=>setNavbarOpen(!navbarOpen),
                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fas fa-bars"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "lg:flex flex-grow items-center lg:bg-opacity-0 lg:shadow-none " + (navbarOpen ? " block" : " hidden"),
                        id: "example-navbar-warning",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                className: "flex flex-col lg:flex-row list-none mr-auto",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        className: "",
                                        href: "/",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            className: "hover:text-white-500 text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "text-yellow fas fa-home text-md leading-lg mr-2"
                                                }),
                                                " ",
                                                "Home"
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/latestvideos",
                                        className: "",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            className: "flex items-center hover:text-white-500 text-white px-3 py-4 lg:py-2 text-xs uppercase font-bold cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "text-yellow fas fa-video text-md leading-lg mr-2"
                                                }),
                                                " ",
                                                "Latest Videos"
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/on-air",
                                        className: "",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            className: "hover:text-white-500 text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "text-yellow fas fa-file text-md leading-lg mr-2"
                                                }),
                                                " ",
                                                "ON AIR"
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/popularplaylists",
                                        className: "",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            className: "hover:text-white-500 text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "text-yellow fas fa-file text-md leading-lg mr-2"
                                                }),
                                                " ",
                                                "Popular"
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/archiveplaylists",
                                        className: "",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            className: "hover:text-white-500 text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "text-yellow fas fa-archive text-md leading-lg mr-2"
                                                }),
                                                " ",
                                                "Archive"
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/schedule",
                                        className: "",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            className: "hover:text-white-500 text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "text-yellow fas fa-clock text-md leading-lg mr-2"
                                                }),
                                                " ",
                                                "Schedule"
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/blogs",
                                        className: "",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            className: "hover:text-white-500 text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "text-yellow fas fa-clock text-md leading-lg mr-2"
                                                }),
                                                " ",
                                                "EDITORIAL"
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                className: "flex flex-col lg:flex-row list-none lg:ml-auto mobileSocial",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "flex items-center",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "hover:text-blueGray-500 text-blueGray-700 px-1 py-4 lg:py-2 flex items-center text-xs uppercase font-bold",
                                            href: "https://www.facebook.com/arydigital.tv/",
                                            target: "_blank",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "text-blueGray-400 fab fa-facebook leading-lg "
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "flex items-center",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "hover:text-blueGray-500 text-blueGray-700 px-1 py-4 lg:py-2 flex items-center text-xs uppercase font-bold",
                                            href: "https://twitter.com/arydigitalasia?lang=en",
                                            target: "_blank",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "text-blueGray-400 fab fa-twitter leading-lg "
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "flex items-center",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "hover:text-blueGray-500 text-blueGray-700 px-1 py-4 lg:py-2 flex items-center text-xs uppercase font-bold",
                                            href: "https://www.instagram.com/arydigital.tv/?hl=en",
                                            target: "_blank",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "text-blueGray-400 fab fa-instagram leading-lg "
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "flex items-center",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "hover:text-blueGray-500 text-blueGray-700 px-1 py-4 lg:py-2 flex items-center text-xs uppercase font-bold",
                                            href: "https://www.tiktok.com/@arydigitalasia?lang=en",
                                            target: "_blank",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "text-blueGray-400 fab fa-tiktok leading-lg "
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "flex items-center",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "hover:text-blueGray-500 text-blueGray-700 px-1 py-4 lg:py-2 flex items-center text-xs uppercase font-bold",
                                            href: "https://www.youtube.com/channel/UC4JCksJF76g_MdzPVBJoC3Q",
                                            target: "_blank",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "text-blueGray-400 fab fa-youtube leading-lg "
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "flex items-center",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "hover:text-blueGray-500 text-blueGray-700 px-1 py-4 lg:py-2 flex items-center text-xs uppercase font-bold",
                                            href: "https://www.snapchat.com/add/arydigital.tv",
                                            target: "_blank",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "text-blueGray-400 fab fa-snapchat leading-lg"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "flex items-center",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "hover:text-blueGray-500 text-blueGray-700 px-1 py-4 lg:py-2 flex items-center text-xs uppercase font-bold",
                                            href: "https://webmail.arydigital.tv/",
                                            target: "_blank",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "text-blueGray-400 fa fa-envelope leading-lg"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "https://live.arydigital.tv",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "flex items-center",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                className: "bg-yellow text-white active:bg-blueGray-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150",
                                                type: "button",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fas fa-tv"
                                                    }),
                                                    " ",
                                                    " Watch LIVE"
                                                ]
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};

;// CONCATENATED MODULE: ./pages/_app.js












router_default().events.on("routeChangeStart", (url)=>{
    console.log(`Loading: ${url}`);
    document.body.classList.add("body-page-transition");
    external_react_dom_default().render(/*#__PURE__*/ jsx_runtime_.jsx(PageChange, {
        path: url
    }), document.getElementById("page-transition"));
});
router_default().events.on("routeChangeComplete", ()=>{
    external_react_dom_default().unmountComponentAtNode(document.getElementById("page-transition"));
    document.body.classList.remove("body-page-transition");
});
router_default().events.on("routeChangeError", ()=>{
    external_react_dom_default().unmountComponentAtNode(document.getElementById("page-transition"));
    document.body.classList.remove("body-page-transition");
});
class MyApp extends app["default"] {
    static async getInitialProps({ Component , router , ctx  }) {
        let pageProps = {};
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }
        return {
            pageProps
        };
    }
    render() {
        const { Component , pageProps  } = this.props;
        const Layout = Component.layout || (({ children  })=>/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                children: children
            }));
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "viewport",
                            content: "width=device-width, initial-scale=1, shrink-to-fit=no"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("title", {
                            children: "ARY Digital - Watch All ARY Digital Dramas"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("script", {
                            src: "https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {
                    fixed: true
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Layout, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                        ...pageProps
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
            ]
        });
    }
};


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

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_exports__ = __webpack_require__.X(0, [952,664,544], () => (__webpack_exec__(4628)));
module.exports = __webpack_exports__;

})();