import styles from "./Buttons.module.css";

const Buttons = () => {
  return (
    <div className={styles.buttonContainer}>
      <button className={styles.buttons}>+</button>
      <button className={styles.buttons}>-</button>
    </div>
  );
};

export default Buttons;
