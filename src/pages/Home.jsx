import Headers from "../components/Headers";
import ProductList from "../components/ProductList";
import CartModal from "../components/CartModal";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div
      className="min-h-screen transition-colors duration-300"
       style={{ backgroundColor: "var(--bg-color)", color: "var(--text-color)" }}
    >
      <Headers/>
      <ProductList/>
      <CartModal/>
      <Footer/>
    </div>

  );
};

export default Home;