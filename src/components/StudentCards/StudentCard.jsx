import styles from './StudentCard.module.scss';
import PropTypes from "prop-types";

const StudentCard = ({ firstName, lastName, position, isPink, getDarkMode, setDarkMode }) => {


  const classes = [styles.StudentCard];

  if (getDarkMode) {
    classes.push(styles.darkApp);
  }
  if (isPink) {
    classes.push(styles.isPink)
  }

  return (
    <div className={classes.join(" ")}>
      <h3>First Name: {firstName}</h3>
      <h3>Last Name: {lastName}</h3>
    </div>
  );
};

StudentCard.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  isPink: PropTypes.bool,
}

export default StudentCard;
