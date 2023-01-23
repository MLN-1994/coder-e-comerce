import "./App.css"; 
import  AppRouter  from "./router/AppRouter"
import { CartProvider } from "./context/CartContext";
import { LoginProvider } from "./context/LoginContext";

function App() {
  return (
    <LoginProvider>
      <CartProvider>
        <AppRouter/>
      </CartProvider>
    </LoginProvider>
  );
}

export default App;
