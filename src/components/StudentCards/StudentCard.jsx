import styles from './StudentCard.module.scss';
import PropTypes from "prop-types";

const StudentCard = ({ firstName, lastName }) => {

  return (
    <div className={styles.StudentCard}>
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