import React from "react";
import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination } from "swiper";
import ModalCard from "../../components/ModalCard";

export default function Landing() {
  SwiperCore.use([Autoplay]);

  const [clicked, setClicked] = useState(false);
  const [card1, setCard1] = useState(false);
  const [card2, setCard2] = useState(false);
  const [card3, setCard3] = useState(false);
  const [card4, setCard4] = useState(false);

  const handleClick1 = (e) => {
    e.preventDefault();
    setClicked(true);
    setCard1(true);
  };

  const handleClick2 = (e) => {
    e.preventDefault();
    setClicked(true);
    setCard2(true);
  };

  const handleClick3 = (e) => {
    e.preventDefault();
    setClicked(true);
    setCard3(true);
  };

  const handleClick4 = (e) => {
    e.preventDefault();
    setClicked(true);
    setCard4(true);
  };

  const goBack = (e) => {
    e.preventDefault();
    setClicked(false);
    setCard1(false);
    setCard2(false);
    setCard3(false);
    setCard4(false);
  };

  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        setWrapperSize={true}
        modules={[Pagination, Navigation]}
        className="mySwiper bg-[url('/hero/background4.png')] bg-cover xl:h-full bg-fixed non-footer-container flex items-center"
        autoplay={{
          delay: 20000,
          disableOnInteraction: false,
        }}
        navigation={true}
      >
        <SwiperSlide>
          <div className="flex justify-center">
            <img
              className="object-cover px-10 items-center"
              width={1280}
              height={500}
              src="/slides/services/1.png"
              alt="image slide 1"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center">
            <img
              className="object-cover px-10 items-center"
              width={1280}
              height={500}
              src="/slides/services/2.png"
              alt="image slide 1"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center">
            <img
              className="object-cover px-10 items-center"
              width={1280}
              height={500}
              src="/slides/services/3.png"
              alt="image slide 1"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center">
            <img
              className="object-cover px-10 items-center"
              width={1280}
              height={500}
              src="/slides/services/4.png"
              alt="image slide 1"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center">
            <img
              className="object-cover px-10 items-center"
              width={1280}
              height={500}
              src="/slides/services/6.png"
              alt="image slide 1"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center">
            <img
              className="object-cover px-10 items-center"
              width={1280}
              height={500}
              src="/slides/services/7.png"
              alt="image slide 1"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center py-10">
            <div>
              <div className="max-w-3xl w-screen px-8 bg-white border border-2 border-black rounded-lg shadow-md">
                <div className="flex justify-center items-center">
                  <div className="p-1.5 w-full inline-block sm:w-auto overflow-hidden bg-white rounded-lg ">
                    <div className="space-y-2 sm:space-y-0 sm:flex sm:-mx-1 py-1">
                      <div className="w-full px-4 py-1 text-black font-bold text-2xl transition-colors duration-300 transform rounded-md focus:outline-none sm:w-auto sm:mx-1">
                        Services
                      </div>

                      {clicked == true && (
                        <button
                          onClick={goBack}
                          className="w-full px-4 py-1 text-white transition-colors duration-300 transform bg-blue-600 rounded-md focus:outline-none sm:w-auto sm:mx-1 hover:bg-blue-500 focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                        >
                          Go Back
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {clicked == false && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 flex justify-center gap-11 py-10">
                    <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
                      <div className="w-80 h-44 hidden lg:block bg-[url('/slides/services/risk.png')] bg-center bg-cover rounded-lg shadow-md"></div>

                      <div className="w-56 -mt-10 overflow-hidden bg-black rounded-lg shadow-lg md:w-80">
                        <h3 className="py-2 text-xs font-bold tracking-wide text-center text-white">
                          Risk and Capital Management
                        </h3>

                        <div className="flex items-center justify-center px-3 py-2 bg-black">
                          <button
                            onClick={handleClick1}
                            className="px-2 py-1 text-xs font-semibold text-black uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-700 focus:bg-gray-700 focus:outline-none"
                          >
                            Read More
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
                      <div className="w-80 h-44 hidden lg:block bg-[url('/slides/services/compliance.png')] bg-center bg-cover rounded-lg shadow-md"></div>

                      <div className="w-56 -mt-10 overflow-hidden bg-black rounded-lg shadow-lg md:w-80">
                        <h3 className="py-2 text-xs font-bold tracking-wide text-center text-white">
                          Regulatory Reporting and Compliance
                        </h3>

                        <div className="flex items-center justify-center px-3 py-2 bg-black">
                          <button
                            onClick={handleClick2}
                            className="px-2 py-1 text-xs font-semibold text-black uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-700 focus:bg-gray-700 focus:outline-none"
                          >
                            Read More
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
                      <div className="w-80 h-44 hidden lg:block bg-[url('/slides/services/dq.png')] bg-center bg-cover rounded-lg shadow-md"></div>

                      <div className="w-56 -mt-10 overflow-hidden bg-black rounded-lg shadow-lg md:w-80">
                        <h3 className="py-2 text-xs font-bold tracking-wide text-center text-white">
                          Risk Data Quality and Governance
                        </h3>

                        <div className="flex items-center justify-center px-3 py-2 bg-black">
                          <button
                            onClick={handleClick3}
                            className="px-2 py-1 text-xs font-semibold text-black uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-700 focus:bg-gray-700 focus:outline-none"
                          >
                            Read More
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
                      <div className="w-80 h-44 hidden lg:block bg-[url('/slides/services/change.png')] bg-center bg-cover rounded-lg shadow-md"></div>

                      <div className="w-56 -mt-10 overflow-hidden bg-black rounded-lg shadow-lg md:w-80">
                        <h3 className="py-2 text-xs font-bold tracking-wide text-center text-white">
                          Risk Chance Management
                        </h3>

                        <div className="flex items-center justify-center px-3 py-2 bg-black">
                          <button
                            onClick={handleClick4}
                            className="px-2 py-1 text-xs font-semibold text-black uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-700 focus:bg-gray-700 focus:outline-none"
                          >
                            Read More
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {clicked == true && card1 == true && (
                  <>
                    <div className=" flex justify-center gap-10 py-5">
                      <div className="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md px-6 py-3 bg-gray-200 text-black rounded-lg">
                        <a className="text-md font-bold text-gray-700 hover:text-gray-600">
                          Basel III, IV Training Programmes
                        </a>

                        <ul className="list-disc">
                          <li className="py-2 text-sm">
                            With ever dynamic eco system pounded by frequently
                            emerging crisis situations, the Regulators across
                            the world constantly revamp guidelines and policies
                            to safeguard both the financial eco system and the
                            institutions themselves.
                          </li>
                          <li className="py-2 text-sm">
                            Our panel of experts, quickly assess and interpret
                            the changes , prepare relevant and updated knowledge
                            materials.
                          </li>
                          <li className="py-2 text-sm">
                            Our experts also offer customized training
                            programmes as per the requirements of the
                            institutions.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className=" flex justify-center gap-10 py-5">
                      <div className="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md px-6 py-3 bg-gray-200 text-black rounded-lg">
                        <a className="text-md font-bold text-gray-700 hover:text-gray-600">
                          Risk Strategy Consulting
                        </a>

                        <ul className="list-disc">
                          <li className="py-2 text-sm">
                            Our experts with their rich experience on Risk
                            strategy and Management help in redefining the Risk
                            strategy of the institutions to align to their
                            internal appetite and tolerance thresholds and also
                            simultaneously ensuring Industry best practices and
                            Regulatory compliance.
                          </li>
                          <li className="py-2 text-sm">
                            As part of this our experts will help our clients in
                            setting up/ revamping Basel Pillar 2 Requirements –
                            ICAAP and ILAAP frameworks and ever emerging Stress
                            testing requirements and Framework definitions.
                          </li>
                          <li className="py-2 text-sm">
                            We also have a strong team of Climate Risk experts
                            to partner with the Financial Institutions on
                            Portfolio and Exposure realignment strategies and
                            revamping the Risk Strategy in alignment to Climate
                            Risk demands.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </>
                )}

                {clicked == true && card2 == true && (
                  <div className="flex justify-center gap-10 py-10">
                    <div className="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md px-6 py-3 bg-gray-200 text-black rounded-lg">
                      <a className="text-md font-bold text-gray-700 hover:text-gray-600">
                        Review of Reporting Framework and MIS
                      </a>

                      <ul className="list-disc">
                        <li className="py-2 text-sm">
                          We have subject matter experts in Regulatory reporting
                          including COREP (or Credit Risk Reporting), Pillar 3,
                          Large Exposures, Leverage and Capital Adequacy.
                        </li>
                        <li className="py-2 text-sm">
                          Our experts help the clients in revamping/setting up
                          of the reporting platforms and frameworks by
                          conducting a thorough review of the data flow and
                          Taxonomy alignment.
                        </li>
                        <li className="py-2 text-sm">
                          We also offer customized training to the final
                          institutions which are setting up the reporting
                          frameworks for the first time (New Pillar 3 templates
                          on Climate Risk, NBFIs in India adopting Pillar 3).
                        </li>
                      </ul>
                    </div>
                  </div>
                )}

                {clicked == true && card3 == true && (
                  <div className="flex justify-center gap-10 py-10">
                    <div className="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md px-6 py-3 bg-gray-200 text-black rounded-lg">
                      <a className="text-md font-bold text-gray-700 hover:text-gray-600">
                        Risk Data Quality and Governance
                      </a>

                      <ul className="list-disc">
                        <li className="py-2 text-sm">
                          Our functional and technical expertise in Data Quality
                          and Governance can be leveraged to establish an end to
                          end Risk Data Management Framework.
                        </li>
                        <li className="py-2 text-sm">
                          Our integrated Data Quality solutions – has inbuilt
                          capabilities for the clients to configure Data Quality
                          Rules, Define and perform Data reconciliation, Perform
                          Data adjustments and perform predictive data analytics
                          on a single platform.
                        </li>
                        <li className="py-2 text-sm">
                          We help our clients to establish end to end data
                          lineage to align to BCBS239 principles.
                        </li>
                      </ul>
                    </div>
                  </div>
                )}

                {clicked == true && card4 == true && (
                  <div className="flex justify-center gap-10 py-10">
                    <div className="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md px-6 py-3 bg-gray-200 text-black rounded-lg">
                      <a className="text-md font-bold text-gray-700 hover:text-gray-600">
                        Change management risk assessment and management
                      </a>

                      <ul className="list-disc">
                        <li className="py-2 text-sm">
                          Our panel of change management experts help the
                          clients manage complex changes in the Risk
                          architecture (both functional and technical) which are
                          triggered both by internal policy changes or external
                          factors in the eco system.
                        </li>
                        <li className="py-2 text-sm">
                          We support the entire life cycle of change right from
                          independent and effective initial analysis to
                          implementation and effective post implementation
                          support.
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
