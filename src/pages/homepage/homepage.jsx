import React, { useRef, useState, useEffect } from "react";
import "./homepage.css";
import gsap from "gsap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Content from "../../components/headcontent/content";
import Animate from "../../components/animate/animate";
import Navbar from "../../components/navbar/navbar";
import { Power3 } from "gsap";
import { SiNestjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { RiNodejsLine } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", }}
      onClick={onClick}
    />
  );
}

function Homepage() {
  const bgimg = useRef(null);
  const ref = useRef(null);
  const close = useRef(null);
  const state = useRef(null);
  const [display, setDisplay] = useState(true);

  const change = () => {
    ref.current.classList = "show";
    gsap.fromTo(
      [ref.current, state.current],
      { y: "100vh" },
      {
        y: "0",
        duration: 0.7,
        ease: Power3.outIn,
        transformOrigin: "left",
        delay: 0.5,
        stagger: { amount: 1 },
      }
    );
  };
  const closed = () => {
    gsap.fromTo(
      [state.current, ref.current],
      { y: "0vh" },
      {
        y: "100vh",
        duration: 0.7,
        ease: Power3.outIn,
        transformOrigin: "left",
        delay: 0.5,
        stagger: { amount: 1 },
      }
    );
  };
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <div className="maainpages">
        <div className="firspage">
          <Navbar />
          <Animate />
          <div ref={bgimg} className="mainbg">
            <div className="thehead">
              <div className="name">Abdul-Fatah</div>
              <Content />
            </div>
            <div className="lang">
              <p className="eng">ENG</p>
              <p className="jap">YOR</p>
            </div>

            <div className="social-media">
              <hr style={{ color: "#fff" }} />
              <img className="media" src="assets/instagram.png" alt="" />
              <img className="media" src="assets/facebook.png" alt="" />
              <img className="media" src="assets/twitter.png" alt="" />
              <img className="media" src="assets/github.png" alt="" />
              <img className="media" src="assets/linkedin-logo.png" alt="" />
            </div>
            <div className="stacks">
              <Slider {...settings}>
                <div className="stack-nested">
                  <SiNestjs style={{ color: "#fff", fontSize: "2.2rem" }} />
                  <span className="stck-title">NestJs</span>
                </div>
                <div className="stack-nested">
                  <SiExpress style={{ color: "#fff", fontSize: "2.2rem" }} />
                  <span className="stck-title">express</span>
                </div>
                <div className="stack-nested">
                  <RiNodejsLine style={{ color: "#fff", fontSize: "2.2rem" }} />
                  <span className="stck-title">NodeJs</span>
                </div>
                <div className="stack-nested">
                  <SiTailwindcss style={{ color: "#fff", fontSize: "2.2rem" }} />
                  <span className="stck-title">Tailwindcss</span>
                </div>
                <div className="stack-nested">
                  <SiMongodb style={{ color: "#fff", fontSize: "2.2rem" }} />
                  <span className="stck-title">MongoDB</span>
                </div>
                <div className="stack-nested">
                  <SiPrisma style={{ color: "#fff", fontSize: "2.2rem" }} />
                  <span className="stck-title">Prisma</span>
                </div>
                <div className="stack-nested">
                  <FaReact style={{ color: "#fff", fontSize: "2.2rem" }} />
                  <span className="stck-title">ReactJs</span>
                </div>
                <div className="stack-nested">
                  <FaDocker style={{ color: "#fff", fontSize: "2.2rem" }} />
                  <span className="stck-title">Docker</span>
                </div>
                <div className="stack-nested">
                  <IoLogoFirebase
                    style={{ color: "#fff", fontSize: "2.2rem" }}
                  />
                  <span className="stck-title">Firebase</span>
                </div>
                <div className="stack-nested">
                  <RiNextjsFill style={{ color: "#fff", fontSize: "2.2rem" }} />
                  <span className="stck-title">NextJs</span>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
