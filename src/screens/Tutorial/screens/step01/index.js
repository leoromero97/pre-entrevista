import React from 'react';
import { Link } from 'react-router-dom';
import emLaugh from '../../../../assets/emojis/em_laugh.png';
import stStepper from '../../../../assets/steppers/st_stepper-01.png';
import icClose from '../../../../assets/icons/ic_close.png';
import MainCard from '../../../../components/Cards/MainCard';
import styles from './styles.module.scss';

function TutorialStep01() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.subtitle}>Tutorial</h2>
        <img src={stStepper} alt="paso 1" className={styles.stepper} />
        <Link to="/tutorial" >
          <img src={icClose} alt="cerrar" className={styles.iconClose} />
        </Link>
      </div>
      <h1 className={styles.title}>Niveles</h1>
      <p className={styles.textTutorial}>Cada nivel tiene preguntas, respondelas para avanzar al siguiente nivel</p>
      <div className={styles.containerCards}>
        <MainCard 
          level="Nivel 1"
          text="Se desbloqueo el siguiente nivel, completalo y sigue avanzando !"
          isTextTwo
          textTwo="Buena suerte"
          emoji={emLaugh}
        />
        <MainCard 
          level="Nivel 2"
          isBloqued
          text="Completa el Nivel 1 para desbloquear este nivel."
        />
        <MainCard 
          level="Nivel 3"
          isBloqued
          text="Completa el Nivel 2 para desbloquear este nivel."
        />
       </div> 
    </div>
  )
}

export default TutorialStep01;