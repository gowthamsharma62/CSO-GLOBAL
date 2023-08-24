import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="bg-black">
        <div className="container px-6 py-9 mx-auto">
          <div className="text-center">
            <Link
              href="/"
              className="text-lg xl:text-3xl font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
            >
              Basel Practitioners Pvt. Ltd.
            </Link>

            <div className="py-2 flex flex-wrap justify-center mt-5 -mx-4">
              <Link
                href="/"
                className="text-xs xl:text-lg mx-4 text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
                aria-label="Reddit"
              >
                {" "}
                Home{" "}
              </Link>

              <Link
                href="/services"
                className="text-xs xl:text-lg mx-4 text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
                aria-label="Reddit"
              >
                {" "}
                Products & Services{" "}
              </Link>

              <Link
                href="/services"
                className="text-xs xl:text-lg mx-4 text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
                aria-label="Reddit"
              >
                {" "}
                Videos{" "}
              </Link>

              <Link
                href="/team"
                className="text-xs xl:text-lg mx-4 text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
                aria-label="Reddit"
              >
                {" "}
                Our Team{" "}
              </Link>

              <Link
                href="/contact"
                className="text-xs xl:text-lg mx-4 text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
                aria-label="Reddit"
              >
                {" "}
                Contact Us{" "}
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center sm:flex-row sm:justify-between">
            <p className="py-2 text-xs xl:text-lg text-gray-500 dark:text-gray-300">
              © Copyright 2023. All Rights Reserved.
            </p>

            <div className="flex -mx-2 py-1">
              <Link
                href="https://www.linkedin.com/company/baselpractitioners"
                className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-linkedin"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
              </Link>

              <Link
                href="https://www.youtube.com/@BaselPractitioners"
                className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                aria-label="Youtube"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="currentColor"
                  className="bi bi-youtube"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

/*
  <div className="text-xs text-gray-700">
    <a href="https://www.freepik.com/free-photo/businessman-pointing-his-presentation-futuristic-digital-screen_15556741.htm#query=data%20hand&position=5&from_view=search&track=sph">
      Image by rawpixel.com
    </a>{" "}
    on Freepik
  </div>
*/
