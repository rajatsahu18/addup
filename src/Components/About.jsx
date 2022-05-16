import React from "react";
import { SiTodoist } from "react-icons/si";
import { Link } from "react-router-dom";
import "./Styling/About.css";

const About = () => {

  return (
    <>
      <div>
        <h1 className="heading">
          The most popular free todo web app for everyone
        </h1>
        <h3 className="subHeading">
          Todo software used by millions. Add Up is a simple time
          <br />
          todo app that lets you add your daily task,
          <br />
          and helps you from procastination. Unlimited users, free forever.
        </h3>

        <Link to={`/registration`} style={{ textDecoration: "none" }}>
          <button className="startButton">START ADDING TASK-IT'S FREE!</button>
        </Link>
        <br />
        <br />
        <a
          style={{ textDecoration: "none" }}
          href="https://clockify.me/customers"
        >
          <img
            src="https://clockify.me/assets/images/signed-up-icon.svg"
            alt=""
          />
          103,466 people signed up last month
        </a>
      </div>
      <div style={{marginTop:"5%", backgroundColor: "#F7FCFF", height:"400px"}}>
        <br/>
        <h1 className="heading">Some unicorns companies uses our todo app</h1>
        <div>
          <img
            src="https://clockify.me/assets/images/customers-light-gray-3.svg"
            alt=""
          />
        </div>
      </div>

      <div className="addContainer">
        <div className="addDisplay">
          <div>
            <img
              src="https://clockify.me/assets/images/free-forever-clock-4.svg"
              alt=""
              style={{ marginRight: "90px", height: "450px" }}
            />
          </div>
          <div
            style={{ marginTop: "30px", marginLeft: "30px", width: "600px" }}
          >
            <div style={{ fontSize: "54px", color: "#03A9F4" }}>
              FREE <br />
              FOREVER!
            </div>
            <h4>
              <span style={{ color: "#42C3FD" }}>✓</span> Unlimited users
            </h4>
            <h4>
              <span style={{ color: "#42C3FD" }}>✓</span> Unlimited tracking
            </h4>
            <h4>
              <span style={{ color: "#42C3FD" }}>✓</span> Unlimited tasks
            </h4>
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: "50px",
          backgroundColor: "#F7FCFF",
          height: "400px",
        }}
      >
        <br /> <br /> <br />
        <h1 className="taskHeading">Start tracking task with Add Up</h1>
        <h3 className="subHeading">
        • Unlimited users • Free forever
        </h3>
        <Link to={`/registration`} style={{ textDecoration: "none" }}>
          <button className="startButton">CREATE FREE ACCOUNT</button>
        </Link>
        <br />
        <br />
        <a
          style={{ textDecoration: "none" }}
          href="https://clockify.me/customers"
        >
          <img
            src="https://clockify.me/assets/images/signed-up-icon.svg"
            alt=""
          />
          103,466 people signed up last month
        </a>
      </div>

      <div style={{marginBottom:"-10%"}}>
        <div style={{ display: "flex" }}>
          <div style={{ marginLeft: "30%" }}>
            <div style={{ marginTop: "100px" }}>
              <Link
                className="headers"
                to="/"
                style={{ color: "#42C3FD", cursor: "pointer" }}
              >
                <SiTodoist size={25} /> Add Up
              </Link>
            </div>

            <div>
              <Link to={`/login`} style={{ textDecoration: "none" }}>
                <p>LOG IN</p>
              </Link>
            </div>

            <div>
              <Link to={`/registration`} style={{ textDecoration: "none" }}>
                <p>SIGN UP</p>
              </Link>
            </div>
          </div>
          <div style={{ display: "flex", marginTop: "5%", marginLeft: "15%" }}>
            <div style={{ marginRight: "40%" }}>
              <h4>PRODUCT</h4>
              <p>Features</p>
              <p>Download</p>
              <p>Integration</p>
              <p>Extras</p>
            </div>
            <div style={{ marginRight: "40%" }}>
              <h4>Company</h4>
              <p>About Us</p>
              <p>Customer</p>
              <p>Resources</p>
              <p>Blog</p>
            </div>
            <div style={{ marginRight: "40%" }}>
              <h4>Support</h4>
              <p>Help</p>
              <p>Tutorials</p>
              <p>Api</p>
              <p>Contact</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
