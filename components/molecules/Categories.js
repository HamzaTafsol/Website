import styles from "./Categories.module.scss";

// Componentes
import Category from "../atoms/Category";

const Categories = ({ categories }) => {
  return (
    <div className={styles.container}>
      {categories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Categories;
