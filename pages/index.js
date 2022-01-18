import styles from "./index.module.scss";
import { Container, Select, MenuItem } from "@material-ui/core";

// Componentes
import AddressBar from "../components/molecules/AddressBar";
import Categories from "../components/molecules/Categories";

// Categorias
const categories = [
  {
    id: 1,
    name: "Restaurantes",
    img: "/delivery.png",
  },
  {
    id: 2,
    name: "Tiendas",
    img: "/stores.png",
  },
  {
    id: 3,
    name: "Market",
    img: "/mercado.png",
  },
  {
    id: 4,
    name: "Mascotas",
    img: "/mascotas.png",
  },
  {
    id: 5,
    name: "Farmacia",
    img: "/farmacia.png",
  },
  {
    id: 6,
    name: "Lo que sea",
    img: "/loquesea.png",
  },
];

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
      <AddressBar />
      <Categories categories={categories} />
    </Container>
  );
};

export default Home;
