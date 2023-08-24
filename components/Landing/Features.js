import React from "react";

export default function Features() {
  return (
    <>
      <section className="bg-white py-10">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl">
            Collaboration Opportunities and Other Services
          </h1>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
            <div className="border-2 rounded-2xl shadow-md flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl">
              <span className="inline-block p-3 text-red-500 bg-red-100 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-globe-americas"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484-.08.08-.162.158-.242.234-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z" />
                </svg>
              </span>

              <p className="text-black text-sm font-medium">
                BPPL can be an extension to a partner organization in North
                America. It can also work as a partner to jointly work and
                provide services on demand basis.
              </p>
            </div>

            <div className="border-2 rounded-2xl shadow-md flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl">
              <span className="inline-block p-3 text-red-500 bg-red-100 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-window-dock"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.5 11a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm3.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm4.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Z" />
                  <path d="M14 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h12ZM2 14h12a1 1 0 0 0 1-1V5H1v8a1 1 0 0 0 1 1ZM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2Z" />
                </svg>
              </span>

              <p className="text-black text-sm font-medium">
                BPPL can also provide in Oracle-OFSAA application,
                infrastructure, or FSDF/OIDF data model
                engagement/consulting/implementation.
              </p>
            </div>

            <div className="border-2 rounded-2xl shadow-md flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl">
              <span className="inline-block p-3 text-red-500 bg-red-100 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-file-earmark"
                  viewBox="0 0 16 16"
                >
                  <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z" />
                </svg>
              </span>

              <p className="text-black text-sm font-medium">
                BPPL can help to provide the professional material/White papers
                in Banking and insurance regulations and de-mystifying banking
                regulatory guidelines.
              </p>
            </div>

            <div className="border-2 rounded-2xl shadow-md flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl">
              <span className="inline-block p-3 text-red-500 bg-red-100 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-person"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                </svg>
              </span>

              <p className="text-black text-sm font-medium">
                BPPL can also provide on-demand training to your resources on
                various banking regulations.
              </p>
            </div>

            <div className="border-2 rounded-2xl shadow-md flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl">
              <span className="inline-block p-3 text-red-500 bg-red-100 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-bar-chart"
                  viewBox="0 0 16 16"
                >
                  <path d="M4 11H2v3h2v-3zm5-4H7v7h2V7zm5-5v12h-2V2h2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3z" />
                </svg>
              </span>

              <p className="text-black text-sm font-medium">
                BPPL can help builiding Risk models based on latest banking
                regulations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
