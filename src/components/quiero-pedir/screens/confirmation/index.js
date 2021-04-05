import React from 'react';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import logoBlue from '../../../../assets/logoBlue.png';
import closeBlue from '../../../../assets/closeBlue.png';

function Confirmation() {
  return (
    <div className={styles.containerEnd}>
      <nav className={styles.nav}>
        <button className={styles.buttonClose}>
          <img src={closeBlue} className={styles.closeBlue} alt="cerrar" />
        </button>
        <div>
          <img src={logoBlue} className={styles.logoBlue} alt="logo" />
        </div>
      </nav>
      <div className={styles.containerText}>
        <h1 className={styles.title}>¡Todo listo!</h1>
        <p className={styles.text}>La Fundacion Hablemos de HIV te está esperando.</p>
        <p className={styles.text}> Recordá que solo podemos reservar la medicación que pediste durante las proximas 72hs.</p>
        <h2 className={styles.subtitle}>¿Qué tengo que llevar?</h2>
        <p className={styles.text}>Solo necesitás presentar tu DNI.</p>
      </div>
      <footer className={styles.footer}>
        <button className={styles.buttonEnd}>
          <Link to="/" className={styles.link}>
            FINALIZAR
            </Link>
        </button>
        <hr className={styles.hrFooterEnd} />
        <p className={styles.textFooter}>Copyright © 2019 YOSOY. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default Confirmation;
