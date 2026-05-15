import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './src/pages/LandingPage';
import Dashboard from './pages/Dashboard';


function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            {/* Izindi paji nka /tasks na /finances uzazongeramo hano */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
