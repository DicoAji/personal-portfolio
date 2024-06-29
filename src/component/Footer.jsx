import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./css/Footer.css";
import {
  faLinkedinIn,
  faFacebookF,
  faTwitter,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <div className="footer blur_footer -z-1" id="footer">
      <div className="max-w-7xl px-2 sm:px-6 lg:px-8 mx-auto sm:mt-[200px] mt-[70px] md:pb-[50px] relative z-50 ">
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          <div className="">
            <h2 className="text-[30px] uppercase max-sm:text-[18px]">
              Dico Aji Personal Portfolio
            </h2>
            <p className="sm:mt-3 mt-6 text-[16px] max-sm:text-[14px] ">
              This website was developed using :
            </p>
            <div className="footer-deploy mt-3">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1039px-Vitejs-logo.svg.png"
                alt=""
                className="w-[25px]"
              />
              <img
                src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
                alt=""
                className="w-[25px]"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png"
                alt=""
                className="w-[25px]"
              />
              {/* <img
                src="https://seeklogo.com/images/P/postman-logo-0087CA0D15-seeklogo.com.png"
                alt=""
              /> */}
            </div>
          </div>
          <div className=" grid md:grid-cols-2 grid-cols-2 max-md:mt-[40px]">
            <div className="flex justify-end max-md:justify-start ">
              <div className="">
                <h3 className="uppercase text-[28px] max-sm:text-[18px]">
                  Navigation
                </h3>
                <ul className="mt-6 nav_link max-sm:text-[12px] text-[16px] ">
                  <li>
                    <a href="#home">{">"} Home</a>
                  </li>
                  <li>
                    <a href="#about">{">"} About</a>
                  </li>
                  <li>
                    <a href="experience">{">"} Experience</a>
                  </li>
                  <li>
                    <a href="project">{">"} Project</a>
                  </li>
                  <li>
                    <a href="skills">{">"} Skills</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex justify-end max-md:justify-start">
              <div className="">
                <h2 className="text-[28px] uppercase max-sm:text-[18px]">
                  Contact Me
                </h2>
                <ul className="mt-6 max-sm:text-[12px] space-y-[5px]">
                  <li>
                    <a href="https://www.google.com/maps/place/Kec.+Kradenan,+Kabupaten+Grobogan,+Jawa+Tengah/@-7.1727291,111.0493816,12z/data=!3m1!4b1!4m6!3m5!1s0x2e7753592ca591c7:0x4027a76e352ef70!8m2!3d-7.1490283!4d111.1433863!16s%2Fg%2F11b_2nym12?hl=id&entry=ttu">
                      <FontAwesomeIcon icon={faLocationDot} /> Kradenan,
                      Grobogan
                    </a>
                  </li>
                  <li>
                    <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=dicoaji12@gmail.com">
                      <FontAwesomeIcon icon={faEnvelope} /> dicoaji12@gmail.com
                    </a>
                  </li>
                </ul>
                <div className="social_media text-[40px] gap-3 mt-2">
                  <a href="https://www.linkedin.com/in/dicoaji/">
                    <FontAwesomeIcon
                      icon={faLinkedinIn}
                      className="linkedin icon hover:bg-blue-500 p-2 "
                    />
                  </a>
                  <a href="https://www.facebook.com/dico.aji.1/">
                    <FontAwesomeIcon
                      icon={faFacebookF}
                      className="facebook icon p-2 hover:bg-blue-700 "
                    />
                  </a>
                  <a href="https://twitter.com/dicoajip">
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className="twitter icon p-2  hover:bg-blue-400"
                    />
                  </a>
                  <a href="https://instagram.com/dicoaji_/">
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="instagram icon p-2  hover:bg-red-500"
                    />
                  </a>
                  <a href="https://github.com/DicoAji">
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="github icon p-2  hover:bg-black "
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center sm:text-[14px] text-[12px] mt-[20px] border-t-[0.1px] border-slate-400 py-[5px]">
        {/* <p>This web build with react, tailwind</p> */}
        <p>© 2024 Dico Aji Prasetyo™. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
