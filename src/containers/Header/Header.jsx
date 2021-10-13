import styles from "./../Header";
import SearchBar from "./../../components/SearchBar";
import { useState } from "react";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");

  console.log(searchTerm);

  return (
    <header className={styles.Header}> 
      <h1 className={styles.Header}>This is my React App</h1>
      <p className={styles.Header__text}>This is working! It's a miracle!</p>
      <SearchBar searchTerm={searchTerm} onSubmit={setSearchTerm}/>
    </header>
  );
}

export default Header; 