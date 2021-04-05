import React from 'react';
import { Link } from 'react-router-dom';
import vcSuperior from '../../../assets/vectors/vc_ola-superior.png';
import vcInferior from '../../../assets/vectors/vc_ola-inferior.png';
import ButtonPrimary from '../../../components/Buttons/ButtonPrimary';
import styles from './styles.module.scss';

function Cover() {
  return (
    <div className={styles.container}>
      <img src={vcSuperior} className={styles.vectorSuperior} alt="vector" />
      <h1 className={styles.title}>Pre Entrevista</h1>
      <Link to="/presentation">
        <ButtonPrimary text="Empezar"/>
      </Link>
      <img src={vcInferior} className={styles.vectorInferior} alt="vector" />
    </div>
  );
}

export default Cover;
