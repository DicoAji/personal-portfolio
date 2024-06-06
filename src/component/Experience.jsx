// import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import CSS untuk carousel
// import { Carousel } from "react-responsive-carousel";
import ballpatternblue from "./../assets/img/pattern/ballpeternorange.svg";
import patterngreen from "./../assets/img/pattern/patterngreen.svg";
import "./css/Experience.css";
import { useEffect, useState } from "react";

import data from "./../assets/data/experience.json";

const Experience = () => {
  const [dataExperience, setDataExperinece] = useState([]);
  useEffect(() => {
    setDataExperinece(data.experinece);
    // console.log(data.experinece);
  }, []);

  return (
    <div
      className="experience relative max-w-7xl px-2 sm:px-6 lg:px-8 mx-auto md:pt-[200px] max-md:pt-[100px]  "
      id="experience"
    >
      <div className="relative">
        <img
          src={patterngreen}
          className="absolute top-0 left-0 -translate-y-[80%] -z-10  w-[100%]"
          alt=""
        />
      </div>
      <div className="flex justify-center">
        <h2 className="w-fit md:text-[60px] text-[30px] pb-[5px] border-b border-fuchsia-600">
          Experiences Journey
        </h2>
      </div>
      <div className="md:mt-[100px] mt-[80px]  w-[95%] mx-auto relative slide-left  ">
        {dataExperience.map((experiences, index) => (
          <div key={index} className="mt-[50px] relative flex ">
            <div className="my-auto inline-block  p-2 bg-transparent border rounded-full ">
              <p>🔘</p>
              {/* <img src={bagwork} className="w-[40px]" alt="" /> */}
            </div>

            <div className="ml-6 ">
              <h3 className="text-[30px] uppercase">{experiences.position}</h3>
              <p className=" text-[20px] "> 📍 {experiences.location}</p>
              <p className="text-[20px] text-cyan-600">{experiences.date}</p>
              <p className="tex-[20px] text-justify">
                {experiences.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <img
        src="https://i.ibb.co.com/j6K1j69/pattern1.png"
        className="absolute max-md:hidden top-[10%] left-[5%] w-[37px]  "
        alt=""
      />
      <div className="absolute right-0 top-0">
        <div className="relative">
          <img
            src="https://i.ibb.co.com/CHYG7Mg/ball.png"
            className="max-md:hidden right-0 top-0 max-md:-top-[5%] z-10 w-[367px] "
            alt=""
          />
          <img
            src="https://i.ibb.co.com/CHYG7Mg/ball.png"
            className=" absolute right-[0px] top-0 max-md:-top-[5%] z-10 w-[150px] "
            alt=""
          />
        </div>
      </div>
      <img
        src={ballpatternblue}
        className="absolute left-0 top-0 -translate-x-[50%] -z-10 w-[1503px]"
        alt=""
      />
    </div>
  );
};

export default Experience;
