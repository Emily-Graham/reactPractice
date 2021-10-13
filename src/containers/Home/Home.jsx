import styles from "./Home.module.scss"
import StudentList from './../StudentList';

const Home = ({getDarkMode, setDarkMode}) => {
  return (
    <div className={styles.Home}>
      <StudentList setDarkMode={setDarkMode} getDarkMode={getDarkMode}/>
    </div>
  );
};

export default Home;
