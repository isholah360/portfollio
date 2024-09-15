import React, { useRef, useState, useEffect } from "react";
import "./portfolio.css";
import Portfoilio, { Port } from "../../components/mypor/portfoilio";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const images = [
  { id: "1", imageName: "image1.jpeg ", tags: "design", info: "Web design" },
  {
    id: "2",
    imageName: "image2.jpeg ",
    tags: "branding",
    info: "Complete Branding",
    more: "More Info",
  },
  {
    id: "3",
    imageName: "image3.jpeg ",
    tags: "branding",
    info: "Complete Branding",
    more: "More Info",
  },
  {
    id: "4",
    imageName: "image4.jpg ",
    tags: "branding",
    info: "Product Design",
    more: "More Info",
  },
  {
    id: "5",
    imageName: "image5.jpg ",
    tags: "branding",
    info: "Coffee Cup Design",
    more: "More Info",
  },
  {
    id: "18",
    imageName: "image17.jpg ",
    tags: "branding",
    info: "Label Tag Mockup",
    more: "More Info",
  },
  {
    id: "17",
    imageName: "image18.jpg ",
    tags: "branding",
    info: "Modern Bag Mock",
    more: "More Info",
  },
  {
    id: "6",
    imageName: "image6.jpg ",
    tags: "ui/ux",
    info: "Health App",
    more: "More Info",
  },
  {
    id: "7",
    imageName: "image7.jpg ",
    tags: "ui/ux",
    info: "Crypto App",
    more: "More Info",
  },
  {
    id: "8",
    imageName: "image8.jpg ",
    tags: "ui/ux",
    info: "Crypto App",
    more: "More Info",
  },
  {
    id: "9",
    imageName: "image9.jpg ",
    tags: "ui/ux",
    info: "Bank App",
    more: "More Info",
  },
  {
    id: "10",
    imageName: "image10.png ",
    tags: "design",
    info: "Vacation Website",
    more: "More Info",
  },
  {
    id: "11",
    imageName: "image11.png ",
    tags: "design",
    info: "Saas Website",
    more: "More Info",
  },
  {
    id: "12",
    imageName: "image12.png ",
    tags: "design",
    info: "Award Website",
    more: "More Info",
  },
  {
    id: "13",
    imageName: "image13.png ",
    tags: "design",
    info: "Hair Website",
    more: "More Info",
  },
  {
    id: "14",
    imageName: "image14.png ",
    tags: "design",
    info: "Music Website",
    more: "More Info",
  },
  {
    id: "15",
    imageName: "image15.jpg ",
    tags: "design",
    info: "Drug Website ",
    more: "More Info",
  },
  {
    id: "16",
    imageName: "image16.jpg ",
    tags: "design",
    info: "Family Website",
    more: "More Info",
  },
];

const Portfolio = () => {
  const [tags, setTags] = useState("all");
  const [filtered, setFiltered] = useState([]);
  const parallaxRef = useRef(null);
  const parallaxa = useRef(null);

  useEffect(() => {
    tags === "all"
      ? setFiltered(images)
      : setFiltered(images.filter((image) => image.tags === tags));
  }, [tags]);

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
    <>
      <div className="port-folio">
        <div className="port-bg" handleTag={setTags}>
          <div className="port-head">
            <p>Showcasing some of my best work</p>
            <p className="portme">Portfolio</p>
            <hr className="horiline  horport"></hr>
          </div>

          <Port
            content=" A mobile-friendly platform connecting singles, 
            featuring user profiles, matching algorithms, messaging, 
            and location-based search for potential romantic partners."
            pic="/assets/news.png"
            title="Flash"
            title2="News"
            link="https://flashnews-y0dp.onrender.com/"
          />

          <br />
          <br />
          <Portfoilio
            content=" A dynamic web application showcasing property listings, allowing
              users to search, filter, and view detailed information about
              available real estate."
            pic="/assets/delan.png"
            title="Homer"
            link="https://realestate-68nv.vercel.app"
          />
          <br />
          <br />
          <Port
            content=" A mobile-friendly platform connecting singles, 
            featuring user profiles, matching algorithms, messaging, 
            and location-based search for potential romantic partners."
            pic="/assets/date.png"
            title="DateUp"
            link="https://dateup.vercel.app"
          />

          <br />
          <br />

          <div className="first-parallax" ref={parallaxRef}>
            <div className="seco-parallax" ref={parallaxa}>
              <Portfoilio
                content=" A dynamic web application showcasing property listings, allowing
              users to search, filter, and view detailed information about
              available real estate."
                pic="/assets/golfer.png"
                title="GOlf-Together"
                link="https://qrcode-psi-seven.vercel.app"
              />
            </div>
          </div>
          {/* <div className="btn-container" >
                <Button titles="all" handleTag={setTags}/>
                <Button titles="design" handleTag={setTags} />
                <Button titles="branding" handleTag={setTags}/>
                <Button titles="ui/ux" handleTag={setTags}/>
                </div>
                    <div className="image-container-outer">
                        <div className="image-container">
                            {filtered.map(image =>
                            <div key={image.id} className='img-card'>
                                <div key={image.imageName} className="carocover">
                                   <div className="fullinfo">
                                        <div className="info">{image.info}</div>
                                        <div className="moreinfo">{image.more}</div>
                                   </div>
                                </div>
                                <img className="realimg" src={`assets/${image.imageName}`} alt="" />
                            </div>)}

                        </div>
                    </div> */}
        </div>
      </div>
    </>
  );
};

const Button = ({ titles, handleTag }) => {
  return (
    <div
      onClick={() => {
        handleTag(titles);
      }}
    >
      <button className="button-prop">{titles.toUpperCase()}</button>
    </div>
  );
};

export default Portfolio;
