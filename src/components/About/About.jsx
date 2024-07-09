import React from 'react'
import { getImageUrl } from '../../utils';
import styles from "./About.module.css";

export const About = () => {
  return (
  <section className={styles.container} id="about">
    <h2 className={styles.title}>About Me</h2>
    <div className={StyleSheet.content}>
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/cursonIcon.png")} alt="Cursor icon " />
             <div className={styles.aboutItemText}> 
                <h3>Frontend Developer</h3>
                <p>
                    I'm a frontend developer with experience in building responsive and optimized sites with complex React components from my time at Tufts JumboCode
                </p>
             </div>
        </li>
        <li className={styles.aboutItem} >
                <img src={getImageUrl("about/Server Icon.png")} alt="Server icon" />
             <div className={styles.aboutItemText}>
                <h3>Backend Developer</h3>
                <p>
                    I have experience developing fast and optimized server-side applications, interfaces, and APIs.
                </p>
             </div>
        </li>
        <li className={styles.aboutItem} >
                <img src={getImageUrl("about/About UI Icon.png")} alt="Cursor icon " />
             <div className={styles.aboutItemText}>
                <h3>UI Designer</h3>
                <p>
                    I have designed multiple landing pages and enjoy creating cool websites :)
                </p>
             </div>
        </li>
    </ul>
    </div>
    </section>
  );
};