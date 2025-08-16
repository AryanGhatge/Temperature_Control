import styles from "./TempBox.module.css";
import Buttons from "../Buttons/Buttons";
import { useState } from "react";

const TempBox = () => {
  const [temperaturevalue, setTemperaturevalue] = useState(10);

  let temperatureColor = "";
  if (temperaturevalue >= 30) {
    temperatureColor = styles.hot;
  } else if (temperaturevalue <= 0) {
    temperatureColor = styles.cold;
  } else {
    temperatureColor = styles.neutral;
  }

  return (
    <>
      <div className={styles.tempBox}>
        <div className={styles.temp_display_container}>
          <div className={`${styles.temp_display} ${temperatureColor}`}>
            {temperaturevalue}°C
          </div>
        </div>
        <Buttons
          temperaturevalue={temperaturevalue}
          setTemperaturevalue={setTemperaturevalue}
        />
      </div>
    </>
  );
};
export default TempBox;
