import './App.css';
import { Header } from './components/Header/Header';
import { Products } from './components/Products/Products';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Products />
      </div>
    </div>
  );
}

export default App;
