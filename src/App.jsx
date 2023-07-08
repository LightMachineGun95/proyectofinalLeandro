import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainRouter from './router/MainRouter';
import { CartProvider } from './context/CartContext';

const App = () => {

  return (
    <div>
      <CartProvider>
        <MainRouter />
      </CartProvider>
    </div>
  );
};

export default App;
