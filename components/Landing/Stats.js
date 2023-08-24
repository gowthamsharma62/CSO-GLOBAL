import React from "react";

export default function Stats() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        <div className="w-full max-w-sm px-8 py-4 mt-16 bg-white rounded-lg shadow-lg shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]">
          <div className="flex justify-center -mt-16 md:justify-end">
            <img
              className="object-cover w-32 h-32 rounded-full"
              alt="Testimonial avatar"
              src="/hero/business-team.gif"
            />
          </div>

          <h2 className="mt-2 text-xl font-semibold text-gray-800 md:mt-0 md:text-xl">
            500 Years
          </h2>

          <p className="mt-2 text-sm text-gray-600">
            Combined experience in Risk Management and compliance
          </p>
        </div>

        <div className="w-full max-w-sm px-8 py-4 mt-16 bg-white rounded-lg shadow-lg shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]">
          <div className="flex justify-center -mt-16 md:justify-end">
            <img
              className="object-cover w-32 h-32 rounded-full"
              alt="Testimonial avatar"
              src="/hero/tick.gif"
            />
          </div>

          <h2 className="mt-2 text-xl font-semibold text-gray-800 md:mt-0 md:text-xl">
            3 Months
          </h2>

          <p className="mt-2 text-sm text-gray-600">
            Average implementation time
          </p>
        </div>

        <div className="w-full max-w-sm px-8 py-4 mt-16 bg-white rounded-lg shadow-lg shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]">
          <div className="flex justify-center -mt-16 md:justify-end">
            <img
              className="object-cover w-32 h-32 rounded-full"
              alt="Testimonial avatar"
              src="/hero/business-group.gif"
            />
          </div>

          <h2 className="mt-2 text-xl font-semibold text-gray-800 md:mt-0 md:text-xl">
            Lasting Capability
          </h2>

          <p className="mt-2 text-sm text-gray-600">
            Basel Practitioners has solutions to fit your needs regardless of
            your asset size.
          </p>
        </div>
      </div>
    </>
  );
}
