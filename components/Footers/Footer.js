

export default function Footer() {
  return (
    <>
      <footer className="relative bg-qtv pt-8 pb-6">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gold  fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div class="flex flex-wrap text-center lg:text-left">
            <div class="w-full lg:w-3/12 text-left px-2 py-2">
              <img src="/img/aryqtv.jpg" />
              <div class="mt-6 lg:mb-0 mb-6">
                <a  target="_blank" href="https://twitter.com/aryqtv">
                  <button class="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                    <i class="fab fa-twitter"></i>
                  </button>
                </a>
                <a  target="_blank" href="https://www.facebook.com/ARYQTV/">
                  <button class="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                    <i class="fab fa-facebook-square"></i>
                  </button>
                </a>
                <a  target="_blank" href="https://www.instagram.com/aryqtv/">
                  <button class="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                    <i class="fab fa-instagram"></i>
                  </button>
                </a>
                {/* <a  target="_blank" href="https://www.tiktok.com/@arydigitalasia?lang=en">
                  <button class="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                    <i class="fab fa-tiktok"></i>
                  </button>
                </a>
                
                <a  target="_blank" href="https://www.snapchat.com/add/arydigital.tv">
                  <button class="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                    <i class="fab fa-snapchat"></i>
                  </button>
                </a> */}
                <a  target="_blank" href="https://www.youtube.com/channel/UCE2oY4S4wOu6WofU2YbfWsw">
                  <button class="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                    <i class="fab fa-youtube"></i>
                  </button>
                </a>
              </div>
            </div>
            <div class="w-full lg:w-3/12 text-left px-2 py-2">
              <span class="block uppercase text-white2  text-sm font-semibold mb-2 ">About Us</span>
              <p class="text-white2 font-light">ARY QTV has a vision of providing the best in terms of religious enlightenment of spirituality and the knowledge about the faith of Islam. <a href="/about-us"> Read More..</a>
              </p>
            </div>
            <div class="w-full lg:w-6/12 text-left">
              <div class="flex flex-wrap items-top mb-6 text-left">
                <div class="lg:w-4/12 text-left px-2 py-2">
                  <span class="block uppercase text-white2  text-sm font-semibold mb-2 text-left">Useful Links</span>
                  <ul class="list-unstyled text-left">
                    <li>
                      <a class="text-white2 hover:text-black font-semibold block pb-2 text-sm" href="https://arydigital.tv/" target="_blank">Home</a>
                    </li>
                    <li>
                      <a class="text-white2 hover:text-black font-semibold block pb-2 text-sm" href="/about-us/" target="_blank">About Us</a>
                    </li>
                    <li>
                      <a class="text-white2 hover:text-white-800 font-semibold block pb-2 text-sm" href="/schedule" target="_blank">Schedule</a>
                    </li>
                    <li>
                      <a class="text-white2 hover:text-black font-semibold block pb-2 text-sm" href="contact-us" target="_blank">Contact Us</a>
                    </li>
                    <li>
                      <a class="text-white2 hover:text-black font-semibold block pb-2 text-sm" href="privacy-policy" target="_blank">Privacy Policy</a>
                    </li>
                  </ul>
                </div>
                <div class="w-full lg:w-4/12 px-2 py-2">
                  <span class="block uppercase text-white2  text-sm font-semibold mb-2 text-left">Download Our App</span>
                  <ul class="list-unstyled">
                    <li>
                      <a class="text-white2 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://play.google.com/store/apps/details?id=com.aryservices.qtv&hl=en"  target="_blank">
                        <img src="https://aryzap.com/img/google.png" />
                      </a>
                    </li>
                    <li>
                      <a class="text-white2 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://apps.apple.com/pk/app/ary-qtv-app/id1330604385" target="_blank">
                        <img src="https://aryzap.com/img/apple.png" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300 text-black" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1 text-white2">
                Copyright © {new Date().getFullYear()}{" "}
                <a
                  href="#"
                  className="text-blueGray-500 hover:text-blueGray-800 text-white2"
                >
                  ARY QTV
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
