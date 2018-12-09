import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Grid, Cell } from "react-mdl";
import "./Landing.css";
import "react-mdl/extra/material.js";
import { Header, Navigation, Layout } from "react-mdl";
import Animation from "./animation";
class LandingPage extends Component {
  render() {
    return (
      <Grid className="landing-grid">
        <Cell col={12}>
          <Animation Become Full Stack Developer />

          <div className="banner-text">
            <h1> Become Full Stack Developer </h1>

            <p>
              HTML/CSS | Bootstrap | JavaScript | ReactJS | React Native |
              NodeJS | Express | Swift
            </p>

            <div className="social-links">
              {/* LinkedIn */}
              <a
                href="http://google.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-linkedin-square" aria-hidden="true" />
              </a>

              {/* Github */}
              <a
                href="http://google.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-github-square" aria-hidden="true" />
              </a>
            </div>
          </div>
        </Cell>
      </Grid>
    );
  }
}
export default LandingPage;
