import React from 'react'
import styles from './Portfolio.module.css'
import Tilt from 'react-parallax-tilt';
import Login from '../../../public/Login.svg'
import InsuranceSelection from '../../../public/Insurance-Selection.svg'
import InsurancePurchase from '../../../public/Insurance-Purchase.svg'
import ProductCatalog from '../../../public/Product-Catalog.svg'
import ProductCart from '../../../public/Product-Cart.svg'
import CreditCard from '../../../public/Payment-Credit-Card.svg'

function Porfolio() {
  return (
    <div className={styles.port_con}>
      <h3 className={styles.port_title}>Porfolio</h3>  
      <div className={styles.port_list}>
        <div className={styles.port_items}>
          <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
            <img src={Login}/>
          </Tilt>
            <p>Login Page</p>
        </div> 
        <div className={styles.port_items}>
          <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
            <img src={InsuranceSelection}/>
          </Tilt>
            <p>Insurance Selection</p>
        </div> 
        <div className={styles.port_items}>
          <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
            <img src={InsurancePurchase}/>
          </Tilt>
            <p>Insurance Puchase</p>
        </div> 
        <div className={styles.port_items}>
          <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
            <img src={ProductCatalog}/>
          </Tilt>
            <p>Product Catalog</p>
        </div> 
        <div className={styles.port_items}>
          <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
            <img src={ProductCart}/>
          </Tilt>
            <p>Product Cart</p>
        </div> 
        <div className={styles.port_items}>
          <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
            <img src={CreditCard}/>
          </Tilt>
            <p>Credit Card Payment</p>
        </div> 
      </div>
    </div>
  )
}

export default Porfolio

