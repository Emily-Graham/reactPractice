import PropTypes from "prop-types";
import styles from "./Card.module.scss";

const Card = ({title, description, number}) => {
  let numberProp = 
    number !== undefined ? (
      <p className={styles.Card_Description}> 
      The Number passed as a prop is {number}
      </p>
     ) : (
      <></>
     );



  return (
    <div>
      <section className={styles.Card}>
        <h3 className={styles.Card_Title}>{title}</h3>
        <p className={styles.Card_Description}>{description}{numberProp}</p>
      </section>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  number: PropTypes.number,
};

Card.defaultProps = {
  title: "This is the default title",
  description: "This is the default description.",
}

export default Card;
