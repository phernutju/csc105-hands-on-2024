import React from "react";
import FacebookIcon from "../icon/FacebookIcon.jsx";
import InstagramIcon from "../icon/InstagramIcon.jsx";
import XIcon from "../icon/XIcon.jsx";

const Home = () => {
  return (
    <div id="Home" className="flex flex-col bg-white w-full h-full py-20 items-center justify-center">
      <div className="flex flex-row-reverse items-center justify-center w-full h-full gap-10">
        <div className="PICTURE  justify-center ">
          <img
            src="https://img.freepik.com/free-photo/handsome-man-isolated-white-background_1368-4264.jpg?t=st=1741721796~exp=1741725396~hmac=582f7d7c98031e7cfbf9f95486d8794ee44d78d90891d757e157e689096cc6d3&w=996"
            alt="Artist John"
            className="w-90 rounded-lg "
          />
        </div>

        <div className="w-1/3 space-y-3 p-8">
          <h2 className="font-bold">Hello, It's me</h2>
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">Chotima</h1>
          <h2 className="font-bold">I'm a Student</h2>
          <p className="text-sm">
          Get ready to explore a world of innovation and problem-solving as we dive into the 
          limitless possibilities of technology with Computer Science student.
          </p>
          <div className="flex gap-3 p-2 md:flex md:gap-5">
            <a href="https://www.instagram.com/phernut_?igsh=Z2F5dWs2bzltNmxs&utm_source=qr">
              <FacebookIcon size={40} />
            </a>
            
            <a href="https://www.instagram.com/phernut_?igsh=Z2F5dWs2bzltNmxs&utm_source=qr">
              <InstagramIcon size={40} />
            </a>
            
            <a href="https://www.instagram.com/phernut_?igsh=Z2F5dWs2bzltNmxs&utm_source=qr">
              <XIcon size={40} />
            </a>
          </div>

          <div className="PORFOLIO_Button">
            <button className="bg-green-800 text-white rounded-full py-1 px-8  hover:bg-green-900 shadow-md text-sm font-bold">
              My Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
