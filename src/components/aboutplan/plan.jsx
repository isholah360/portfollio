import React from "react";
import "./plan.css";

function Plan(props) {
  const { naming, source, amount } = props;
  return (
    <div>
      <div className="plcard">
        <img className="aboutimg" src={source} alt="" />
        <div className="standard">{naming}</div>
        <div className="amount">{amount}</div>
        <div>Mobile App Design</div>
        <div>Responsive Design</div>
        <div>Database Development</div>
        <div>Web Design</div>
        <div>Web Design</div>
        <div>24/7 Support</div>
        <button>Get Started</button>
      </div>
    </div>
  );
}

export default Plan;
