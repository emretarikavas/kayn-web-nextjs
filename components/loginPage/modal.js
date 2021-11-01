import React from 'react'
import styles from './styles/modal.module.css'
import Button from './button'
import Link from 'next/link'

function Modal({ show }) {
  return (
    <div
      style={{
        display: show ? 'flex' : 'none'
      }}
      className={styles.modal}
    >
      <div className={styles.content}>
        <div>
          <p className={styles.text}>T.C. Kimlik No</p>
          <br />
          <input type="text" maxLength="11" className={styles.input} />
          <br />
        </div>
        <div>
          <p className={styles.text}>Şifre</p>
          <br />
          <input type="password" maxLength="11" className={styles.input} />
          <br />
        </div>
        <div className={styles.button}>
          <Link href="/ziraat" passHref>
            <Button>Ziraat Giriş</Button>
          </Link>

          <Link href="/ziraat" passHref>
            <Button>Muhtar Giriş</Button>
          </Link>

          <Link href="/ziraat" passHref>
            <Button>Müdürlük Giriş</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Modal
