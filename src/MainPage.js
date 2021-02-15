import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import "./mainpage.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import CodeIcon from "@material-ui/icons/Code";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import GitHubIcon from "@material-ui/icons/GitHub";
import { TextareaAutosize, TextField } from "@material-ui/core";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Bubles from "./Bubles";
import Footer from "./Footer";

function MainPage() {
  //declare and initialize states

  const [showSocial, setShowSocial] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  //listen to scroll events

  window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;

    if (scrolled >= 400) {
      setShowSocial(true);
    } else {
      setShowSocial(false);
    }
  });

  //return JSX

  return (
    <div className="main-body">
      <header>
        <motion.img
          initial={{ x: -200 }}
          transition={{
            type: "spring",
            stiffness: 120,
            delay: 3,
            duration: 1,
          }}
          animate={{ x: 0 }}
          src="FUN-D0.svg"
          alt="logo"
        />
        <nav>
          <div className="menu">
            <span
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className="menuicon"
            >
              <MenuIcon />
            </span>
            <motion.ul
              variants={variants}
              animate={!isOpen ? "open" : "closed"}
              className="menulist"
            >
              <h2>fundo's world</h2>
              <li>HOME</li>
              <li>RESUME</li>
              <li>PROJECTS</li>
              <li>CONTACTS</li>
            </motion.ul>
          </div>
          <ul className="nav-list">
            <motion.li
              initial={{ y: -100 }}
              transition={{ delay: 1, duration: 2 }}
              animate={{ y: 0 }}
            >
              HOME
            </motion.li>
            <motion.li
              initial={{ y: -100 }}
              transition={{ delay: 1.5, duration: 2 }}
              animate={{ y: 0 }}
            >
              RESUME
            </motion.li>
            <motion.li
              initial={{ y: -100 }}
              transition={{ delay: 2, duration: 2 }}
              animate={{ y: 0 }}
            >
              PROJECTS
            </motion.li>
            <motion.li
              initial={{ y: -100 }}
              transition={{ delay: 2.5, duration: 2 }}
              animate={{ y: 0 }}
            >
              CONTACTS
            </motion.li>
          </ul>
        </nav>
      </header>
      <div className="social-presence">
        <motion.span
          initial={{ x: -100 }}
          transition={{ x: { type: "spring", stiffness: 40, delay: 0 } }}
          animate={!showSocial ? { x: -100 } : { x: 0 }}
          whileHover={{ scale: 1.2, duration: 0 }}
        >
          <a href="mailto:xgamerpurge@gmail.com">
            <MailOutlineIcon id="icon" />
          </a>
        </motion.span>
        <motion.span
          initial={{ x: -100 }}
          transition={{ x: { type: "spring", stiffness: 60, delay: 0.2 } }}
          animate={!showSocial ? { x: -100 } : { x: 0 }}
          whileHover={{ scale: 1.2 }}
        >
          <a
            href="https://github.com/DemonDickUser"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon id="icon" />
          </a>
        </motion.span>
        <motion.span
          initial={{ x: -100 }}
          transition={{ x: { type: "spring", stiffness: 80, delay: 0.4 } }}
          animate={!showSocial ? { x: -100 } : { x: 0 }}
          whileHover={{ scale: 1.2 }}
        >
          <a
            href="http://www.thevhinyo.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <CodeIcon id="icon" />
          </a>
        </motion.span>
        <motion.span
          initial={{ x: -100 }}
          transition={{ x: { type: "spring", stiffness: 100, delay: 0.6 } }}
          animate={!showSocial ? { x: -100 } : { x: 0 }}
          whileHover={{ scale: 1.2 }}
        >
          <FacebookIcon id="icon" />
        </motion.span>
        <motion.span
          initial={{ x: -100 }}
          transition={{
            x: { type: "spring", stiffness: 120, delay: 0.8 },
            scale: { delay: 0 },
          }}
          animate={!showSocial ? { x: -100 } : { x: 0 }}
          whileHover={{ scale: 1.2, duration: 0 }}
        >
          <InstagramIcon id="icon" />
        </motion.span>
      </div>
      <div className="welcome-page">
        <span className="image" />
        <span className="screen-svg" />
        <h3>Welcome to my personal website</h3>
      </div>
      <div className="lines-and-circle">
        <span className="C" />
        <span className="hori-line" />
      </div>
      <div className="secong-page">
        {/*------bubels-----*/}
        <Bubles />
        {/* <div className="clouds">
          <img src="clouds.svg" alt="cloud" />
        </div> */}
        <div className="cards">
          <motion.div whileHover={{ scale: 1.2 }} className="card1-about">
            <h2>Who am I?</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perspiciatis aut pariatur enim obcaecati, non vitae animi ipsum
              est dolore unde deleniti facilis numquam ab sequi illum in? Ab,
              quas soluta?
            </p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} className="card2-about">
            <h2>What I do</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perspiciatis aut pariatur enim obcaecati, non vitae animi ipsum
              est dolore unde deleniti facilis numquam ab sequi illum in? Ab,
              quas soluta?
            </p>
          </motion.div>
        </div>
        {/* <div className="green-grass" /> */}
      </div>
      <div className="third-page">
        <Bubles />
        <h2>what I did</h2>
        <div className="cards">
          <div className="heading">
            <h3>TWITTER-CLONE</h3>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio,
            dolore beatae a ipsa quasi laudantium possimus libero quo error
            iusto, veniam molestiae, hic corporis. Consequatur nam praesentium
            ipsam ipsum quam.
          </p>
        </div>
        <div className="cards">
          <div className="heading">
            <h3>NETFLIX-CLONE</h3>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio,
            dolore beatae a ipsa quasi laudantium possimus libero quo error
            iusto, veniam molestiae, hic corporis. Consequatur nam praesentium
            ipsam ipsum quam.
          </p>
        </div>
        <div className="cards">
          <div className="heading">
            <h3>WHATSAPP-CLONE</h3>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio,
            dolore beatae a ipsa quasi laudantium possimus libero quo error
            iusto, veniam molestiae, hic corporis. Consequatur nam praesentium
            ipsam ipsum quam.
          </p>
        </div>
        <div className="cards">
          <div className="heading">
            <h3>THE VHINYO</h3>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio,
            dolore beatae a ipsa quasi laudantium possimus libero quo error
            iusto, veniam molestiae, hic corporis. Consequatur nam praesentium
            ipsam ipsum quam.
          </p>
        </div>
      </div>
      <div className="contacts">
        <h2>Contact Us</h2>
        <form action="submit">
          <TextField
            className="name-email-feild"
            id="outlined-basic "
            label="EMAIL"
            variant="outlined"
          />
          <TextField
            className="name-email-feild"
            id="outlined-basic"
            label="NAME"
            variant="outlined"
          />
          <TextareaAutosize
            id="textarea"
            aria-label="maximum height"
            rowsMin={5}
            placeholder="Leave us a message"
          />
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default MainPage;
