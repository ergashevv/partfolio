import "./App.scss";
import { Mail, GitFork, Linkedin, ArrowLeftToLine } from "lucide-react";
import Edevzi from "./edevzi.png";
import BG from "./bg.png";
import PNG from "./png.png";
import JS from './js.png'
import TS from './ts.png'
import NS from './next.png'
import RS from './react.png'
import Image from './image.png'
import Insta from './instagram.png'
import Tg from './telegram.png'
import Fb from './facebook.png'
import Li from './linkedin.png'
import Amcham from './amcham.png'
import Iarc from './iarc.png'
function App() {
  return (
    <div className="app">
      <div className="header">
        <div className="container">
          <div className="header-links">
            <div className="logo">
              <h1>EDEVZ</h1>
            </div>
            <div className="links">
              <ul>
                <li>
                  <a href="#">About me</a>
                </li>
                <li>
                  <a href="#">Skills</a>
                </li>
                <li>
                  <a href="#">Portfolio</a>
                </li>
                <li>
                  <a href="#">CONTACT ME</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="hero">
            <div className="left-side">
              <span>Hi, I'm</span>
              <h1>Pulat Ergashev</h1>
              <div className="tag">
                <span>Middle Front-end Developer / Mobilographer</span>
              </div>
              <div className="social-links">
                <button>
                  <a href="https://ergashevdev@gmail.com" target="_blank">
                    <Mail className="icons" />
                  </a>
                </button>
                <button>
                  <a target="_blank" href="https://github.com/ergashevv">
                    <GitFork className="icons" />
                  </a>
                </button>
                <button>
                  <a href="https://www.linkedin.com/in/edevz/" target="_blank">
                    <Linkedin className="icons" />
                  </a>
                </button>
              </div>
            </div>
            <div className="right-side">
              <div className="image">
                <img src={Edevzi} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="short-term"
        style={{
          backgroundImage: `url(${BG})`,
        }}
      >
        <div className="container">
          <h2>Summary</h2>
          <p>
          Front-end developer with 3+ years of experience in creating responsive and user-friendly web applications
using HTML, CSS, JavaScript, React, and Redux. Developed and maintained several e-commerce websites
with dynamic features and high-performance.

          </p>
        </div>
      </div>

      <div className="about-me">
        <div className="container">
          <div className="inner">
            <div className="intro-text">
              <h1>About me</h1>
            </div>

            <div className="about-me-full">
              <p>
              Polat Ergashev was born on April 30, 2002 in the city of Bukhara, Bukhara region. In 2020, I studied web programming at the Najot Talim educational center in Tashkent. In 2021-2022, I worked in Mohirdev company, in 2022-2023 in Eurosoft companies, now I'm working in RealSoft company. 
              At the same time, I create video content for the Instagram platform
              </p>
            </div>

            <div className="explore">
              <h2>explore</h2>
              <img src={PNG} alt="" />
            </div>

            <div className="main-descs">
              <div className="block1">
                <h3>Web Development</h3>
                <p>
                Adept at problem-solving and optimizing web functionality to enhance user experience and achieve client objectives. Committed to staying updated with the latest industry trends and best practices in web development.
                </p>
              </div>
              <div className="block1">
                <h3>Mobilograph</h3>
                <p>
                A creative and tech-savvy Moblographer with 2 years of experience in mobile photography and videography. Specializes in capturing high-quality images and videos using smartphones, leveraging advanced mobile apps and tools for editing and post-production.
                </p>
              </div>
            </div>
            <div className="split-image">
              <img src={PNG} alt="" />
            </div>

            <div className="skills">
              <div className="text-skill">
                <h1>skills</h1>
              </div>

              <div className="langs">
                <h1>Using now  :</h1>
                <div className="tools">
                  <div className="tool">
                    <img src={JS} alt="" />
                    <span>JavaScript</span>
                  </div>
                  <div className="tool">
                    <img src={RS} alt="" />
                    <span>React.JS</span>
                  </div>
                  <div className="tool">
                    <img src={TS} alt="" />
                    <span>TypeScript</span>
                  </div>
                  <div className="tool">
                    <img src={NS} alt="" />
                    <span>Next.JS</span>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>

      <div className="portofilio">
        <div className="text">
        <h1>PORTFOLIO</h1>
        </div>
        <div className="inner">
        <div className="block1">
          <a href="https://akfabuild.com" target="_blank">
            <img src={Image} alt="" />
          </a>
        </div>
        <div className="block1">
          <a href="https://amcham.uz" target="_blank">
            <img src={Amcham} alt="" />
          </a>
        </div>
        <div className="block1">
          <a href="https://iarc.uz" target="_blank">
            <img src={Iarc} alt="" />
          </a>
        </div>
        </div>
      </div>

      <div className="contact">
        <div className="container">
          <div className="text">
            <h1>Contact Me</h1>
          </div>

          <form action="">
            <div className="input">
              <input type="text" placeholder="Full name" />
            </div>
            <div className="input">
              <input type="text" placeholder="Phone number" />
            </div>
            <div className="input">
              <input type="text" placeholder="Email address" />
            </div>
            <div className="input">
                <textarea name="" placeholder="Your message"   id=""></textarea>
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      <div className="footer">
        <div className="container">
          <ul>
            <li><a target="_blank" href="https://instagram.com/edevzi"><img src={Insta} alt="" /></a></li>
            <li><a href="https://www.facebook.com/share/yNwAzTx26YCzcdPS/?mibextid=LQQJ4d" target="_blank"><img src={Fb} alt="" /></a></li>
            <li><a href="https://t.me/edevz" target="_blank"><img src={Tg} alt="" /></a></li>
            <li><a href="https://www.linkedin.com/in/edevz/" target="_blank"><img src={Li} alt="" /></a></li>
          </ul>
          <div className="top">
            <ArrowLeftToLine className="arrow"/>
            <a href="#">Back to top </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
