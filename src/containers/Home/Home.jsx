import styles from "./Home.module.scss"
import StudentList from './../StudentList';

const Home = () => {
  return (
    <div className={styles.Home}>
      <StudentList />
    </div>
  );
};

export default Home;
