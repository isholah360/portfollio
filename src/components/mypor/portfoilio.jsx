import React, { useEffect, useRef } from "react";
import "./portfolio.css";
import { FaGithub } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { FaCss3Alt } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { Link } from "react-router-dom";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Portfoilio({ title, content, pic, link, code }) {
  const ref = useRef(null);
  const parallaxRef = useRef(null);
  const parallaxa = useRef(null);

  const animateCover = () => {
    gsap.fromTo(
      [ref.current],
      { height: "0px" },
      {
        height: "100%",
        opacity: "1",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        duration: 0.7,
        transformOrigin: "left",
        delay: 0.5,
      }
    );
  };

  const coverMove = () => {
    gsap.fromTo(
      [ref.current],
      { height: "100%" },
      {
        height: "0",
        display: "none",
        opacity: "0",
        duration: 0.7,
        transformOrigin: "top",
        delay: 0.5,
      }
    );
  };
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: parallaxRef.current,
        start: "top center",
        end: "bottom center",
        once: true,
      },
    });

    tl.fromTo(
      parallaxa.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 2 }
    );
  }, []);
  return (
    <div ref={parallaxRef}>
      <div className="whole-portfolio">
        <div className="whole-project" ref={parallaxa}>
          <Link to={link}>
            <div
              className="image-pro"
              onMouseEnter={animateCover}
              onMouseLeave={coverMove}
            >
              <img src={pic} alt="" />
              <div ref={ref} className="port-img-cover">
                {" "}
                live Preview
              </div>
            </div>
          </Link>

          <div className="desvription">
            <div className="proj-title">{title}</div>
            <div className="proj-content">{content}</div>
            <div className="whole-logo">
              <div className="projec-logo">
                React <FaReact style={{ color: "#00d8ff" }} />
              </div>
              <div className="projec-logo">
                CSS <FaCss3Alt style={{ color: "#2965f1" }} />
              </div>
              <Link to={code} style={{ color: "#fff" }}>
                <div className="projec-logo">
                  Code <FaGithub />
                </div>
              </Link>
              <Link style={{ color: "#fff" }} to={link}>
                <div className="projec-logo">
                  Live Preview
                  <FiExternalLink />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Port({ title, content, pic, link, title2, code }) {
  const ref = useRef(null);
  const parallaxRef = useRef(null);
  const parallaxa = useRef(null);
  const animateCover = () => {
    gsap.fromTo(
      [ref.current],
      { height: "0px" },
      {
        height: "100%",
        opacity: "1",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        duration: 0.7,
        transformOrigin: "left",
        delay: 0.5,
      }
    );
  };

  const coverMove = () => {
    gsap.fromTo(
      [ref.current],
      { height: "100%" },
      {
        height: "0",
        display: "none",
        opacity: "0",
        duration: 0.7,
        transformOrigin: "top",
        delay: 0.5,
      }
    );
  };
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: parallaxRef.current,
        start: "top center",
        end: "bottom center",
        once: true,
      },
    });

    tl.fromTo(
      parallaxa.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 2 }
    );
  }, []);
  return (
    <div ref={parallaxRef}>
      <div className="whole-portfolio ">
        <div className="whole-project whole-sec" ref={parallaxa}>
          <div className="desvription">
            <div className="proj-title">
              {title}
              <span style={{ color: "brown" }}>{title2}</span>
            </div>
            <div className="proj-content">{content}</div>
            <div className="whole-logo back-port">
              <div className="projec-logo">
                React <FaReact style={{ color: "#00d8ff" }} />
              </div>
              <div className="projec-logo">
                CSS <FaCss3Alt style={{ color: "#2965f1" }} />
              </div>
              <Link to={code} style={{ color: "#fff" }}>
                <div className="projec-logo">
                  Code <FaGithub />
                </div>
              </Link>
              <div className="projec-logo">
                express <SiExpress style={{ color: "green" }} />
              </div>
              <div className="projec-logo">
                MongoDB <SiMongodb style={{ color: "green" }} />
              </div>
              <Link style={{ color: "#fff" }} to={link}>
                <div className="projec-logo">
                  Live Preview
                  <FiExternalLink />
                </div>
              </Link>
            </div>
          </div>
          <Link to={link}>
            <div
              className="image-pro"
              onMouseEnter={animateCover}
              onMouseLeave={coverMove}
            >
              <img src={pic} alt="" />
              <div ref={ref} className="port-img-cover">
                {" "}
                Live Preview
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
