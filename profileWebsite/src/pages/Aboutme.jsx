//rafce
import React from "react";

const Aboutme = () => {
  return (
    <div id="Aboutme" className="flex flex-col bg-white w-full h-full py-10 px-6 items-center ">

      <div className="flex flex-col md:flex-row items-center justify-center w-full h-full gap-6">
        <div className="PICTURE justify-center flex  w-full md:w-1/2 mt-6">
          <img
            src="https://img.freepik.com/free-photo/artist-white_1368-3543.jpg?t=st=1741720244~exp=1741723844~hmac=0a0433a1310019b38c4c0292c03180c105a2b41dfc8e25ad4e0a4adef23b0817&w=996"
            alt="Chotima"
            className="w-90 md:rounded-lg"
          />
        </div>

        <div className="TEXT space-y-4 gap-2 p-8 md:w-1/3">
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">About Me</h1>
          <h2 className="font-semibold md:font-bold ">Computer Science Student</h2>
          <p className="text-sm">
          Passionate about technology and problem-solving, I thrive in the world of algorithms, data structures, 
          and software development. With a keen eye for innovation, I strive to build efficient and scalable solutions that 
          push the boundaries of modern computing
          </p>

          <div className="BUTTON">
            <button className="bg-green-800 text-white rounded-full py-1 px-8 font- hover:bg-green-900 shadow-md text-bold font-bold ">
              Read More
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Aboutme;
