import React from 'react'
import Image from 'next/image'
import Logo from '../../assets/logo.png'
import styles from './styles/navbar.module.css'

function Navbar({ openModal }) {
  return (
    <nav className={styles.container}>
      <Image src={Logo} alt="Logo" width={100} height={100} />
      <p onClick={openModal} className={styles.login}>
        Giriş Yap
      </p>
    </nav>
  )
}

export default Navbar
