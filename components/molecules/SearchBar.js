// Importamos los componentes
import { Toolbar, makeStyles } from "@material-ui/core";
import { motion } from "framer-motion";
import { searchBarAnimation } from "../../utils/animations";
import { useInView } from "react-intersection-observer";
import { useRef, useEffect } from "react";

// Iconos
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

// Componente principal
const SearchBar = (props) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  const inputRef = useRef();

  // on inView change
  // set input focus
  useEffect(() => {
    if (inView) {
      inputRef.current.focus();
    }
  }, [inView]);

  return (
    <motion.div
      variants={searchBarAnimation}
      initial="hidden"
      animate={props.opened ? "visible" : "hidden"}
      style={{
        position: "absolute",
        padding: "2.4rem",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "white",
        alignItems: "center",
        width: "100%",
        zIndex: "10",
      }}
      ref={ref}
    >
      <SearchIcon fontSize="large" />
      <input
        type="text"
        placeholder="Buscar"
        style={{
          width: "50%",
          border: "none",
          fontSize: "1.5rem",
          padding: "1rem",
          outline: "none",
          borderBottom: "3px solid #abe236",
          marginLeft: "1rem",
          marginRight: "1rem",
          fontWeight: "bold",
        }}
        onChange={(e) => props.setValue(e.target.value)}
        value={props.value}
        ref={inputRef}
      />
      <motion.div
        onClick={() => {
          props.setOpened(false);
        }}
        style={{
          color: "#2c2c2c",
          cursor: "pointer",
        }}
        whileHover={{
          color: "#abe236",
          transition: {
            duration: 0.2,
          },
        }}
      >
        <CloseIcon fontSize="large" />
      </motion.div>
    </motion.div>
  );
};

export default SearchBar;
