import React from 'react';
import { Link } from 'react-router-dom';
import Topbar from '../../reusable-components/topbar';
import ContainerCard from './container-card';
import Button from '../../reusable-components/button';
import styles from './styles.module.scss';

class TabletDonar extends React.Component {
  render() {
    return (
      <div className={styles.containerTabletMain}>
        <Topbar link={"/medicine-selector-donar"} />
        <div className={styles.containerTablet}>
          <ContainerCard />
          <Link to="/foundations-selector-donar">
            <Button title="CONTINUAR" />
          </Link>
          <footer className={styles.footer}>
            <hr className={styles.hrFoot} />
            <p className={styles.textFooter}>Copyright © 2019 YOSOY. Todos los derechos reservados.</p>
          </footer>
        </div>
      </div>
    );
  }
}

export default TabletDonar;
