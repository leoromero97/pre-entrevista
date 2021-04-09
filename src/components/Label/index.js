import React from 'react';
import styles from './styles.module.scss';

function Label({ icon, label}) {
    return (
      <div className={styles.container}>
        <img src={icon} alt="icono" className={styles.icon}/>
        <p className={styles.label}>{label}</p>
      </div>
    );
}

export default Label;
