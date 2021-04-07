import React from 'react';
import { Link } from 'react-router-dom';
import ButtonPrimary from '../../components/Buttons/ButtonPrimary';
import ButtonTertiary from '../../components/Buttons/ButtonTertiary';
import styles from './styles.module.scss';

function Tutorial() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Antes de comenzar te mostramos un breve tutorial de como practicar</h1>
      <Link to="/tutorial-step-01">
        <ButtonPrimary text="¡ Comenzar tutorial !"/>
      </Link>
      <ButtonTertiary text="Omitir"/>
    </div>
  )
}

export default Tutorial;