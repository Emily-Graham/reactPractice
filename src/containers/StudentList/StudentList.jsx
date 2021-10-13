import StudentCard from './../../components/StudentCards';
import students from "./../data/students.js";
import styles from "./StudentList.module.scss";

const StudentList = () => {

  return (
    <div className={styles.StudentList}>
      <h1> Iceland Students:</h1>
      <div className={styles.studentCards}>
        {students.map((student, index) => {
          return (
            <div>
              <StudentCard 
                key={index}
                position={index} //propName = {propValue}, when catching a prop inside a child 
                firstName={student.firstName} 
                lastName={student.lastName}
              />
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default StudentList;
