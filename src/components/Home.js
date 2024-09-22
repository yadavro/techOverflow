<<<<<<< HEAD
import React from "react";
import developer from "../images/developer.png";
import "../util/home.css";
import { ImMug } from "react-icons/im";
import { FaUbuntu } from "react-icons/fa6";
import { SiServerfault } from "react-icons/si";
import { FaLinux } from "react-icons/fa";
import { SiSuperuser } from "react-icons/si";
import { BsDatabaseFillGear } from "react-icons/bs";
import { SiGamedeveloper } from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";
import { PiNetworkSlashFill } from "react-icons/pi";
import { IoMdSettings } from "react-icons/io";
import { FaStairs } from "react-icons/fa6";
import { FaRegLightbulb } from "react-icons/fa6";
import tech from '../images/tech.png';
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate=useNavigate();
  return (
    <div className="home">
      <div className="home-component">
        <div className="signature">
          <h1>
            Every <span className="highlight">developer</span> has a
            <br className="line-break" /> tab open to techOverflow.
          </h1>
          <p>
            For over 15 years we’ve been the Q&A platform of choice that
            millions of people visit every month to ask questions, learn, and
            share technical knowledge.
          </p>
          <div className="auth-btn">
            <button onClick={()=>{navigate('/signup')}}>Sign up</button>
          </div>
        </div>

        <div>
          <img className="developer" src={developer} alt="logo" />
        </div>
      </div>
      <div className="advertisement">
  <div className="api card">
    <img className="tech-overflow" src={tech} alt="logo" />
    <p>
      A subscription-based API service that provides continuous access to
      techOverflow's public dataset to train and fine-tune large language models.
    </p>
    <button className="btn">API solutions for business </button>
  </div>

  <div className="add card">
    <img className="tech-overflow" src={tech} alt="logo" />
    <p>Reach the world's largest audience of developers and technologists.</p>
    <button className="btn">Advertising Solutions </button>
  </div>
</div>

      <div className="centre-element">
        <p>
          Explore technical topics and other disciplines across 170+ Q&A
          communities
        </p>
        <div className="categories-icons">
          <div className="icon-card">
            <BsDatabaseFillGear />
            <div className="tooltip">Database Management</div>
          </div>
          <div className="icon-card">
            <ImMug />
            <div className="tooltip">Miscellaneous</div>
          </div>
          <div className="icon-card">
            <FaLinux />
            <div className="tooltip">Linux</div>
          </div>
          <div className="icon-card">
            <GiArtificialIntelligence />
            <div className="tooltip">AI</div>
          </div>
          <div className="icon-card">
            <FaRegLightbulb />
            <div className="tooltip">Ideas</div>
          </div>
          <div className="icon-card">
            <FaStairs />
            <div className="tooltip">Stairs</div>
          </div>
          <div className="icon-card">
            <FaUbuntu />
            <div className="tooltip">Ubuntu</div>
          </div>
          <div className="icon-card">
            <SiGamedeveloper />
            <div className="tooltip">Game Development</div>
          </div>
          <div className="icon-card">
            <SiServerfault />
            <div className="tooltip">Server Issues</div>
          </div>
          <div className="icon-card">
            <PiNetworkSlashFill />
            <div className="tooltip">Network</div>
          </div>
          <div className="icon-card">
            <SiSuperuser />
            <div className="tooltip">Superuser</div>
          </div>
          <div className="icon-card">
            <IoMdSettings />
            <div className="tooltip">Settings</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
=======
import React from "react";
import developer from "../images/developer.png";
import "../util/home.css";
import { ImMug } from "react-icons/im";
import { FaUbuntu } from "react-icons/fa6";
import { SiServerfault } from "react-icons/si";
import { FaLinux } from "react-icons/fa";
import { SiSuperuser } from "react-icons/si";
import { BsDatabaseFillGear } from "react-icons/bs";
import { SiGamedeveloper } from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";
import { PiNetworkSlashFill } from "react-icons/pi";
import { IoMdSettings } from "react-icons/io";
import { FaStairs } from "react-icons/fa6";
import { FaRegLightbulb } from "react-icons/fa6";
import tech from '../images/tech.png';
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate=useNavigate();
  return (
    <div className="home">
      <div className="home-component">
        <div className="signature">
          <h1>
            Every <span className="highlight">developer</span> has a
            <br className="line-break" /> tab open to techOverflow.
          </h1>
          <p>
            For over 15 years we’ve been the Q&A platform of choice that
            millions of people visit every month to ask questions, learn, and
            share technical knowledge.
          </p>
          <div className="auth-btn">
            <button onClick={()=>{navigate('/signup')}}>Sign up</button>
          </div>
        </div>

        <div>
          <img className="developer" src={developer} alt="logo" />
        </div>
      </div>
      <div className="advertisement">
  <div className="api card">
    <img className="tech-overflow" src={tech} alt="logo" />
    <p>
      A subscription-based API service that provides continuous access to
      techOverflow's public dataset to train and fine-tune large language models.
    </p>
    <button className="btn">API solutions for business </button>
  </div>

  <div className="add card">
    <img className="tech-overflow" src={tech} alt="logo" />
    <p>Reach the world's largest audience of developers and technologists.</p>
    <button className="btn">Advertising Solutions </button>
  </div>
</div>

      <div className="centre-element">
        <p>
          Explore technical topics and other disciplines across 170+ Q&A
          communities
        </p>
        <div className="categories-icons">
          <div className="icon-card">
            <BsDatabaseFillGear />
            <div className="tooltip">Database Management</div>
          </div>
          <div className="icon-card">
            <ImMug />
            <div className="tooltip">Miscellaneous</div>
          </div>
          <div className="icon-card">
            <FaLinux />
            <div className="tooltip">Linux</div>
          </div>
          <div className="icon-card">
            <GiArtificialIntelligence />
            <div className="tooltip">AI</div>
          </div>
          <div className="icon-card">
            <FaRegLightbulb />
            <div className="tooltip">Ideas</div>
          </div>
          <div className="icon-card">
            <FaStairs />
            <div className="tooltip">Stairs</div>
          </div>
          <div className="icon-card">
            <FaUbuntu />
            <div className="tooltip">Ubuntu</div>
          </div>
          <div className="icon-card">
            <SiGamedeveloper />
            <div className="tooltip">Game Development</div>
          </div>
          <div className="icon-card">
            <SiServerfault />
            <div className="tooltip">Server Issues</div>
          </div>
          <div className="icon-card">
            <PiNetworkSlashFill />
            <div className="tooltip">Network</div>
          </div>
          <div className="icon-card">
            <SiSuperuser />
            <div className="tooltip">Superuser</div>
          </div>
          <div className="icon-card">
            <IoMdSettings />
            <div className="tooltip">Settings</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
>>>>>>> b42d2e88d57ab86538b92622c922a7090e3d6727
