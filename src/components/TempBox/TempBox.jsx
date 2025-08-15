import styles from "./TempBox.module.css";
import Buttons from "../Buttons/Buttons";

const TempBox = () => {
  return (
    <>
      <div className={styles.tempBox}>
        <div className={styles.temp_display_container}>
          <div className={styles.temp_display}>10°C</div>
        </div>
        <Buttons />
      </div>
    </>
  );
};

export default TempBox;
