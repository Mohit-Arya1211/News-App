import React, { Component } from "react";
import "./styles/Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footerSection">
        <div className="social">
          <a
            href="https://github.com/Mohit-Arya1211"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-2x fa-github" aria-hidden="true" />
          </a>

          <a
            href="https://www.linkedin.com/in/mohit-arya-574b60170/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-2x fa-linkedin" aria-hidden="true" />
          </a>
        </div>

        <button type="button" className="btn btn-link smoothScroll" href="#">
          <i className="fa fa-2x fa-arrow-up" aria-hidden="true" />
        </button>

        <span className="coffee">
          Made with
          <i className="fa fa-coffee" aria-hidden="true" />
          <a
            id="repo"
            href="https://github.com/Mohit-Arya1211/News-App"
            target="_blank"
            rel="noopener noreferrer"
          >
            Repo
            <i className="fa fa-code-fork" aria-hidden="true" />
          </a>
        </span>
      </div>
    );
  }
}

export default Footer;
