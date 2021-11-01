import React from 'react'
import styles from './styles/button.module.css'

function Button({ children, href }) {
  return (
    <a href={href} className={styles.button}>
      {children}
    </a>
  )
}

export default Button
