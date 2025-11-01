import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import ballpattern2 from "./../../public/img/pattern/ballpatternyellow2.svg";
import bluered from "./../../public/img/pattern/bluered.svg";
import "./css/Project.css";
import { useEffect, useState } from "react";
import data from "./../../public/data/project.json";
import halfBall from "./../../public/img/half-ball.png";
import bandikmenti from "./../../public/img/project/bandikmenti.png"; // dan seterusnya untuk setiap gambar yang Anda butuhkan
import anime from "./../../public/img/project/anime.png";
import bookshelf from "./../../public/img/project/bookshelf.png";
import grapefruitOrange from "./../../public/img/project/grapefruit_orange.png";
import liver from "./../../public/img/project/liver.png";
import maulapor from "./../../public/img/project/maulapor.png";
import personalNotes from "./../../public/img/project/personal_notes.png";
import portfolio1 from "./../../public/img/project/portfolio1.png";
import porfolio2 from "./../../public/img/project/portfolio2.png";
import porfolio3 from "./../../public/img/project/portfolio3.png";
import porfolio4 from "./../../public/img/project/portfolio4.png";
import rps from "./../../public/img/project/rps.png";
import attain from "./../../public/img/project/attain.png";
import tutorify from "./../../public/img/project/tutorify.png";
import nextPortfolio from "./../../public/img/project/next-portfolio.png";
import credia from "./../../public/img/project/credia.png";
import soreeCafe from "./../../public/img/project/soree-cafe.png";
import optimasi from "./../../public/img/project/optimasi.png";
import kitasehat from "./../../public/img/project/kitasehat.png";

const images = {
  "bandikmenti.png": bandikmenti,
  "anime.png": anime,
  "bookshelf.png": bookshelf,
  "grapefruit_orange.png": grapefruitOrange,
  "liver.png": liver,
  "maulapor.png": maulapor,
  "personal_notes.png": personalNotes,
  "portfolio1.png": portfolio1,
  "portfolio2.png": porfolio2,
  "portfolio3.png": porfolio3,
  "portfolio4.png": porfolio4,
  "rps.png": rps,
  "attain.png": attain,
  "tutorify.png": tutorify,
  "next-portfolio.png": nextPortfolio,
  "credia.png": credia,
  "soree-cafe.png": soreeCafe,
  "optimasi.png": optimasi,
  "kitasehat.png": kitasehat,
};

const Project = () => {
  const [project, setDataProject] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    setDataProject(data.project);
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  const filteredProjects = project.filter((projects) => {
    return (
      selectedCategory === "All" ||
      projects.kategori.toLowerCase() === selectedCategory.toLowerCase()
    );
  });
  return (
    <div className="project relative w-full overflow-hidden " id="project">
      <div className=" max-w-7xl px-2 sm:px-6 lg:px-8 mx-auto md:mt-[150px] max-md:mt-[60px] relative w-full ">
        <h2 className="md:text-[60px] max-md:text-[26px] text-center uppercase border-b border-fuchsia-600 w-fit mx-auto">
          MY PROJECT
        </h2>
        {/* menu kategori */}
        <div className="project_menu text-center mt-[80px] max-sm:mt-[30px] relative">
          <ul>
            <li
              className="max-sm:text-[14px] text-[16px] "
              onClick={() => handleCategoryClick("All")}
            >
              All
            </li>
            <li
              className="max-sm:text-[14px] text-[16px]"
              onClick={() => handleCategoryClick("Portfolio")}
            >
              Portfolio
            </li>
            <li
              className="max-sm:text-[14px] text-[16px]"
              onClick={() => handleCategoryClick("Self Project")}
            >
              Self Project
            </li>
            <li
              className="max-sm:text-[14px] text-[16px]"
              onClick={() => handleCategoryClick("Client Project")}
            >
              Client Project
            </li>
            <li
              className="max-sm:text-[14px] text-[16px]"
              onClick={() => handleCategoryClick("Data Analysis")}
            >
              Data Analysis
            </li>
            <li
              className="max-sm:text-[14px] text-[16px] "
              onClick={() => handleCategoryClick("Other")}
            >
              Other
            </li>
          </ul>
          <div className="backdrop-blur-0 -z-10 absolute top-[0%] -translate-y-[40%] translate-x-[50%] left-0 ">
            <img src={bluered} className="" alt="" />
          </div>
        </div>

        <div className="max-md:w-[100%] max-md:mx-auto grid md:grid-cols-3 grid-cols-2 mt-[50px] sm:gap-[30px] gap-[5px]  relative">
          {filteredProjects.map((project, index) => (
            <div key={index} className="relative bg-black ">
              <a href={project.link}>
                <LazyLoadImage
                  src={images[project.linkgambar]}
                  alt={project.tittle}
                  effect="blur"
                  className="block w-full "
                />
                <h3 className="sm:text-[16px] text-[14px] absolute bottom-0 left-0 bg-black text-white px-3 py-1 ">
                  {project.tittle}
                </h3>
              </a>
            </div>
          ))}
        </div>
      </div>

      <img
        src={ballpattern2}
        className="absolute md:w-[1000px] -z-10 right-0  top-0   "
        alt=""
      />
      <img
        src={halfBall}
        className="absolute left-0  top-[50%] -z-10 "
        alt=""
      />
    </div>
  );
};

export default Project;
