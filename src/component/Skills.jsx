import patternblue from "./../../public/img/pattern/ballpeternblue.svg";
import patternorange from "./../../public/img/pattern/ballpeternorange.svg";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "./css/Skills.css";
import { useEffect, useState } from "react";
import data from "./../../public/data/data-language.json";
import htmlImg from "./../../public/img/icon-skill/html.png";
import cssImg from "./../../public/img/icon-skill/css.png";
import jsImg from "./../../public/img/icon-skill/js.png";
import bootstrapImg from "./../../public/img/icon-skill/bootstrap.png";
import sassImg from "./../../public/img/icon-skill/sass.png";
import tailwindImg from "./../../public/img/icon-skill/tailwind.png";
import phpImg from "./../../public/img/icon-skill/php.png";
import pythonImg from "./../../public/img/icon-skill/python.png";
import codeigniterImg from "./../../public/img/icon-skill/codeigniter.png";
import laravelImg from "./../../public/img/icon-skill/laravel.png";
import mysqlImg from "./../../public/img/icon-skill/mysql.png";
import nodejsImg from "./../../public/img/icon-skill/nodejs.png";
import jqueryImg from "./../../public/img/icon-skill/jquery.png";
import reactImg from "./../../public/img/icon-skill/react.png";
import nextImg from "./../../public/img/icon-skill/nextjs.png";
import postmanImg from "./../../public/img/icon-skill/postman.png";
import photoshopImg from "./../../public/img/icon-skill/photoshop.png";
import xdImg from "./../../public/img/icon-skill/xd.png";
import premiereImg from "./../../public/img/icon-skill/premiere.png";
import figmaImg from "./../../public/img/icon-skill/figma.png";
import canvaImg from "./../../public/img/icon-skill/canva.png";
import gitImg from "./../../public/img/icon-skill/git.png";
import notionImg from "./../../public/img/icon-skill/notion.png";
import officeImg from "./../../public/img/icon-skill/microsoft-office.png";
import wordImg from "./../../public/img/icon-skill/word.png";
import excelImg from "./../../public/img/icon-skill/excel.png";
import powerpointImg from "./../../public/img/icon-skill/powerpoint.png";

const imageMap = {
  "html.png": htmlImg,
  "css.png": cssImg,
  "js.png": jsImg,
  "bootstrap.png": bootstrapImg,
  "sass.png": sassImg,
  "tailwind.png": tailwindImg,
  "php.png": phpImg,
  "python.png": pythonImg,
  "codeigniter.png": codeigniterImg,
  "laravel.png": laravelImg,
  "mysql.png": mysqlImg,
  "nodejs.png": nodejsImg,
  "jquery.png": jqueryImg,
  "react.png": reactImg,
  "nextjs.png": nextImg,
  "postman.png": postmanImg,
  "photoshop.png": photoshopImg,
  "xd.png": xdImg,
  "premiere.png": premiereImg,
  "figma.png": figmaImg,
  "canva.png": canvaImg,
  "git.png": gitImg,
  "notion.png": notionImg,
  "microsoft-office.png": officeImg,
  "word.png": wordImg,
  "excel.png": excelImg,
  "powerpoint.png": powerpointImg,
};

const Skills = () => {
  const [dataLanguage, setDataLanguage] = useState([]);

  useEffect(() => {
    setDataLanguage(data.data_language);
    // console.log(data.data_language);
  }, []);

  return (
    <div
      className="skills relative sm:mt-[200px] mt-[60px] overflow-hidden"
      id="skills"
    >
      <div className="absolute left-0 top-0  w-[700px] -translate-x-[10%] ">
        <img src={patternblue} className="" alt="" />
      </div>
      <img
        src="https://i.ibb.co.com/v4C6z0w/pattern2.png"
        className="absolute right-0 top-0 sm:w-[200px] w-[80px]"
        alt=""
      />
      <div className="max-w-7xl px-2 sm:px-6 lg:px-8 mx-auto relative ">
        <h2 className="text-center w-[75%] mx-auto sm:text-[60px] text-[26px] uppercase mx-auto w-fit border-b border-fuchsia-600">
          MY SKILL
        </h2>
        <div className="sm:w-[80%] w-[100%] mx-auto sm:mt-[50px] mt-[20px] ">
          <div className="text-center sm:text-[16px] text-[12px]">
            <p className="px-4 inline-block mx-[8px] py-2 mt-[15px] text-white bg-[#251C31]">
              Web Development
            </p>

            <p className="px-4 inline-block mx-[8px] py-2 mt-[15px] text-white bg-[#251C31]">
              UI/UX Design
            </p>
            <p className="px-4 inline-block mx-[8px] py-2 mt-[15px] text-white bg-[#251C31]">
              Photo Editor
            </p>
            <p className="px-4 inline-block mx-[8px] py-2 mt-[15px] text-white bg-[#251C31]">
              Data Analysis
            </p>
            <p className="px-4 inline-block mx-[8px] py-2 mt-[15px] text-white bg-[#251C31]">
              Microsoft Office
            </p>
            <p className="px-4 inline-block mx-[8px] py-2 mt-[15px] text-white bg-[#251C31]">
              Wireframing
            </p>
            <p className="px-4 inline-block mx-[8px] py-2 mt-[15px] text-white bg-[#251C31]">
              Prototyping
            </p>
            <p className="px-4 inline-block mx-[8px] py-2 mt-[15px] text-white bg-[#251C31]">
              Problem Solving
            </p>
            <p className="px-4 inline-block mx-[8px] py-2 mt-[15px] text-white bg-[#251C31]">
              Photoshop
            </p>
            <p className="px-4 inline-block mx-[8px] py-2 mt-[15px] text-white bg-[#251C31]">
              Figma
            </p>
            <p className="px-4 inline-block mx-[8px] py-2 mt-[15px] text-white bg-[#251C31]">
              Data Administrative
            </p>
          </div>
        </div>
        <div className="sm:w-[90%]  w-full mx-auto text-center sm:mt-[80px] mt-[50px] icon_skill ">
          {/* looping data */}
          {dataLanguage.map((language, index) => (
            <div key={index} className="rounded-full bg-[#251C31] inline-block">
              <a href="">
                <img
                  src={imageMap[language.gambar]}
                  alt={language.tittle}
                  className="sm:w-[90px] w-[60px] sm:p-[20px] p-[10px] "
                  data-tooltip-id="tooltips"
                  data-tooltip-content={language.tittle}
                />
              </a>
              <ReactTooltip
                id="tooltips"
                place="top"
                className="bg-[#251C31] text-white p-2 rounded-full"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute right-0 bottom-0 translate-x-[40%]  w-[700px] ">
        <img src={patternorange} className="" alt="" />
      </div>
    </div>
  );
};

export default Skills;
