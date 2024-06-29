import "./css/Hero.css";
import pattern1 from "./../../public/img/pattern/ballpatternyellow.svg";
import ballpeternblue from "./../../public/img/pattern/ballpeternblue.svg";
import hero from "./../../public/img/hero.png";
import vektor1 from "./../../public/img/vektor.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Hero = () => {
  return (
    <div className="hero relative" id="hero">
      <LazyLoadImage
        src={pattern1}
        effect="blur"
        className="absolute left-0 top-0 -z-0 w-[1503px] -translate-x-[30%] -translate-y-[55%] "
        alt=""
      />
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8  md:pt-[150px] sm:pt-[80px] pt-[50px] relative ">
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 max-md:pt-[100px] max-sm:pt-[50px] ">
          <div className="left h-full flex items-center lg:justify-center ">
            <div className="relative ">
              <div className="slide-left ">
                <h1 className="uppercase  relative md:text-[90px] text-[40px] max-sm:leading-[1.2] hero-text">
                  Hello
                </h1>

                <h1 className="uppercase md:text-[90px] max-sm:leading-[1.2] text-[40px]">
                  Everyone
                </h1>
                <div className="relative sm:h-[150px] h-[50px] max-sm:leading-[1.2] z-20 ">
                  <h1 className="uppercase md:text-[90px]  text-[40px] max-md:relative absolute overflow-y-hidden z-20  text_wrap">
                    I am{" "}
                    <span className="max-sm:text-[#f5ce62] z-20">Dico Aji</span>
                  </h1>
                </div>
                <p className="text-[18px] about_me max-md:text-[14px] max-md:mt-[10px] ">
                  Front End Developer, Web Developer, UI/UX Design
                </p>
              </div>
              <div className="sm:mt-[40px] mt-[20px] relative">
                <div className="relative">
                  <a href="https://drive.google.com/uc?export=download&id=1Hp2gjih5IYlWFBuXHs2W7sGP_9k6GrGZ">
                    <button className="bn632-hover bn19 text-[16px] max-sm:text-[14px] text-white cursor-pointer sm:py-[10px] py-[7px] sm:px-[50px] px-[20px] sm:rounded-[50px] rounded-[20px] border-none">
                      Resume
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="right block relative  max-md:hidden ">
            <div className="relative ">
              <img
                src={vektor1}
                className="absolute block max-lg:hidden w-[400px] top-[50px] max-md:hidden -translate-x-[20px] -z-10"
                alt=""
              />

              <img
                src={vektor1}
                className="absolute block w-[70px] max-lg:hidden translate-y-[60%] right-[28%] -z-10"
                alt=""
              />
              <LazyLoadImage
                src={hero}
                effect="blur"
                className="absolute w-[550px] max-lg:hidden -translate-y-[50px] -translate-x-[70px] top-0 right-0 rounded-[550px] z-20"
                alt="Hero"
              />
            </div>
            <div className="relative">
              <svg
                viewBox="0 0 100 100"
                className="curved-text absolute right-[10px] -top-[20px]"
              >
                <defs>
                  <path
                    id="curve"
                    d="M10,50 A40,40 0 1,1 90,50 A40,40 0 1,1 10,50"
                  />
                </defs>
                <text>
                  <textPath
                    href="#curve"
                    className="text-curve text-white uppercase lg:hidden text-[10.77px]"
                  >
                    🕸 Always in Process 🕸 100% Energy for you
                  </textPath>
                </text>
              </svg>
            </div>
            <div className="relative slide-bottom">
              <p className="vertical-text absolute -right-[10%] text-[18px]">
                Informatics Student
              </p>
            </div>
          </div>
          <div className="md:hidden block max-md:w-[80%] mx-auto mt-[120px] max-md:mt-[70px] relative ">
            <LazyLoadImage
              src={vektor1}
              effect="blur"
              className="absolute left-0 top-0 w-[80%] -z-10"
              alt=""
            />
            <LazyLoadImage
              src={vektor1}
              effect="blur"
              className="absolute right-[10%] top-[15%] w-[18%] -z-10"
              alt=""
            />
            <div className="relative ">
              <svg
                viewBox="0 0 100 100"
                className="w-[80px] h-[80px] text-white absolute right-0 top-1/2 -translate-y-[100%] rotate z-20"
              >
                <defs>
                  <path
                    id="curve"
                    d="M10,50 A40,40 0 1,1 90,50 A40,40 0 1,1 10,50"
                  />
                </defs>
                <text>
                  <textPath
                    href="#curve"
                    className="text-curve text-white uppercase max-sm:text-[10.4px]  text-[10.77px] rotate"
                  >
                    🕸 Always in Process 🕸 100% Energy for you
                  </textPath>
                </text>
              </svg>
            </div>

            <LazyLoadImage
              effect="blur"
              src={hero}
              className="rounded-[500px] "
              alt=""
            />
          </div>
        </div>
        <LazyLoadImage
          src={ballpeternblue}
          effect="blur"
          className="absolute -right-[40%] top-0 translate-y-[25%] w-[2400px]"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
