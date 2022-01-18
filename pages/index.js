import styles from "./index.module.scss";
import { Container, Select, MenuItem } from "@material-ui/core";

const Home = () => {
  return (
    <Container>
      <h1 className={styles.h1}>¡Los españoles FLIPAN!</h1>
      <h2 className={styles.h2}>
        Volamos por ti en{" "}
        <div className={styles.select}>
          <Select value="MAD">
            <MenuItem value="MAD">Madrid</MenuItem>
            <MenuItem value="BCN">Barcelona</MenuItem>
          </Select>
        </div>
      </h2>
    </Container>
  );
};

export default Home;
