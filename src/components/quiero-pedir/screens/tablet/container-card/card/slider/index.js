import React from 'react';
import styles from './styles.module.scss';

class Slider extends React.Component {
 state = { value: "" }
 rangavalue = (e) => {
   this.setState({value: e.target.value })
 }

  render() {
    return (
      <div>
        <input className={styles.slider} type="range" maxValue={10} minValue={0}  onMouseMove={this.rangavalue} />
        <output>{this.props.rangavalue}</output>
      </div>
    );
  }
}

export default Slider;
