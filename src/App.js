import styles from './App.module.scss';
import Home from "./containers/Home";
import Header from './containers/Header';
import { useState } from "react";

const App = () => {
  
  const [getDarkMode, setDarkMode] = useState(false); 
  console.log(getDarkMode);

  let classes =
  getDarkMode ? 
  [styles.App, styles.darkApp]
  : [styles.App];

  return (
    <div className={classes.join(" ")}>
      <Header setDarkMode={setDarkMode} getDarkMode={getDarkMode}/>
      <Home setDarkMode={setDarkMode} getDarkMode={getDarkMode}/>
    </div>
  );
}

export default App;