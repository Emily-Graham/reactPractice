import styles from './App.module.scss';
import Home from "./containers/Home";
import Header from './containers/Header';

const App = () => {
  
  return (
    <div className={styles.App}>
      <Header />
      <Home />
    </div>
  );
}

export default App;