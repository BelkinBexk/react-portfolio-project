import React from 'react'
import styles from './Contact.module.css'
import { FaPhone, FaEnvelope } from 'react-icons/fa6'

function Contact() {
  return (
    <div className={styles.contact_wrapper}>
      <div className={styles.contact_con}>
        <div className={styles.contact_info}>
            <h3>Get in touch</h3>
            <p className={styles.contact_desc}>
            Ready to take your business to the next level?<br/>
            Get in touch with us today to discuss how our services can help you achieve your goals.<br/>
            Whether you're looking for web development, automation testing, or business consulting, our team is here to support you every step of the way.<br/>
            Let's collaborate and turn your vision into reality!"
            </p>
            <p className={styles.contact_address}>
            114/90 Rattanathibet Road, Saima<br/>
            Nonthaburi, Thailand
            </p>
            <p><FaPhone/> (+66) 92 514 1993</p>
            <p><FaEnvelope/> chanasin.bexk@gmail.com</p>
        </div>
        <div className={styles.contact_form}>
            <form action="">
                <div className={styles.input_group}>
                    <div>
                        <label htmlFor="first name">First Name</label>
                        <input type="text" placeholder='eg. Chanasin' />
                    </div>
                    <div>
                        <label htmlFor="last name">Last Name</label>
                        <input type="text" placeholder='eg. Thiamphet' />
                    </div>
                </div>
                    <label htmlFor="email address">Email Address</label>
                    <input type="email" placeholder='eg. chanasin.bexk@gmail.com'/>
                    <label htmlFor="message">Your message</label>
                    <textarea name="" id="" cols="30" rows="10" placeholder='Type here'></textarea>
                    <button type='submit'>Submit</button>                
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
