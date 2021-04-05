import React from 'react';
import styles from './styles.module.scss';

class Cards extends React.Component {
  pasoId = () => {
    this.props.cambio(this.props.datos.id)
  }
  render() {
    return (
      <div className={styles.containerCards}>
        <div className={styles.containerBackground}>
          <div className={styles.containerTitle}>
            <h4 className={styles.titleFoundation}>{this.props.datos.title}</h4>
          </div>
          <hr />
          <div className={styles.containerDates}>
            <p className={styles.titleDate}><b>Dirección:</b></p>
            <p className={styles.dates}>
              {this.props.datos.direccion}<span> </span>
              {this.props.datos.altura}<span> </span>
              {this.props.datos.localidad}.</p>
            <p className={styles.titleDate}><b>Horarios:</b></p>
            <p className={styles.dates}>
              {this.props.datos.horarioApertura}
              <span> </span>a<span> </span>
              {this.props.datos.horarioCierre}.</p>
          </div>
        </div>
        <input type="radio" name="card" className={styles.checkbox} onChange={this.pasoId} id={this.props.datos.id} required />
      </div>
    );
  }
}

export default Cards;
