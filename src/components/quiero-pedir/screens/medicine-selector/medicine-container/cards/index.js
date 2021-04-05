import React from 'react';
import styles from './styles.module.scss';
import atripla from '../../../../../../assets/atripla.png';

class Card extends React.Component {
  pasoId = () => {
    this.props.cambio(this.props.datos.id)
  }
  render() {
    return (
      <div className={styles.containerCards}>
        <div className={styles.containerBackground}>
          <div className={styles.containerTitle}>
            <h1 className={styles.titleMedicine}>{this.props.datos.title}</h1>
          </div>
          <hr />
          <img className={styles.imgPastilla} src={atripla} alt="Imagen del medicamento" />
        </div>
        <div className={styles.containerDates}>
          <p className={styles.grams}>{this.props.datos.gramos}mg</p>
        </div>
        <input type="radio" name="card" id={this.props.datos.id} className={styles.checkbox} 
          onChange={this.pasoId} onClick={this.onClick} required/>
      </div>
    );
  }
}

export default Card;
