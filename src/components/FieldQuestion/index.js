import React from 'react';
import icAudio from '../../assets/icons/ic_audio.png';
import icfavorite from '../../assets/icons/ic_favorite.png';
import styles from './styles.module.scss';

function FieldQuestion({question, label}) {
  return(
    <div className={styles.container}>
      <h3 className={styles.question}>{question}</h3>
      <div className={styles.subContainer}>
        <img src={icAudio} alt="audio" className={styles.iconAudio} />
        <p className={styles.label}>{label}</p>
        <img src={icfavorite} alt="audio" className={styles.iconFavorite} />
      </div>
    </div>
  );
}

export default FieldQuestion;