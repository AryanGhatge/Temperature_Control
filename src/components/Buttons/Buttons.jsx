import styles from "./Buttons.module.css";

const Buttons = ({ temperaturevalue, setTemperaturevalue }) => {
  return (
    <div className={styles.buttonContainer}>
      <button
        className={styles.buttons}
        onClick={() => setTemperaturevalue(temperaturevalue - 1)}
      >
        -
      </button>
      <button
        className={styles.buttons}
        onClick={() => setTemperaturevalue(temperaturevalue + 1)}
      >
        +
      </button>
    </div>
  );
};

export default Buttons;
