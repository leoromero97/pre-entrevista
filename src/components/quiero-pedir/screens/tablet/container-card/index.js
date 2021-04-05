import React from 'react';
import styles from './styles.module.scss';
import CardZoom from './card';

class ContainerCard extends React.Component {
  render() {
    return (
      <div className={styles.containerCard}>
        <CardZoom />
      </div>
    );
  }
}

export default ContainerCard;
