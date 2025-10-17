import React from "react";
import "./Home.css";
import Nav from "./nav";
import { useNavigate } from "react-router-dom";
import {
  SiJavascript, SiPython, SiTypescript, SiC, SiHtml5, SiSwift,
  SiR, SiMysql, SiCss3, SiPandas, SiNumpy, SiCpanel,
  SiRust, SiRuby, SiGo, SiOpenjdk, SiCplusplus, SiKotlin
} from "react-icons/si";
import { FaCode } from "react-icons/fa";

function Home() {
  const navigate = useNavigate();

  const handleJs = () => navigate("/js");
  const handlePy = () => navigate("/py");
  const handleTs = () => navigate("/TypeScript");
  const handleJ = () => navigate("/Java");
  const handleC = () => navigate("/C");

  return (
    <div id="main">
      <Nav />
      <h1 id="h1">Learn Programming for Free</h1>

      <div className="div">
        <button onClick={handlePy}><SiPython /> Python</button>
        <button><SiMysql /> SQL</button>
        <button><SiR /> R</button>
        <button><SiHtml5 /> HTML</button>
        <button><SiCss3 /> CSS</button>
        <button onClick={handleJs}><SiJavascript /> JavaScript</button>
        <button onClick={handleJ}><SiOpenjdk /> Java</button>
        <button onClick={handleC}><SiC /> C</button>
      </div>

      <div className="div">
        <button><SiKotlin /> Kotlin</button>
        <button onClick={handleTs}><SiTypescript /> TypeScript</button>
        <button><SiSwift /> Swift</button>
        <button><SiPandas /> Pandas</button>
        <button><SiNumpy /> Numpy</button>
        <button><SiCpanel /> Cpanel</button>
        <button><SiRust /> Rust</button>
        <button><SiGo /> Go</button>
        <button><SiCplusplus /> C++</button>
        <button><FaCode /> C#</button>
      </div>

      <button id="RubyButton"><SiRuby /> Ruby</button>

      <div id="border">
        <h1>Programiz</h1>
        <h2>Our Hands-on Coding Platform</h2>
      </div>
    </div>
  );
}

export default Home;
