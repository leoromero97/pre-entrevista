import React from 'react';
import styles from './styles.module.scss';
import Slider from './slider';
import atripla from '../../../../../../assets/atripla.png';

class CardZoom extends React.Component {
  render() {
    return (
      <div className={styles.card}>
        <h3 className={styles.title}>ATRIPLA</h3>
        <hr className={styles.hr}></hr>
        <img className={styles.imgPastilla} src={atripla} alt="medicineImagen" />
        <div className={styles.conposition}>
          <h3 className={styles.subtitleTablet}>Composición</h3>
          <p className={styles.textDates}>Efavirenz 600mg</p>
          <p className={styles.textDates}>Emtricitabina 200mg</p>
          <p className={styles.textDates}>Tenofovir 300mg</p>
          <h3 className={styles.subtitleTablet}>Cantidad de pastillas</h3>
        </div>
        <Slider />
        <p className={styles.alert}>Recordá pedir solo la cantidad de pastillas que necesites para que siempre haya medicación disponible para otres.</p>
        <div className={styles.condition}>
          <input type='checkbox' name='checkbox' className={styles.radio} required></input>
          <u>Acepto términos y condiciones</u>
        </div>
      </div>
    );
  }
}

export default CardZoom;
