import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="text-[#8892b0]" id="about">
      <div className="flex flex-col items-center justify-center mx-auto px-4 sm:px-6">
        <div className="flex items-center pt-16 sm:pt-20 w-full max-w-screen-sm">
          <div className="flex-grow border-t border-red-500"></div>
          <h1 className="mx-4 text-2xl sm:text-4xl text-[#ccd6f6] font-bold">
            About me
          </h1>
          <div className="flex-grow border-t border-red-500"></div>
        </div>
        <div className="w-full max-w-screen-lg flex-col p-6 text-xl flex md:flex-row items-center gap-[40px]">
          <div className="items-center">
            <p className="">
              I am an Electrical Engineering graduate from IIEST Shibpur, I&apos;m
              driven to solve real-world problems using{" "}
              <span className="text-red-500 font-bold">
                Machine Learning and Deep Learning
              </span>
              . My passion lies in building large-scale, high-impact products,
              especially where these technologies can address critical
              challenges in scientific fields like{" "}
              <span className="text-red-500 font-bold">AI in Healthcare</span>.
            </p>
            <div className="mt-6">
              <p>Here are some technologies I have been working with:</p>
              <div className="flex flex-wrap gap-6">
                <ul className="flex flex-col">
                  <li className="li-triangle">Python</li>
                  <li className="li-triangle">Tensorflow</li>
                  <li className="li-triangle">Pandas</li>
                  <li className="li-triangle">Numpy</li>
                  <li className="li-triangle">Scikit-learn</li>
                  <li className="li-triangle">OpenCV</li>
                </ul>
                <ul className="flex flex-col">
                  <li className="li-triangle">React.js/Next.js</li>
                  <li className="li-triangle">Typescript</li>
                  <li className="li-triangle">Django</li>
                  <li className="li-triangle">Javascript</li>
                </ul>
              </div>
            </div>

            <p className="mt-6">
              Outside of work, I&apos;m interested in following the developments of
              science. My fascination extends to technology, where I enjoy deep
              dives into everything from the newest phones and laptops to
              intricate computer hardware and operating systems. I also enjoy
              watching anime, motorsports especially Formula 1 and chess.
              {/* I also watch a lot of Animes, Motor Sports(Formula 1), Chess. */}
            </p>
          </div>
          <div className="p-4 hidden md:flex items-center">
            <Image
              src="/prasanthkumar.jpg"
              alt="Prasanth Kumar"
              width={1000}
              height={1000}
              className="rounded-xl transition-transform duration-300 hover:-translate-y-2 shadow-gray-500 shadow-lg box-border"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
