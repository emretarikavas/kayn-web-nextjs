import React, { useState } from 'react'
import styles from '../styles/loginPage.module.css'
import Navbar from '../components/loginPage/navbar'
import Modal from '../components/loginPage/modal'

function LoginPage() {
  const [show, setShow] = useState(false)

  const openModal = () => {
    setShow(true)
  }
  const closeModal = () => {
    setShow(false)
  }

  return (
    <div className={styles.background}>
      <Navbar openModal={openModal} />
      <div className={styles.container}>
        <Modal show={show} />
      </div>
    </div>
  )
}

export default LoginPage
