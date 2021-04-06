import React from 'react';
import styles from './styles.module.scss';

function ButtonTertiary({text}) {
    return (
      <button type="submit" className={styles.button}>
        <p className={styles.buttonText}>{text}</p>
      </button>
    );
}

export default ButtonTertiary;
