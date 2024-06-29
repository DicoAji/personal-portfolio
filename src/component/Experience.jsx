import ballpatternblue from "./../../public/img/pattern/ballpeternorange.svg";
import patterngreen from "./../../public/img/pattern/patterngreen.svg";
import "./css/Experience.css";
import { useEffect, useState } from "react";
import ball from "./../../public/img/ball.png";
import data from "./../../public/data/experience.json";
import patternBlue from "./../../public/img/pattern-blue.png";

const Experience = () => {
  const [dataExperience, setDataExperinece] = useState([]);
  useEffect(() => {
    setDataExperinece(data.experinece);
    // console.log(data.experinece);
  }, []);

  return (
    <div
      className="experience relative max-w-7xl px-2 sm:px-6 lg:px-8 mx-auto md:pt-[200px] max-md:pt-[60px]  "
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
        <h2 className="w-fit md:text-[60px] text-[26px] pb-[5px] uppercase border-b border-fuchsia-600">
          Experiences Journey
        </h2>
      </div>
      <div className="md:mt-[100px] mt-[50px]  md:w-[95%]  mx-auto relative  ">
        {dataExperience.map((experiences, index) => (
          <div key={index} className="sm:mt-[50px] mt-[30px] relative flex ">
            <div className="my-auto max-sm:hidden inline-block p-1 bg-transparent border rounded-full ">
              <p>🔘</p>
            </div>
            <div className="md:ml-5 ml-3 ">
              <h3 className="text-[30px] max-sm:text-[20px]">
                {experiences.position}
              </h3>
              <p className=" text-[18px] max-sm:text-[12px]">
                {" "}
                📍 {experiences.location}
              </p>
              <p className="text-[18px] text-cyan-600 max-sm:text-[12px]">
                {experiences.date}
              </p>
              <p className="md:text-[16px] text-[12px] md:text-justify">
                {experiences.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <img
        src={patternBlue}
        className="absolute max-md:hidden top-[10%] left-[5%] w-[37px]  "
        alt=""
      />
      <div className="absolute right-0 top-0">
        <div className="relative">
          <img
            src={ball}
            className="max-md:hidden right-0 top-0 max-md:-top-[5%] z-10 w-[367px] "
            alt=""
          />
          <img
            src={ball}
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
