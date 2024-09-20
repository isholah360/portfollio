import React from "react";
import "./contact.css";
function Contact() {
  return (
    <div>
      <div className="contact-bg">
        <div className="outside">
          <div className="contact-head">
            <p className="top-level">Feel free to contact me anytimes</p>
            <p className="contactme">Get In Touch</p>
            <hr className="horilin"></hr>
          </div>
          <div className="info-heading">
            <div className="themsg">Message</div>
            <div className="main-contact-head">Contact Info</div>
          </div>

          <div className="formandetail">
            <div className="test">
              <div className="name-mail">
                <div className="input-fir">
                  <input
                    className="testingfir "
                    type="text"
                    name=""
                    id=""
                    placeholder="Name"
                  />
                </div>
                <br className="brake" />

                <div className="input-sec">
                  <input
                    className="testingsec  testfir"
                    type="text"
                    name=""
                    id=""
                    placeholder="mail"
                  />
                </div>
              </div>
              <br></br>
              <br></br>
              <input
                className="thesubject"
                type="text"
                name=""
                id=""
                placeholder="Subject"
              />
              <br></br>
              <br></br>
              <textarea
                className="themsgz"
                name=""
                id=""
                cols="55"
                rows="12"
                placeholder="Message"
              />
              <button className="submit-buton">Submit</button>
            </div>
            <div className="main-torm-det">
              <div className="moredetail">
                <div className="myinfo">
                  <div className="mainmyinfo">Message</div>
                  <div className="main-contact-body">
                    Always available for freelance work if the right project
                    comes along, Feel free to contact me!
                  </div>
                </div>
              </div>
              <div className="compl-personal-info">
                <div className="cont">Contact Info</div>
              </div>
              <hr className="classic" />
              <div className="personalinfo">
                <div className="individual-info">
                  <div className="inside-image">
                    <img className="img-logo" src="assets/name.png" alt="" />
                  </div>
                  <div className="inside-info">
                    <p className="myname">Name</p>
                    <div className="information">Abdulfatah Abdulrasheed</div>
                  </div>
                </div>
                <div className="individual-info">
                  <div className="inside-image">
                    <img className="img-logo" src="assets/home.png" alt="" />
                  </div>
                  <div className="inside-info">
                    <p className="myname">Location</p>
                    <div className="information">
                      Adekunle Fajuyi Barracks, Ojoo, Ibadan
                    </div>
                  </div>
                </div>
                <div className="individual-info">
                  <div className="inside-image">
                    <img
                      className="img-logo"
                      src="assets/telephone.png "
                      alt=""
                    />
                  </div>
                  <div className="inside-info">
                    <p className="myname">Telephone</p>
                    <div className="information">+2348068235454</div>
                  </div>
                </div>
                <div className="individual-info">
                  <div className="inside-image">
                    <img className="img-logo" src="assets/email.png" alt="" />
                  </div>
                  <div className="inside-info">
                    <p className="myname">Email Me</p>
                    <p className="information">isholah360@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
