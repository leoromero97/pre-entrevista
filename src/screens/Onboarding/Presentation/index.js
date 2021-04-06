import React from 'react';
import { Link } from 'react-router-dom';
import ButtonPrimary from '../../../components/Buttons/ButtonPrimary';
import ButtonSecondary from '../../../components/Buttons/ButtonSecondary';
import styles from './styles.module.scss';

function Presentation() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Te damos la bienvenida a <span className={styles.titleGreen}>Pre Entrevista</span></h1>
      <p className={styles.text}>Practica antes de tu primer entrevista de RRHH, o si ya tuviste una podés dejar tu experiencia y ayudar a alguien que la necesite</p>
      <Link to="/tutorial">
        <ButtonPrimary text="¡ Practicar !"/>
      </Link>
      <ButtonSecondary text="Cargar experiencia"/>
    </div>
  )
}

export default Presentation;