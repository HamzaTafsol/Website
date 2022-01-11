// Template base de la landing page

// Importamos los componentes
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";

// Componente Landing
const Landing = (props) => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Landing;