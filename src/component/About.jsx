// import React from "react";
// import pattern2 from "./../assets/img/pattern2.png";
// import rounded from "./../assets/img/rounded.png";
import ballpattern2 from "./../assets/img/pattern/ballpatternyellow2.svg";
import ballpatternorange from "./../assets/img/pattern/ballpeternorange.svg";
import lineRounded from "./../assets/img/line-rounded.png";
import patternYelllow from "./../assets/img/pattern-yellow.png";
import "./css/About.css";

import { useEffect, useRef } from "react";
import { CountUp } from "countup.js";

const Counter = ({ endValue, decimalPlaces = 0, duration = 2 }) => {
  const countUpRef = useRef(null);

  useEffect(() => {
    const handleScroll = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const countUp = new CountUp(countUpRef.current, endValue, {
            decimalPlaces,
            duration,
          });
          if (!countUp.error) {
            countUp.start();
          } else {
            console.error(countUp.error);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleScroll, {
      threshold: 0.2, // Adjust this value to determine when the counter should start
    });

    if (countUpRef.current) {
      observer.observe(countUpRef.current);
    }

    return () => {
      if (countUpRef.current) {
        observer.unobserve(countUpRef.current);
      }
    };
  }, [endValue, decimalPlaces, duration]);

  return <h3 ref={countUpRef}>0</h3>;
};

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
            <p className="text-[18px] md:leading-[190%] max-md:text-[14px] text-justify max-md:mt-[50px] text_about ">
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
            src={patternYelllow}
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
        src={lineRounded}
        className="absolute max-md:w-[90px] -right-[4%] md:top-[30%] max-md:top-[5%]"
        alt=""
      />
      <div className="blur-about py-[55px] md:mt-[100px] max-md:mt-[50px]  ">
        <div className="grid md:grid-cols-3 grid-cols-1 max-sm:space-y-[40px] ">
          <div className="text-center">
            <h3 className="text-[60px] flex mx-auto w-fit">
              <Counter endValue={20} decimalPlaces={0} />+
            </h3>
            <p>Repository Project</p>
          </div>
          <div className="text-center max-md:mt-[20px] ">
            <h3 className="text-[60px] flex  w-fit mx-auto">
              <Counter
                className="inline-block"
                endValue={3.6}
                decimalPlaces={2}
              />
              <span className="inline">/4.00</span>
            </h3>
            <p>Grade Point Average</p>
          </div>
          <div className="text-center max-md:mt-[20px]">
            <h3 className="text-[60px] flex mx-auto w-fit">
              <Counter endValue={25} decimalPlaces={0} />+
            </h3>
            <p>Design Project</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;