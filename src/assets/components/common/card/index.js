import styles from "./styles.module.scss";

const Card = ({ children }) => {
  return (
    <div className={`uk-card uk-card-default uk-card-small ${styles.card}`}>
      <div className="uk-card-body">{children}</div>
    </div>
  );
};

export default Card;
