import ballpattern2 from "./../../public/img/pattern/ballpatternyellow2.svg";
import ballpatternorange from "./../../public/img/pattern/ballpeternorange.svg";
import lineRounded from "./../../public/img/line-rounded.png";
import patternYelllow from "./../../public/img/pattern-yellow.png";
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
          <div className="grid lg:grid-cols-2 grid-flow-cols-1 ">
            <div className=" h-fit my-auto w-full">
              <h2 className="md:text-[60px] text-[26px] w-fit uppercase max-sm:mx-auto border-b border-fuchsia-600">
                ABOUT ME
              </h2>
            </div>
            <p className="sm:text-[16px] md:leading-[190%] text-[12px] text-justify mt-[80px] max-sm:mt-[50px]  ">
              My name is Dico Aji Prasetyo, I'm 23 years old, and I come from
              Grobogan, Central Java. I graduated from Diponegoro University
              majoring in Informatics. I'm a civil servant at the Agriculture
              Office of Grobogan Regency, Central Java, Indonesia. I'm also a
              web developer with two years of experience. I'm also interested in
              UI/UX design and machine learning development. I can work both
              independently and in a team. I'm very interested in being involved
              in innovative projects that utilize the latest technology to
              improve efficiency and create impactful solutions.
            </p>
          </div>
          <img
            src={patternYelllow}
            className="max-md:w-[70px] md:mt-[60px] max-md:mt-[50px] -z-10"
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
        className="absolute max-md:w-[70px] -right-[4%] md:top-[30%] max-md:top-[5%]"
        alt=""
      />
      <div className="blur-about sm:py-[55px] py-[20px] md:mt-[100px] max-md:mt-[50px]  ">
        <div className="grid md:grid-cols-3 grid-cols-1 max-sm:space-y-[30px] ">
          <div className="text-center">
            <h3 className="sm:text-[60px] text-[40px] flex mx-auto w-fit">
              <Counter endValue={20} decimalPlaces={0} />+
            </h3>
            <p>Repository Project</p>
          </div>
          <div className="text-center max-md:mt-[20px] ">
            <h3 className="sm:text-[60px] text-[40px] flex w-fit mx-auto">
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
            <h3 className="sm:text-[60px] text-[40px] flex mx-auto w-fit">
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
