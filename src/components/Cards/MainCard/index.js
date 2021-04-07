import React from 'react';
import icPadlock from '../../../assets/icons/ic_padlock.png';
import styles from './styles.module.scss';

function MainCard({level, text, isBloqued = false, isTextTwo = false, textTwo, emoji}) {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.level}>{level}</h2>
          {isBloqued && <img src={icPadlock} alt="bloqueado" className={styles.iconBloqued} />}
        </div>
        <p className={styles.buttonText}>{text}</p>
        {isTextTwo &&
          <div className={styles.footer}>
            <p className={styles.buttonText}>{textTwo}</p>
            <img src={emoji} alt="emoji" className={styles.emoji}/>
          </div>
        }
      </div>
    );
}

export default MainCard;
