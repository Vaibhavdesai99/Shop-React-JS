
import './App.css';
import FormInput from './Components/FormInput/FormInput';
import Header from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.css';
import ProductList from './Components/ProductList/ProductList';
import Cart from './Components/Cart';

function App() {
  return (
    <div className="App">
   <Header/>
   <FormInput/>
   <ProductList/>
   <Cart/>
    </div>
  );
}

export default App;
