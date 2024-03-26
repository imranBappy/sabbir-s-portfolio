import Head from "next/head";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillFacebook,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Image from "next/image";
import Sabbir from "../public/Sabbir.png";

import { useState } from "react";
import images from "../images";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>{`Welcome to Sharif Nurullah Sabbir's Website`}</title>
        <meta
          name="description"
          content="Imran Hossen Bappy is full stack developer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10  dark:bg-gray-900">
        <section className=" min-h-screen ">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className=" text-xl font-burtons">Imran Hossen</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  className="cursor-pointer text-2xl"
                  onClick={() => setDarkMode(!darkMode)}
                />
              </li>
              <li>
                <a
                  className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="https://drive.google.com/file/d/1Hh83c26OkKC28RlYetYWjvDGr8wwXHQ8/view"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className=" text-5xl py=2 text-teal-600 font-medium">
              Sharif Nurullah Sabbir
            </h2>
            <h3 className="text-2xl py-2 dark:text-white">
              Social Worker | Businessman | Leaner
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200">
              {` Hello, I'm Sharif Nurullah Sabbir, a passionate individual
              dedicated to making a positive impact on society. With a
              background in business and a heart for social work, I strive to
              contribute to the betterment of our community.`}
            </p>
            <div className="text-5xl flex justify-center gap-5 py-3 text-gray-600  dark:text-gray-400">
              <a href="#">
                <AiFillLinkedin />
              </a>
              <a href="https://www.instagram.com/snsabbbir?igsh=MXRhN2RpN2s5czE0cg==">
                <AiFillInstagram />
              </a>
              <a href="http://www.facebook.com/snsabbbir">
                <AiFillFacebook />
              </a>
            </div>
            <div className=" flex  justify-center items-center relative mx-auto rounded-full bg-gradient-to-b  from-teal-500  w-80  h-96 mt-20  overflow-hidden">
              <Image src={Sabbir} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>

        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Photo Gallery</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Here are some of the{" "}
              <span className="text-teal-500"> photos </span> from my recent
              events and social work
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            {images.map((image, index) => (
              <div key={index} className="basis-1/3 flex-1">
                <Image
                  loader={({ src }) => src}
                  loading="lazy"
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={image}
                />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
