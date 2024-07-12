import React, { useState, useEffect } from "react";
import netflixLogo from "../assets/netflix-main.png";
import heroImage from "../assets/hero.jpg";
import friendsLogo from "../assets/friendss-logo.png";
import videoOne from "../assets/vid-one.mp4";
import videoTwo from "../assets/vid-two.mp4";
import videoThree from "../assets/vid-three.mp4";
import SimpleSlider from "./carousel"; // Import the carousel component
import floweralyan from "../assets/flow-alyan.jpg";
import flowerhammad from "../assets/flow-hammad.jpg";
import flowersorath from "../assets/flow-sorath.jpg";
import flowerareesha from "../assets/flow-areesha.jpg";
import flowerzain from "../assets/flow-zain.jpg";
import flowersamreen from "../assets/flow-samreen.jpg";
import flowertenar from "../assets/flow-tenar.jpg";
import flowerabd from "../assets/flow-abd.jpg";
import Surprise from "./Surprise";

const Main = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="text-white bg-[#181818] min-h-screen">
      <header
        className={`flex justify-between items-center bg-[#000000] fixed w-full top-0 z-10 h-14 transition-opacity duration-300 ${
          isScrolled ? "opacity-70" : "opacity-100"
        }`}
      >
        <img src={netflixLogo} alt="Netflix Logo" className="w-14" />
        <div className="flex items-center pr-4">
          <button className="text-sm bg-[#E00712] px-5 py-2 rounded-sm mr-2">
            Join Now
          </button>
          <button className="text-sm bg-transparent border border-white px-4 py-2 rounded-sm">
            Sign In
          </button>
        </div>
      </header>
      <div className="pt-14">
        <main className="flex flex-col items-center justify-center flex-grow p-0 relative">
          <img
            src={heroImage}
            alt="Hero"
            className="w-full h-auto object-cover"
            style={{ marginTop: "0" }}
          />
          <img
            src={friendsLogo}
            alt="Friends Logo"
            className="w-full h-auto mb-0 object-cover mt-2"
          />
          <h1 className="text-4xl mb-2 text-left w-full pl-4">Friends</h1>
          <div className="flex flex-wrap items-center space-x-2 mb-4 pl-4 w-full text-[#A1A1A1]">
            <span>2024</span>
            <span className="border border-gray-500 px-1">17+</span>
            <span>1 Semester</span>
            <span>Fun</span>
          </div>
          <p className="text-left pl-4 max-w-lg mb-4 w-full">
            This hit sitcom follows the merry misadventures of eight pals as
            they navigate the pitfalls of study, life, and fights since 2024
            FUAAST.
          </p>
          <p className="text-left pl-4 text-[#A1A1A1] w-full mb-2">
            Starring: <span className="text-white">Alyan, Hammad, Sorath, Areesha, Zain, Samreen, Tenar,
            Abdullah.</span>
          </p>
          <p className="text-left pl-4 text-[#A1A1A1] w-full mb-4">
            Creator: <span className="text-white">Dr.Sarim.</span>
          </p>
          <div className="bg-gradient-to-r from-[#333333] to-[#181818] p-4 w-[21rem] sm:w-[28rem] h-auto flex flex-col mb-4 mx-4 sm:mx-auto">
            <div className="flex items-center mb-2">
              <img
                src={netflixLogo}
                alt="Netflix Logo"
                className="w-20 h-auto"
              />
              <div className="flex flex-col items-center justify-center gap-y-3 ml-4">
                <p className="text-xl">Watch all you want.</p>
                <button className="bg-[#E00712] text-white px-6 py-1 rounded-sm w-2/3">
                  Join Now
                </button>
              </div>
            </div>
          </div>
          <hr className="border-t border-white my-4 w-[21rem] sm:w-[16rem] mx-auto" />
          <div className="flex flex-col items-start w-full space-y-1 pl-4 mt-4">
            <h1 className="text-[#A1A1A1] text-lg">Genres</h1>
            <p className="text-white">Sitcoms, TV Comedies, FUAAST TV Shows</p>
            <h1 className="text-[#A1A1A1] text-lg font-semibold">Cast</h1>
            <p className="text-white flex flex-col">
              <span>Alyan</span>
              <span>Hammad</span>
              <span>Sorath</span>
              <span>Areesha</span>
              <span>Zain</span>
              <span>Samreen</span>
              <span>Tenar</span>
              <span>Abdullah</span>
            </p>
          </div>
          <hr className="border-t border-white my-4 w-[21rem] sm:w-[16rem] mx-auto mt-3 " />
          {/* Add carousel component here */}
          <div className="mt-8 w-full px-[6rem] flex items-center">
            <SimpleSlider />
          </div>

          <hr className="border-t border-gradient-to-b from-[#333333] to-[#181818] my-4 w-[21rem] sm:w-[16rem] mx-auto" />
          <p className="text-left text-[#A1A1A1] pl-4 text-base mb-4 w-full max-w-lg mt-2">
            This smash-hit sitcom made stars of its eight leads and finished in
            FUAAST TV's top 10 every Semester.
          </p>
          <hr className="border-t border-white my-4 w-[21rem] sm:w-[16rem] mx-auto" />
          <div className="flex flex-col items-start w-full space-y-1 pl-4">
            <h1 className="text-2xl text-white font-semibold">Episodes</h1>
            <div className="flex items-center space-x-2 mb-4">
              <hr className="border-l border-white h-6" />
              <h1 className="font-thin text-lg text-[#A1A1A1]">Friends</h1>
            </div>
            <h1 className="text-xl text-white">Semester 1</h1>
            <h3 className="text-white text-xl font-semibold">
              Release Date: 09/07/2024
            </h3>
            <p className="text-white">
              <span className="font-semibold text-xl">Semester 1</span> was full of fun, love, joy, memorable moments, fights,
              compromises,exams,chao tension,  support, and much more.
            </p>
          </div>

          {/* Adding Videos and corresponding descriptions */}
          <div className="flex flex-col items-center w-full mt-8 space-y-6">
            <div className="w-full px-4">
              <video controls className="w-full h-auto">
                <source src={videoOne} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <h1 className="text-xl mt-2">Episode 1: Fun Only Fun</h1>
              <p className="text-[#A1A1A1]">
                In episode 1 we only had fun and wasting time not studying at
                all ,going out for food,bday
                celebration,bunks,vibing,enjoying,playing games and much more.
              </p>
            </div>
            <div className="w-full px-4">
              <video controls className="w-full h-auto">
                <source src={videoTwo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <h1 className="text-xl mt-2">Episode 2: Drama & Fun</h1>
              <p className="text-[#A1A1A1]">
                In episode 2 we had 2nd semester exams stress ,studying late
                night at university,vibing,going out for food ,solving issues
                between members.
              </p>
            </div>
            <div className="w-full px-4">
              <video controls className="w-full h-auto">
                <source src={videoThree} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <h1 className="text-xl mt-2">Episode 3: Double Trouble</h1>
              <p className="text-[#A1A1A1]">
                In episode 3 we had fun and drama ,vibing,going out for food
                ,chaos,solving issues between members, outing after last paper,rain,
                edits,love the ending.
              </p>
            </div>
          </div>
          <hr className="border-t border-white my-4 w-[21rem] sm:w-[16rem] mx-auto" />
          <h1 className="flex iitems center justify-between font-semibold text-xl">
            Flower Language
          </h1>
          <div className="grid grid-cols-2 gap-4 px-4 w-full max-w-lg mb-2 mt-4">
            <div className="flex flex-col items-center">
              <p className="text-center mb-2">Alyan</p>
              <img
                src={floweralyan}
                alt="Alyan"
                className="w-full h-auto mb-4"
              />
            </div>
            <div className="flex flex-col items-center">
              <p className="text-center mb-2">Hammad</p>
              <img
                src={flowerhammad}
                alt="Hammad"
                className="w-full h-auto mb-4"
              />
            </div>
            <div className="flex flex-col items-center">
              <p className="text-center mb-2">Sorath</p>
              <img
                src={flowersorath}
                alt="Sorath"
                className="w-full h-auto mb-4"
              />
            </div>
            <div className="flex flex-col items-center">
              <p className="text-center mb-2">Areesha</p>
              <img
                src={flowerareesha}
                alt="Areesha"
                className="w-full h-auto mb-4"
              />
            </div>
            <div className="flex flex-col items-center">
              <p className="text-center mb-2">Zain</p>
              <img src={flowerzain} alt="Zain" className="w-full h-auto mb-4" />
            </div>
            <div className="flex flex-col items-center">
              <p className="text-center mb-2">Samreen</p>
              <img
                src={flowersamreen}
                alt="Samreen"
                className="w-full h-auto mb-4"
              />
            </div>
            <div className="flex flex-col items-center">
              <p className="text-center mb-2">Tenar</p>
              <img
                src={flowertenar}
                alt="Tenar"
                className="w-full h-auto mb-4"
              />
            </div>
            <div className="flex flex-col items-center">
              <p className="text-center mb-2">Abdullah</p>
              <img
                src={flowerabd}
                alt="Abdullah"
                className="w-full h-auto mb-4"
              />
            </div>
          </div>
          <hr className="border-t border-white my-2 w-[21rem] sm:w-[16rem] mx-auto" />
          
          <h1 className=" text-[#A1A1A1] mb-3 font-serif flex items-center justify-center mt-5">
            Enjoying the chaos with friends
          </h1>
          <div>
          <h1 className="font-semibold text-xl mb-4 flex items-start px-2  ml-4">Enter your* Password for KINDER SURPRISE</h1>
            <div className="mt-4"><Surprise/></div>
          </div>
          <hr className="border-t border-white my-4 w-[21rem] sm:w-[16rem] mx-auto mt-3 " />

          <h1 className="text-[#A1A1A1] text-xl ml-4 flex items-center font-semibold font-serif px-2">i hope u like this litle effort, i hope i`ve not dissapoint you</h1>
          <footer className=" text-[#A1A1A1] py-6 mt-8">
          
            <div className="container mx-auto px-4">
            
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">

                <div>
              
                  <h3 className="text-white text-sm font-semibold mb-2">
                    Questions? Contact us.
                  </h3>
                  <ul className="text-sm space-y-2">
                    <li>FAQ</li>
                    <li>Account</li>
                    <li>Investor Relations</li>
                    <li>Ways to Watch</li>
                    <li>Privacy</li>
                    <li>Corporate Information</li>
                    <li>Speed Test</li>
                    <li>Only on Netflix</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-white text-sm font-semibold mb-2">
                    Help
                  </h3>
                  <ul className="text-sm space-y-2">
                    <li>Help Center</li>
                    <li>Media Center</li>
                    <li>Jobs</li>
                    <li>Terms of Use</li>
                    <li>Cookie Preferences</li>
                    <li>Contact Us</li>
                    <li>Legal Notices</li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 text-center">
                <p className="text-white text-sm">Netflix FUAAST</p>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default Main;
