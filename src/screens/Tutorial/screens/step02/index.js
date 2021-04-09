import React from 'react';
import { Link } from 'react-router-dom';
import stStepper from '../../../../assets/steppers/st_stepper-02.png';
import icClose from '../../../../assets/icons/ic_close.png';
import ButtonSecondary from '../../../../components/Buttons/ButtonSecondary';
import styles from './styles.module.scss';
import FieldQuestion from '../../../../components/FieldQuestion';

function TutorialStep02() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.subtitle}>Tutorial</h2>
        <img src={stStepper} alt="Paso 2" className={styles.stepper} />
        <Link to="/tutorial" >
          <img src={icClose} alt="cerrar" className={styles.iconClose} />
        </Link>
      </div>
      <h1 className={styles.title}>Pregunta</h1>
      <div className={styles.containerField}>
      <FieldQuestion question="¿Dónde te ves en 5 años?" label="Escuchar" />
      </div>
      <p className={styles.textTutorial}>Si presionas el corazón se guardará la pregunta</p>
       <Link to="/tutorial-step-03" className={styles.containerButton}>
          <ButtonSecondary text="Siguiente" />
        </Link>
    </div>
  )
}

export default TutorialStep02;