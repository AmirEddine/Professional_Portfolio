import React from 'react'
import styles from '../styles/toggler.module.css'
import { useTheme } from './ThemeProvider';

const ThemeToggler = () => {
    let [theme, setTheme] = useTheme();
    const handleThemeChange = (event) => {
        setTheme(event.target.checked ? 'dark' : 'light');
    }
  return <>
   <div className={styles.toggleSwitch}>
  <label className={styles.switchLabel}>
    <input type="checkbox" className={styles.checkbox} 
     checked={theme === 'dark'} 
     onChange={handleThemeChange}/>
    <span className={styles.slider}></span>
  </label>
    </div>  
  </>
}

export default ThemeToggler