import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import stStepper from '../../../../assets/steppers/st_stepper-03.png';
import icClose from '../../../../assets/icons/ic_close.png';
import ButtonSecondary from '../../../../components/Buttons/ButtonSecondary';
import FieldQuestion from '../../../../components/FieldQuestion';
import RequestCard from '../../../../components/Cards/RequestCard';
import styles from './styles.module.scss';;

function TutorialStep03() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.subtitle}>Tutorial</h2>
        <img src={stStepper} alt="Paso 3" className={styles.stepper} />
        <Link to="/tutorial" >
          <img src={icClose} alt="cerrar" className={styles.iconClose} />
        </Link>
      </div>
      <h1 className={styles.title}>Respuestas</h1>
      <div className={styles.containerField}>
      <FieldQuestion question="¿Dónde te ves en 5 años?" label="Escuchar" />
      </div>
      <p className={styles.textTutorial}>Debes elegir una de las opciones</p>
      <RequestCard text="Trabajando en una empresa" />
      <RequestCard text="Recorriendo el mundo" />
      <RequestCard text="Con 3 hijos" />
       <Link to="/tutorial-step-04" className={styles.containerButton}>
          <ButtonSecondary text="Siguiente" />
        </Link>
    </div>
  )
}

export default TutorialStep03;