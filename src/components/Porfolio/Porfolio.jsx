import React from 'react'
import styles from './Portfolio.module.css'
import Tilt from 'react-parallax-tilt';

function Porfolio() {
  return (
    <div className={styles.port_con}>
      <h3 className={styles.port_title}>Porfolio</h3>  
      <div className={styles.port_list}>
        <div className={styles.port_items}>
          <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
            <img src="src\assets\Clients-Portfolio\Travel-Insurance\Login.svg"/>
          </Tilt>
            <p>Login Page</p>
        </div> 
        <div className={styles.port_items}>
          <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
            <img src="src\assets\Clients-Portfolio\Travel-Insurance\Insurance-Selection.svg"/>
          </Tilt>
            <p>Insurance Selection</p>
        </div> 
        <div className={styles.port_items}>
          <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
            <img src="src\assets\Clients-Portfolio\Travel-Insurance\Insurance-Purchase.svg"/>
          </Tilt>
            <p>Insurance Puchase</p>
        </div> 
        <div className={styles.port_items}>
          <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
            <img src="src\assets\Clients-Portfolio\E-Commerce\Product-Catalog.svg"/>
          </Tilt>
            <p>Product Catalog</p>
        </div> 
        <div className={styles.port_items}>
          <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
            <img src="src\assets\Clients-Portfolio\E-Commerce\Product-Cart.svg"/>
          </Tilt>
            <p>Product Cart</p>
        </div> 
        <div className={styles.port_items}>
          <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
            <img src="src\assets\Clients-Portfolio\E-Commerce\Payment-Credit-Card.svg"/>
          </Tilt>
            <p>Credit Card Payment</p>
        </div> 
      </div>
    </div>
  )
}

export default Porfolio
