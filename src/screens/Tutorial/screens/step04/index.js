import React from 'react';
import { Link } from 'react-router-dom';
import emLaugh from '../../../../assets/emojis/em_laugh.png';
import stStepper from '../../../../assets/steppers/st_stepper-04.png';
import icClose from '../../../../assets/icons/ic_close.png';
import Label from '../../../../components/Label'
import ButtonSecondary from '../../../../components/Buttons/ButtonSecondary';
import styles from './styles.module.scss';
import dataUserTutorial from './constants';

function TutorialStep04() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.subtitle}>Tutorial</h2>
        <img src={stStepper} alt="Paso 2" className={styles.stepper} />
        <Link to="/tutorial" >
          <img src={icClose} alt="cerrar" className={styles.iconClose} />
        </Link>
      </div>
      <h1 className={styles.title}>Mi perfil</h1>
      <div className={styles.header}>
        <div className={styles.burger}>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
        </div>
        <span className={styles.borderAvatar}>
          <img src={emLaugh} alt="Avatar" className={styles.avatar} />
        </span>
      </div>
      <p className={styles.textTutorial}>En el menú que está a la izquierda vas a poder elegir las opciones para editar el perfil, y cerrar la sesión</p>
      <div className={styles.containerDataUser}>
       {dataUserTutorial.map(({ ...item}) =>(
         <Label key={item.id} icon={item.icon} label={item.label}/>
       ))}
       </div>
       <Link to="/" className={styles.containerButton}>
          <ButtonSecondary text="Siguiente" />
        </Link>
    </div>
  )
}

export default TutorialStep04;