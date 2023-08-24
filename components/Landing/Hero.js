import React from "react";
import Image from "next/image";
import risk from "../../public/hero/risk.png";

export default function Hero() {
  return (
    <section className="text-gray-600 body-font bg-fixed bg-cover bg-[url('/hero/background.png')]">
      <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Image
            src={risk}
            width={600}
            height={500}
            className="object-cover object-center"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-2xl mb-4 font-semibold text-black ">
            Basel Practitioners Pvt. Ltd
          </h1>
          <h1 className="title-font sm:text-2xl text-lg mb-4 font-semibold text-black">
            <div className="text-black">Know which risk is worth taking</div>
          </h1>
          <p className="mb-8 leading-relaxed py-3 font-medium text-sm text-black sm:text-lg">
            At Basel Practitioners, we strive to build the best-in-class
            products and provide functional and implementation solutions and
            services to change BFSI landscape for better in risk, finance,
            treasury, and insurance domains.
          </p>
        </div>
      </div>
    </section>
  );
}
