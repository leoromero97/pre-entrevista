import React from 'react';
import icPadlock from '../../../assets/icons/ic_padlock.png';
import styles from './styles.module.scss';

function RequestCard({level, text, isBloqued = false, isTextTwo = false, textTwo, emoji}) {
    return (
      <div className={styles.container}>
        <p className={styles.buttonText}>{text}</p>
      </div>
    );
}

export default RequestCard;
