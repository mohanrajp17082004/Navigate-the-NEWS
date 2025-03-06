import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import NewsPage from './pages/NewsPage';
import NavbarComponent from './components/NavbarComponent';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
        <NavbarComponent />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/category/:id" element={<CategoryPage/>} />
          <Route exact path="/news/:id" element={<NewsPage/>} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
