/* eslint-disable react/prop-types */
import styles from "./StarShipStyles.module.css";
function StarShipCard({ children }) {
    return <div className={styles.container}>{children}</div>;
}
export default StarShipCard;
