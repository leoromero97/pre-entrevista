import React from 'react';
import styles from './styles.module.scss';

class Button extends React.Component {
  render() {
    return (
      <button type="submit" className={styles.button}>{this.props.title}</button>
    );
  }
}

export default Button;
