import styles from "./Category.module.scss";

const Category = ({ category, onClick }) => {
  return (
    <div onClick={onClick} className={styles.container}>
      <img src={category.img} />
      <h3>{category.name}</h3>
    </div>
  );
};

export default Category;
