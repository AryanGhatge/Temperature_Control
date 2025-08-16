import styles from "./TempBox.module.css";
import Buttons from "../Buttons/Buttons";
import { useState } from "react";

const TempBox = () => {
  const [temperaturevalue, setTemperaturevalue] = useState(10);

  // let temperatureColor = "";
  // if (temperaturevalue >= 30) {
  //   temperatureColor = styles.hot;
  // } else if (temperaturevalue <= 0) {
  //   temperatureColor = styles.cold;
  // } else {
  //   temperatureColor = styles.neutral;
  // }

  const getTemperatureColor = (temp) => {
    if (temp <= -10) return "#001f4d"; // very cold (dark blue)
    if (temp >= 50) return "#b30000"; // extreme hot (dark red)

    // Map temp to 0–1 range
    const minTemp = -10;
    const maxTemp = 50;
    const ratio = (temp - minTemp) / (maxTemp - minTemp);

    // Define color stops (blue → grey → orange → red)
    const colors = [
      [3, 90, 166], // cold blue (#035aa6)
      [184, 184, 184], // neutral grey
      [255, 82, 0], // hot orange
      [179, 0, 0], // extreme red
    ];

    // Find which two colors to blend
    const step = ratio * (colors.length - 1);
    const index = Math.floor(step);
    const t = step - index;

    const [r1, g1, b1] = colors[index];
    const [r2, g2, b2] = colors[Math.min(index + 1, colors.length - 1)];

    const r = Math.round(r1 + (r2 - r1) * t);
    const g = Math.round(g1 + (g2 - g1) * t);
    const b = Math.round(b1 + (b2 - b1) * t);

    return `rgb(${r}, ${g}, ${b})`;
  };

  return (
    <>
      <div className={styles.tempBox}>
        <div className={styles.temp_display_container}>
          <div
            className={styles.temp_display}
            style={{ backgroundColor: getTemperatureColor(temperaturevalue) }}
          >
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
