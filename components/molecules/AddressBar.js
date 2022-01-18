import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import styles from "./AddressBar.module.scss";

const AddressBar = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.input}>
        <div className={styles.icon}>
          <LocationOnOutlinedIcon />
        </div>
        <input type="text" placeholder="Introduce tu direccion completa" />
        <div className={styles.icon}>
          <ChevronRightIcon />
        </div>
      </div>
    </div>
  );
};

export default AddressBar;
