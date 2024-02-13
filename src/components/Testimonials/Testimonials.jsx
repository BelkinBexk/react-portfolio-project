import React from 'react'
import styles from './Testimonials.module.css'
import Tvi from '../../../public/TVI-Logo.png'
import Thun from '../../../public/Thun-Logo.svg'
import Tm from '../../../public/TM-Logo.svg'
function Testimonials() {
  return (
    <div className={styles.testi_con}>
        <h3 className={styles.testi_title}>Testimonials</h3>
        <div className={styles.testi_list}>
            <div className={styles.testi_items}>
                <p>
                Partnering with the web development team for our travel insurance platform was an absolute game-changer.
                Their expertise in crafting user-friendly interfaces and seamless functionalities truly elevated our online presence.
                </p>
                <img src={Tvi}/>
                <h4>Michael Brown</h4>
                <p className={styles.bio}>Thaivivat Hansa Insurance</p>
            </div>
            <div className={styles.testi_items}>
                <p>
                The automation testing services provided by this team have revolutionized our software development process.
                Their expertise in test automation frameworks helps in time reduction and software quality. 
                </p>
                <img src={Thun}/>
                <h4>Emily Johnson</h4>
                <p className={styles.bio}>E-Commerce</p>
            </div>
            <div className={styles.testi_items}>
                <p>
                Working with the business consulting team was a game-changer for our company.
                Strategic insights and actionable recommendations helped us identify new growth opportunities and streamline our operations.
                </p>
                <img src={Tm}/>
                <h4>Teoman Alan</h4>
                <p className={styles.bio}>CEO</p>
            </div>
        </div>
      
    </div>
  )
}

export default Testimonials
