import Head from "next/head";
import Hero from "../components/Landing/Hero";
import About from "../components/Landing/About";
import Stats from "../components/Landing/Stats";
import Features from "../components/Landing/Features";
import Landing from "../components/Slides/Landing";

export default function Home() {
  return (
    <>
      <Head>
        <title>Basel Practitioners</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
      <Landing />
      </div>
    </>
  );
}

/*
        <Demo/>
        <About />
        <div className="py-20 flex justify-center <div bg-fixed bg-cover bg-[url('/hero/map.png')]">
          <Stats />
        </div>
        <Features />
*/
