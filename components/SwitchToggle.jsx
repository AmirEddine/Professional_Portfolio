import React, { useState } from 'react';
import styles from '../styles/langue_toggler.module.css'

function SwitchToggle() {
  const [isChecked, setIsChecked] = useState(false);

  function handleToggle() {
    setIsChecked(!isChecked);
  }

  return (
    <label className={styles.switch}>
      <input type="checkbox" checked={isChecked} onChange={handleToggle} />
      <span className={styles.slider}></span>
    </label>
  );
}
export default SwitchToggle;
