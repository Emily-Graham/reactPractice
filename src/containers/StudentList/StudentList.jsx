import StudentCard from './../../components/StudentCards';
import students from "./../data/students.js";
import styles from "./StudentList.module.scss";
import ToggleButton from './../../components/ToggleButton';

const StudentList = ({setDarkMode, getDarkMode}) => {

  let classes= [];
  let hClasses = [];

  getDarkMode ? 
  classes.push(styles.studentCards, styles.darkApp) 
  && hClasses.push(styles.darkApp)
  : classes.push(styles.studentCards);

  return (
    <div className={styles.StudentList}>
      <h1 className={hClasses.join(" ")}> Iceland Students:</h1>
      <div className={classes.join(" ")}>
        {students.map((student, index) => {
          return (
            <div>
              <StudentCard 
                key={index}
                position={index} //propName = {propValue}, when catching a prop inside a child 
                firstName={student.firstName} 
                lastName={student.lastName}
                isPink = {index % 2 === 0}
                setDarkMode={setDarkMode} getDarkMode={getDarkMode}
              />
            </div>
          )
        })}
      </div>
      <ToggleButton setDarkMode={setDarkMode} getDarkMode={getDarkMode}/>
    </div>
  );
}

export default StudentList;
