import { Fragment } from "react";
import { IconContext } from "react-icons";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Outlet, Link } from "react-router-dom";
import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <div className="logos-container">
          <Link to="https://github.com/skywalker-alt327">
            <IconContext.Provider
              value={{ className: "logo-container", color: "#171515" }}
            >
              <FaGithub />
            </IconContext.Provider>
          </Link>
          <Link to="https://www.linkedin.com/in/md-jabir-hossain-1a5454192/">
            <IconContext.Provider
              value={{ className: "logo-container", color: "#0072b1" }}
            >
              <FaLinkedin />
            </IconContext.Provider>
          </Link>
          <Link to="https://twitter.com/Hossain_M_J">
            <IconContext.Provider
              value={{ className: "logo-container", color: "#1da1f2" }}
            >
              <FaTwitter />
            </IconContext.Provider>
          </Link>
        </div>
        ;
        <div className="nav-links-container">
          <Link className="nav-link" to="/">
            HOME
          </Link>
          <Link className="nav-link" to="/about">
            ABOUT
          </Link>
          <Link className="nav-link" to="/projects">
            PROJECTS
          </Link>
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default Navigation;
