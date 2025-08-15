import styles from "./TempBox.module.css";

const TempBox = () => {
  return (
    <>
      <div className={styles.tempBox}>
        <div className={styles.temp_display_container}>
          <div className={styles.temp_display}>10°C</div>
        </div>
      </div>
    </>
  );
};

export default TempBox;
