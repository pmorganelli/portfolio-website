import React from "react";

import styles from "./Contact.module.css";
import { Linkedin } from "../FeatherIcons/linkedIn";
import { Github } from "../FeatherIcons/githubIcon";
import { Mail } from "../FeatherIcons/mailIcon";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <Mail />
          <a href="mailto:petercarlmorganelli@gmail.com">petercarlmorganelli@gmail.com</a>
        </li>
        <li className={styles.link}>
          <Linkedin />
          <a href="https://www.linkedin.com/in/peter-morganelli-102860258/">linkedin.com/petermorganelli</a>
        </li>
        <li className={styles.link}>
          <Github />
          <a href="https://github.com/pmorganelli">github.com/pmorganelli5</a>
        </li>
      </ul>
    </footer>
  );
};