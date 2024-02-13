import React from 'react'
import styles from './Hero.module.css'
import { FaGithub, FaLinkedinIn, FaInstagram, FaLine, FaGoogle  } from "react-icons/fa6";
import { TypeAnimation } from 'react-type-animation';
import Tilt from 'react-parallax-tilt';

function Hero() {
  return (
    <div className={styles.hero_wrapper}>
      <div className={styles.container}>
        <div className={styles.hero_con}>
            <div className={styles.hero_info}>
                <p className={styles.text_1}>Welcome, it's me</p>
                <h3 className={styles.text_2}>Chanasin Thiamphet</h3>
                <p className={styles.text_3}>
                    <span style={{marginRight:'10px'}}>I'm a</span>
                    <TypeAnimation
                      sequence={[
                      // Same substring at the start will only be typed out once, initially
                      'Business Analyst',
                      1000, // wait 1s before replacing "Mice" with "Hamsters"
                      'Quality Assurance',
                      1000,
                    ]}
                    speed={50}
                    repeat={Infinity}
                    />
                </p>
                <p className={styles.text_4}>
                I am Business Analyst and Quality Assurance in Software House industry and worked on<br/>
                Agile Environment. Gathered and analyzed business requirements, created business flow<br/>
                to communicate with stakeholders. Designed and executed test cases and test scenarios<br/>
                to perform Manual and Automated Testing by Cypress Framework. 
                </p>
                <ul className={styles.hero_social}>
                    <li><a href="#"><FaGithub/></a></li>
                    <li><a href="#"><FaLinkedinIn/></a></li>
                    <li><a href="#"><FaInstagram/></a></li>
                    <li><a href="#"><FaLine/></a></li>
                    <li><a href="#"><FaGoogle/></a></li>
                </ul>
            </div>
            <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                <div className={styles.hero_img}>
                  <img src='src\assets\Profile-Logo\Profile-Picture.jpg' alt='Profile Picture'/>
                </div>
            </Tilt>
        </div>
      </div>
    </div>
  )
}

export default Hero
