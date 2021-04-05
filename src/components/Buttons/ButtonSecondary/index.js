import React from 'react';
import styles from './styles.module.scss';

function ButtonSecondary({text}) {
    return (
      <button type="submit" className={styles.button}>
        <p className={styles.buttonText}>{text}</p>
      </button>
    );
}

export default ButtonSecondary;
