import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { UseModalContext } from "../context/ModalContext";
import products from '../api/productos.json';

export default function ProductList() {
  const { toggleModal } = UseModalContext();
  const { addToCart } = useContext(CartContext);

    const accion = (product) => {
      addToCart(product);
      // abrir modal después de agregar al carrito
      toggleModal();
    };

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 transition-colors duration-300">
      {products.map((p) => (
        <div
          key={p.id}
          className="shadow-lg rounded-xl p-4 flex flex-col items-center transition-colors duration-300"
           style={{ backgroundColor: "var(--card-bg)", color: "var(--text-color)" }}>
          <img
            src={p.img}
            alt={p.name}
            className="w-32 h-32 object-cover mb-2 rounded-md"
          />
          <h3 className="text-lg font-semibold">{p.name}</h3>
          <p style={{ backgroundColor: "var(--card-bg)", color: "var(--text-color)" }}>
            ${p.price}
          </p>
          <button
            onClick={() => accion(p)}
            className="mt-3 px-4 py-2 rounded-lg border-1  cursor-pointer shadow-md transition-all duration-300 transform hover:scale-105"   
          >
            Agregar al carrito
          </button>
        </div>
      ))}
    </div>
  );
}
