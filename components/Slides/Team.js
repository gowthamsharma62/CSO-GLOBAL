import React from "react";
import Link from "next/link";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination } from "swiper";

export default function Team() {
  SwiperCore.use([Autoplay]);
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        setWrapperSize={true}
        modules={[Pagination, Navigation]}
        className="mySwiper bg-[url('/hero/map.png')] bg-cover xl:h-full bg-fixed non-footer-container"
        autoplay={{
          delay: 20000,
          disableOnInteraction: false,
        }}
        navigation={true}
      >
        <SwiperSlide>
          <div className="flex justify-center py-10">
            <section>
              <div className="container px-6 mx-auto">
                <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">
                  Executive Directors
                </h1>

                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-10 md:grid-cols-2 xl:grid-cols-4">
                  <div className="bg-white flex border shadow-lg flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer rounded-xl hover:border-transparent group hover:bg-gray-100 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
                    <Link href="https://www.linkedin.com/in/davidmichaelcole/">
                      <img
                        className="object-cover w-24 h-24 lg:w-40 lg:h-40 rounded-full ring-gray-300"
                        src="/team/cole.png"
                        alt=""
                      />
                    </Link>
                    <h1 className="mt-4 text-lg lg:text-xl font-semibold capitalize">
                      David M Cole
                    </h1>
                    <p className="flex justify-center mt-2 text-sm lg:text-md text-gray-500 capitalize">
                      Board of Director, BPPL
                    </p>
                  </div>

                  <div className="bg-white flex border shadow-lg flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer rounded-xl hover:border-transparent group hover:bg-gray-100 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
                    <Link href="https://www.linkedin.com/in/jaycpanchal/">
                      <img
                        className="object-cover w-24 h-24 lg:w-40 lg:h-40 rounded-full ring-gray-300"
                        src="/team/panchal.png"
                        alt=""
                      />
                    </Link>
                    <h1 className="mt-4 text-lg lg:text-xl font-semibold capitalize">
                      Jay Panchal
                    </h1>
                    <p className="flex justify-center mt-2 text-sm lg:text-md text-gray-500 capitalize">
                      Technology Head at BPPL
                    </p>
                  </div>

                  <div className="bg-white flex border shadow-lg flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer rounded-xl hover:border-transparent group hover:bg-gray-100 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
                    <Link href="https://www.linkedin.com/in/rellasriram/">
                      <img
                        className="object-cover w-24 h-24 lg:w-40 lg:h-40 rounded-full ring-gray-300"
                        src="/team/sriram.png"
                        alt=""
                      />
                    </Link>
                    <h1 className="mt-4 text-lg lg:text-xl font-semibold capitalize">
                      Sriram Rella
                    </h1>
                    <p className="flex justify-center mt-2 text-sm lg:text-md text-gray-500 capitalize">
                      CS Student @ Georgia Tech
                    </p>
                  </div>

                  <div className="bg-white flex border shadow-lg flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer rounded-xl hover:border-transparent group hover:bg-gray-100 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
                    <Link href="">
                      <img
                        className="object-cover w-24 h-24 lg:w-40 lg:h-40 rounded-full ring-gray-300"
                        src="/team/ashwini.png"
                        alt=""
                      />
                    </Link>
                    <h1 className="mt-4 text-lg lg:text-xl font-semibold capitalize">
                      Ashwini Kundapura
                    </h1>
                    <p className="flex justify-center mt-2 text-sm lg:text-md text-gray-500 capitalize">
                      MBA
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center py-2">
            <section>
              <div className="container px-6 mx-auto">
                <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">
                  Advisory Board
                </h1>

                <div className="grid grid-cols-1 gap-3 mt-8 xl:mt-2 md:grid-cols-2 xl:grid-cols-3">
                  <div className="bg-white flex border shadow-lg flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer rounded-xl hover:border-transparent group hover:bg-gray-100 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
                    <Link href="">
                      <img
                        className="object-cover w-24 h-24 lg:w-40 lg:h-40 rounded-full ring-gray-300"
                        src="/team/kannan.png"
                        alt=""
                      />
                    </Link>
                    <h1 className="mt-4 text-lg lg:text-xl font-semibold capitalize">
                      V Kannan
                    </h1>
                    <p className="flex justify-center mt-2 text-sm lg:text-md text-gray-500 capitalize">
                      Ex - C&MD of Vijaya Bank, India
                    </p>
                  </div>

                  <div className="bg-white flex border shadow-lg flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer rounded-xl hover:border-transparent group hover:bg-gray-100 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
                    <Link href="https://www.linkedin.com/in/shashikala-ramachandra-05168620/">
                      <img
                        className="object-cover w-24 h-24 lg:w-40 lg:h-40 rounded-full ring-gray-300"
                        src="/team/shashikala.png"
                        alt=""
                      />
                    </Link>
                    <h1 className="mt-4 text-lg lg:text-xl font-semibold capitalize">
                      Shashikala Ramachandra
                    </h1>
                    <p className="flex justify-center mt-2 text-sm lg:text-md text-gray-500 capitalize">
                      Retired Chief Risk Officer, Canara Bank, India
                    </p>
                  </div>

                  <div className="bg-white flex border shadow-lg flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer rounded-xl hover:border-transparent group hover:bg-gray-100 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
                    <Link href="https://www.linkedin.com/in/sssatchidananda/">
                      <img
                        className="object-cover w-24 h-24 lg:w-40 lg:h-40 rounded-full ring-gray-300"
                        src="/team/professor.png"
                        alt=""
                      />
                    </Link>
                    <h1 className="mt-4 text-lg lg:text-xl font-semibold capitalize">
                      Prof. Satchidananda
                    </h1>
                    <p className="flex justify-center mt-2 text-sm lg:text-md text-gray-500 capitalize">
                      Founder & CEO, at Srichid Blockchain Services
                    </p>
                  </div>

                  <div className="bg-white flex border shadow-lg flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer rounded-xl hover:border-transparent group hover:bg-gray-100 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
                    <Link href="https://www.linkedin.com/in/ramananthula/">
                      <img
                        className="object-cover w-24 h-24 lg:w-40 lg:h-40 rounded-full ring-gray-300"
                        src="/team/ananthula.png"
                        alt=""
                      />
                    </Link>
                    <h1 className="mt-4 text-lg lg:text-xl font-semibold capitalize">
                      Ram Ananthula
                    </h1>
                    <p className="flex justify-center mt-2 text-sm lg:text-md text-gray-500 capitalize">
                      Senior Solutions Architect - Banking Data Warehousing
                    </p>
                  </div>

                  <div className="bg-white flex border shadow-lg flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer rounded-xl hover:border-transparent group hover:bg-gray-100 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
                    <Link href="https://www.linkedin.com/in/narendra-singhal-2b99a521/">
                      <img
                        className="object-cover w-24 h-24 lg:w-40 lg:h-40 rounded-full ring-gray-300"
                        src="/team/singhal.png"
                        alt=""
                      />
                    </Link>
                    <h1 className="mt-4 text-lg lg:text-xl font-semibold capitalize">
                      Narendra Singhal
                    </h1>
                    <p className="flex justify-center mt-2 text-sm lg:text-md text-gray-500 capitalize">
                      Former CRO & General Manager PNB,India
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center py-10">
            <section>
              <div className="container px-6 mx-auto">
                <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">
                  Non Executive Professional Directors
                </h1>

                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-10 md:grid-cols-2 xl:grid-cols-2">
                  <div className="bg-white flex border shadow-lg flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer rounded-xl hover:border-transparent group hover:bg-gray-100 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
                    <Link href="">
                      <img
                        className="object-cover w-24 h-24 lg:w-40 lg:h-40 rounded-full ring-gray-300"
                        src="/team/klsnrao.png"
                        alt=""
                      />
                    </Link>
                    <h1 className="mt-4 text-lg lg:text-xl font-semibold capitalize">
                      KLSN Rao
                    </h1>
                    <p className="flex justify-center mt-2 text-sm lg:text-md text-gray-500 capitalize">
                      Principal, SIBSTC
                    </p>
                  </div>

                  <div className="bg-white flex border shadow-lg flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer rounded-xl hover:border-transparent group hover:bg-gray-100 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
                    <Link href="">
                      <img
                        className="object-cover w-24 h-24 lg:w-40 lg:h-40 rounded-full ring-gray-300"
                        src="/team/asnrao.png"
                        alt=""
                      />
                    </Link>
                    <h1 className="mt-4 text-lg lg:text-xl font-semibold capitalize">
                      A S Nageshwar Rao
                    </h1>
                    <p className="flex justify-center mt-2 text-sm lg:text-md text-gray-500 capitalize">
                      Independent Director. Past chairman/ICAI Chapter
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
