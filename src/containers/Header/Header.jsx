import styles from "./../Header";
import SearchBar from "./../../components/SearchBar";
import { useState } from "react";

const Header = ({getDarkMode}) => {
  const [searchTerm, setSearchTerm] = useState("");

  console.log(searchTerm);
  
  let classes =
  getDarkMode ? 
  [styles.Header, styles.darkApp__title]
  : [styles.Header];

  let pClasses =
  getDarkMode ? 
  [styles.Header__text, styles.darkApp__text] :
  [styles.Header__text];

  return (
    <header className={styles.Header}> 
      <h1 className={classes.join(" ")}>This is my React App</h1>
      <p className={pClasses.join(" ")}>This is working! It's a miracle!</p>
      <SearchBar searchTerm={searchTerm} onSubmit={setSearchTerm}/>
    </header>
  );
}

export default Header; 