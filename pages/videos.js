import React from "react";
import { useState } from "react";
import Link from "next/link";
import YoutubeCard from "/components/YoutubeCard";

function Videos() {
  const [search, setSearch] = useState("");

  const videoList = [
    {
      y_id: "oFUcubEjzhw",
      title: "BPPL: Transforming Risk Management",
    },
    {
      y_id: "TkqL24OUMec",
      title: "Farmer's Friend",
    },
    {
      y_id: "e-M-jcJZeSY",
      title: "FRTB Market Risk Capital",
    },
    {
      y_id: "iTxR22MVuog",
      title: "FRTB Implementation Challenges",
    },
    {
      y_id: "7b-uUtrZ5Ac",
      title: "BPPL Credit Risk Calculator",
    },
    {
      y_id: "HOklY4n2n-I",
      title: "FRTB Internal Models Method (IMM)",
    },
    {
      y_id: "ufcyAjxS6f0",
      title: "FRTB Standardized Approach",
    },
    {
      y_id: "rV5HQCBH9DM",
      title: "What is FRTB?",
    },
    {
      y_id: "-zoSs1m3b4k",
      title: "FRTB in the context of Basel IV",
    },
    {
      y_id: "DG67p4vQjKI",
      title: "Data Reconciliation",
    },
    {
      y_id: "IV22HmJ2vZ0",
      title: "Data Integration Framework (ETL)",
    },
    {
      y_id: "KEw3pVGdlZs",
      title: "BPPL Basel in a Box",
    },
    {
      y_id: "WZK2HiyWs0s",
      title: "BPPL Interns",
    },
    {
      y_id: "WmlVrbuyE3Q",
      title: "BPPL Incubator",
    },
    {
      y_id: "WdbWYT2E-2o",
      title: "Demystifying Statistical Modeling",
    },
    {
      y_id: "olEKjL5c3QA",
      title: "Basel Regulatory Capital Landscape",
    },
    {
      y_id: "Co-TGhv3qpk",
      title: "Operational Risk",
    },
    {
      y_id: "O2Gx5degZGI",
      title: "Data Governance is Risk",
    },
    {
      y_id: "ikKqIkLDyCQ",
      title: "What is Data Governance?",
    },
    {
      y_id: "nn1p3Apwz0c",
      title: "Technology to meet Compliance Goals",
    },
    {
      y_id: "jIRFXJD9pY4",
      title: "Basel IV Standardized Approach",
    },
    {
      y_id: "hJqyABXuIy8",
      title: "Basel IV Opportunities & Challenges",
    },
    {
      y_id: "-1DKY4zWNLQ",
      title: "Basel Journey with BPPL",
    },
    {
      y_id: "X8Q3jdDXA1w",
      title: "What is Basel?",
    },
    {
      y_id: "8ovHYKmnrQw",
      title: "Are We Ready for the Next Pandemic?",
    },
    {
      y_id: "9GVn6_-J9eY",
      title: "Basel IV Pillar III Disclosures",
    },
    {
      y_id: "6Q7YryKa9qI",
      title: "SACCR",
    },
    {
      y_id: "FvPJcDnCfBw",
      title: "Basel III Post Crisis Reforms",
    },
    {
      y_id: "KaMAW_q4bcg",
      title: "Capital Adequacy Ratio (CAR)",
    },
  ];

  return (
    <div className="container px-6 py-10 mx-auto">
      <div className="text-center">
        <h1 className="title-font text-3xl font-medium text-gray-800 capitalize lg:text-4xl">
          Videos
        </h1>

        <Link href="https://www.youtube.com/@baselpractitioners">
          <div className="font-semibold max-w-lg mx-auto mt-4 text-gray-900 py-2">
            youtube.com/@baselpractitioners
          </div>
        </Link>
      </div>

      <div className="bg-white p-4 rounded-lg flex justify-center py-5">
        <div className="relative bg-inherit">
          <input
            type="text"
            id="username"
            name="username"
            className="peer bg-transparent h-10 w-36 rounded-lg text-gray-800 placeholder-transparent ring-2 px-2 ring-black focus:ring-black focus:outline-none focus:border-rose-600"
            placeholder="Type inside me"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
          <label
            for="username"
            className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-gray-600 peer-focus:text-sm transition-all"
          >
            Search
          </label>
        </div>
      </div>

      <div className="grid mt-7 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-10 py-5">
        {videoList
          .filter((val) => {
            if (search == "") {
              return val;
            } else if (val.title.toLowerCase().includes(search.toLowerCase())) {
              return val;
            }
          })
          .map((video, index) => {
            return (
              <YoutubeCard key={index} y_id={video.y_id} title={video.title} />
            );
          })}
      </div>
    </div>
  );
}

export default Videos;
