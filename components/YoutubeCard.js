import React, { useEffect, useState } from "react";
import Image from "next/image";
import Modal from "./Modal";
import ReactPlayer from "react-player";

const YoutubeCard = ({ y_id, title }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="flex flex-col h-full">
      <Modal
        title={title}
        isOpen={isOpen}
        setIsOpen={setOpen}
        callback={() => {
          setOpen(false);
        }}
      >
        <div className="w-full h-[80vh]">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${y_id}`}
            playing={true}
            controls={true}
            width="100%"
            height="100%"
          />
        </div>
      </Modal>
      <div className="bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-3xl">
        <div className="flex-none">
          <div className="mb-3">
            <img
              className="w-full md:h-56 lg:h-40 xl:h-36 2xl:h-40 object-scale-down lg:object-cover rounded-t-2xl"
              src={"https://i.ytimg.com/vi/" + y_id + "/hqdefault.jpg"}
              alt={title}
            />
          </div>
          <div className="flex-auto ml-3 justify-evenly py-2 px-2">
            <div className="flex flex-wrap ">
              <h2 className="flex-auto text-sm sm:text-sm md:text-md lg:text-md xl:text-md font-medium text-cyan-900">
                {title}
              </h2>
            </div>
            <p className="mt-3" />

            <div className="flex p-4 py-1 pb-2 border-t border-gray-200 " />
            <div className="flex space-x-1 text-sm font-medium">
              <div className="flex-auto flex space-x-1">
                <button className="mb-2 md:mb-0 bg-white px-4 py-1 shadow-sm tracking-wider border text-gray-600 rounded-full hover:bg-gray-100 inline-flex items-center space-x-2 ">
                  <span className="text-red-500 hover:text-green-500 rounded-lg ">
                    <div className="w-6 h-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-youtube"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                      </svg>
                    </div>
                  </span>
                </button>
              </div>
              <button
                className="mb-2 md:mb-0 bg-gray-900 px-5 py-2 shadow-sm tracking-wider text-white rounded-full hover:bg-gray-800 text-xs"
                type="button"
                onClick={() => setOpen(true)}
              >
                Watch
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoutubeCard;

/*
    <a
    href={"https://www.youtube.com/watch?v=" + y_id}
    target="_blank"
    rel="noreferrer"
    >
    {" "}
    <span>Youtube</span>
    </a>
*/
