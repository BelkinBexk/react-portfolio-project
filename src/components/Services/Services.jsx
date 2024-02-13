import React from 'react'
import styles from './Services.module.css'
import {FaCode, FaUsersGear } from 'react-icons/fa6'

function Services() {
  return (
    <div className={styles.services_con}>
      <h3 className={styles.services_title}>Services</h3>
      <div className={styles.services_list}>
        <div className={styles.services_items}>
            <FaCode/>
            <h4>Web Development</h4>
            <p>Customize web solutions tailored to your unique needs.
            From sleek and responsive websites to robust web applications.
            </p>
        </div>
        <div className={styles.services_items}>
            <img src='public\Automation-Icon.png'/>
            <h4>Automation Testing</h4>
            <p>Save time and improve the quality of<br/>
            your software with our automation<br/>
            testing services.
            </p>
        </div>
        <div className={styles.services_items}>
            <FaUsersGear/>
            <h4>Business Consulting</h4>
            <p>Gain strategic insights and guidance to propel your business forward with our comprehensive consulting services.
            </p>
        </div>
      </div>
    </div>

    )
}

export default Services
