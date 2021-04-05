import React from 'react';
import styles from './styles.module.scss';

class Slider extends React.Component {
  render() {
    return (
      <div className={styles.inputRange}>
        <div className={styles.trackBackground}>
          <span className={styles.cursor}>
            <span className={styles.labelValue}>          
              <div className={styles.slider}></div>
            </span>
          </span>
        </div>
      </div>
    );
  }
}

export default Slider;
