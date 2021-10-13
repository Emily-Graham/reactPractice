import styles from './ToggleButton.module.scss';

const ToggleButton = ({setDarkMode, getDarkMode}) => {
  
  const eventFunctionName = (event) => {
    setDarkMode(!getDarkMode); //this will toggle the dark styling on/off each time
  }

  return (
    <button onClick={eventFunctionName} className={styles.Button}>Toggle Night Mode</button> 
  )
}

export default ToggleButton;
