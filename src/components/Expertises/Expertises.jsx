import React from 'react'
import styles from './Expertises.module.css'
import {FaHtml5, FaCss3Alt, FaSquareJs, FaReact, FaSass, FaGitAlt, FaNode} from 'react-icons/fa6'

function Expertises() {
  return (
    <div className={styles.expertises_con}>
      <h3 className={styles.expertises_titles}>Expertises</h3>
      <ul className={styles.expertises_list}>
        <li>
          <FaHtml5/>
        </li>
        <li>
          <FaCss3Alt/>
        </li>
        <li>
          <FaSquareJs/>
        </li>
        <li>
          <FaReact/>
        </li>
        <li>
          <img className='cypress_icon' src='src\assets\Expertises-Logo\Cypress-Icon.svg'/>
        </li>
        <li>
          <FaGitAlt/>
        </li>
      </ul>
    </div>
  )
}

export default Expertises
