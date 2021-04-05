import React from 'react';

import Topbar from '../../reusable-components/topbar';
import Searcher from '../../reusable-components/searcher';
import ContainerPastis from './medicine-container';
import Button from '../../reusable-components/button';
import Medicines from '../../../dates/medicines';
import { withRouter } from 'react-router-dom';

import styles from './styles.module.scss';

class MedicineSelector extends React.Component {

  state = {
    id: 0,
    buscador: ""
  }

  cambio = (param) => {
    this.setState({ id: param });
  }

  buscador = (palabra) => {
    this.setState({ buscador: palabra });
  }

  submit = (e) => {
    e.preventDefault();
    this.props.medicamentos(this.state.id);
    this.props.history.push("tablet");
  }

  render() {
    console.log(this.state);
    return (
      <div className={styles.containerPrincipal}>
        <Topbar link={"/"} />
        <form onSubmit={this.submit} className={styles.containerTwo}>
          <Searcher placeholder="¿Qué medicamentos estás buscando?" buscador={this.buscador}  />
          <ContainerPastis datosMedicamentos={Medicines} cambio={this.cambio} placeholder={this.state.buscador} titleContainer="MEDICAMENTOS MÁS UTILIZADOS"/>
          <Button title="CONTINUAR" go={"tablet"} idMedicamentos={this.state.id} />
        </form>
        <footer className={styles.footer}>
          <hr className={styles.hrFoot} />
          <p className={styles.textFooter}>Copyright © 2019 YOSOY. Todos los derechos reservados.</p>
        </footer>
      </div>
    );
  }
}

export default withRouter(MedicineSelector);
