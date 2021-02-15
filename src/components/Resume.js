import "./Resume.css";
import React, { Component } from "react";
import EditField from "./EditField";

class Resume extends Component {
  render() {
    return (
      <div className="resumeBody">
        <p> {this.props.mode === "build" ? "Build mode" : null}</p>
        <EditField
          mode={this.props.mode}
          placeholder="Name and surname"
          tag="h1"
        />
        <div className="contactDetails">
          <p>
            Number:{" "}
            <EditField mode={this.props.mode} placeholder="Phone number" />
          </p>
          <p>
            Github:{" "}
            <EditField mode={this.props.mode} placeholder="Phone number" />
          </p>
          <p>
            Linkedin:{" "}
            <EditField mode={this.props.mode} placeholder="Phone number" />
          </p>
        </div>
        <div className="resumeSection">
          Education
          <EditField mode={this.props.mode} placeholder="Education entry 1" tag='p'/>
        </div>
        <div className="resumeSection">
          Work experience
          <EditField mode={this.props.mode} placeholder="Work experience entry 1" tag='p'/>
        </div>
        <div className="resumeSection">
          Skills
          <EditField mode={this.props.mode} placeholder="Skills entry 1" tag='li'/>
        </div>
      </div>
    );
  }
}

export default Resume;
