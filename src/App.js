/* import logo from './logo.svg'; */
import './App.css';
import Header from './common/Header';
import Footer from './common/Footer';
import Main from './components/Main'
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
