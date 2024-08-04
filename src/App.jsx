import "./index.css";

import DessertsCategory from "./components/DessertsCategory";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart";

function App() {
  return (
    <main>
      <CartProvider>
        <DessertsCategory />
        <Cart />
      </CartProvider>
    </main>
  );
}

export default App;
