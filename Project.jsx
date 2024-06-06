import ballpattern2 from "./../assets/img/pattern/ballpatternyellow2.svg";
import bluered from "./../assets/img/pattern/bluered.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpLong } from "@fortawesome/free-solid-svg-icons";
import "./css/Project.css";
import { useEffect, useState } from "react";
import data from "./../assets/data/project.json";

const Project = () => {
  const [project, setDataProject] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  useEffect(() => {
    setDataProject(data.project);
    // console.log(data.project);
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
      <div className=" max-w-7xl mx-auto   px-2 sm:px-6 lg:px-8 md:mt-[150px] max-md:mt-[100px] relative w-full ">
        <img
          src="https://i.ibb.co.com/f89BtrK/rounded.png"
          className="absolute max-md:w-[70px] md:left-0 max-md:-left-[8%] -translate-y-[40%] translate-x-[10%] max-md:-top-[3%]"
          alt=""
        />
        <h2 className="md:text-[60px] max-md:text-[30px] text-center slide-right">
          These are some of the projects the author has worked on
        </h2>
        {/* menu kategori */}
        <div className="project_menu text-center mt-[80px] relative">
          <ul>
            <li onClick={() => handleCategoryClick("All")}>All</li>
            <li onClick={() => handleCategoryClick("Portfolio")}>Portfolio</li>
            <li onClick={() => handleCategoryClick("Self Project")}>
              Self Project
            </li>
            <li onClick={() => handleCategoryClick("Client Project")}>
              Client Project
            </li>
            <li onClick={() => handleCategoryClick("Data Analysis")}>
              Data Analysis
            </li>
            <li onClick={() => handleCategoryClick("Other")}>Other</li>
          </ul>
          <div className="backdrop-blur-0 -z-10 absolute top-[0%] -translate-y-[40%] translate-x-[50%] left-0 ">
            <img src={bluered} className="" alt="" />
          </div>
        </div>

        <div className="max-md:w-[90%] max-md:mx-auto grid md:grid-cols-3 grid-cols-1 mt-[50px] gap-[30px]  relative">
          {filteredProjects.map((project, index) => (
            <div key={index} className="relative">
              <img src={project.linkgambar} alt={project.tittle} />
              <a href={project.link}>
                <FontAwesomeIcon
                  icon={faArrowUpLong}
                  className="absolute top-[4%] right-[4%] arrowupriight  rotate-45 py-4 px-5  rounded-full "
                />
              </a>
              <h3 className="text-[16px] absolute bottom-0 left-0 bg-white text-black px-3 py-1 ">
                {project.tittle}
              </h3>
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
        src="https://i.ibb.co.com/CHYG7Mg/ball.png"
        className="absolute left-0 -translate-x-[50%] top-[50%] -z-10 "
        alt=""
      />
    </div>
  );
};

export default Project;
