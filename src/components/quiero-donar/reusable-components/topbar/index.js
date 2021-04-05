import React from 'react';
import styles from './styles.module.scss';
import logo from '../../../../assets/logo.png';
import back from '../../../../assets/back.png';
import { Link } from 'react-router-dom';

function Topbar(props) {
  return (
    <nav className={styles.nav}>
      <button className={styles.button}>
        <Link to={props.link}>
          <img src={back} className={styles.iconBack} alt="atrás" />
        </Link>
      </button>
      <div>
        <img src={logo} className={styles.iconLogo} alt="logo" />
      </div>
    </nav>
  );
}

export default Topbar;
