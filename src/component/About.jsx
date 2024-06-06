// import React from "react";
// import pattern2 from "./../assets/img/pattern2.png";
// import rounded from "./../assets/img/rounded.png";
import ballpattern2 from "./../assets/img/pattern/ballpatternyellow2.svg";
import ballpatternorange from "./../assets/img/pattern/ballpeternorange.svg";

import "./css/About.css";

const About = () => {
  return (
    <div className="about relative overflow-hidden" id="about">
      <div className="text-center relative ">
        <img
          src={ballpattern2}
          className="absolute top-0 left-0 translate-x-[10%] "
          alt=""
        />
      </div>
      <div className=" max-w-7xl px-2 sm:px-6 lg:px-8 mx-auto md:mt-[200px] max-md:mt-[100px] relative ">
        <div className="relative">
          <div className="grid md:grid-cols-2 grid-flow-cols-1 ">
            <div className="w-[80%]">
              <h2 className="md:text-[60px] text-[30px] ">
                Someone{`'s`} talking to me, who am I?
              </h2>
            </div>
            <p className="text-[18px] md:leading-[190%] max-md:text-[14px] text-justify max-md:mt-[50px] text_about slide-left">
              My name is Dico Aji Prasetyo, I am 22 years old, I come from
              Grobogan, Central Java. I graduated from Diponegoro University
              majoring in Informatics. I have interest in website development,
              UI/UX Design and Machine Learning development. I can work
              independently or in a group. I am very interested in getting
              involved in innovative projects that leverage the latest
              technology to increase efficiency and create impactful solutions.
              I am passionate and committed to developing my career in the world
              of technology. I believe that collaboration is the key to
              achieving extraordinary results in any project.
            </p>
          </div>
          <img
            src="https://i.ibb.co.com/v4C6z0w/pattern2.png"
            className="max-md:w-[150px] max-md:mt-[50px]"
            alt=""
          />
        </div>
        <img
          src={ballpatternorange}
          className="absolute right-0 translate-x-[30%] top-0 w-[800px] "
          alt=""
        />
      </div>

      <img
        src="https://i.ibb.co.com/f89BtrK/rounded.png"
        className="absolute max-md:w-[90px] -right-[4%] md:top-[30%] max-md:top-[5%]"
        alt=""
      />
      <div className="blur-about py-[55px] md:mt-[100px] max-md:mt-[50px]  ">
        <div className="grid md:grid-cols-3 grid-cols-1 max-sm:space-y-[40px] ">
          <div className="text-center">
            <h3 className="text-[60px]">20+</h3>
            <p>Repository Project</p>
          </div>
          <div className="text-center max-md:mt-[20px]">
            <h3 className="text-[60px]">3.60/4.00</h3>
            <p>Grade Point Average</p>
          </div>
          <div className="text-center max-md:mt-[20px]">
            <h3 className="text-[60px]">25+</h3>
            <p>Design Project</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
