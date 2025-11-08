import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/pages/HomePage';
import { HealthInsurancePage } from './components/pages/HealthInsurancePage';
import { LifeInsurancePage } from './components/pages/LifeInsurancePage';
import { AutoInsurancePage } from './components/pages/AutoInsurancePage';
import { HomeInsurancePage } from './components/pages/HomeInsurancePage';
import { TravelInsurancePage } from './components/pages/TravelInsurancePage';
import { ComparePage } from './components/pages/ComparePage';
import { AboutPage } from './components/pages/AboutPage';
import { ContactPage } from './components/pages/ContactPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/health-insurance" element={<HealthInsurancePage />} />
            <Route path="/life-insurance" element={<LifeInsurancePage />} />
            <Route path="/auto-insurance" element={<AutoInsurancePage />} />
            <Route path="/home-insurance" element={<HomeInsurancePage />} />
            <Route path="/travel-insurance" element={<TravelInsurancePage />} />
            <Route path="/compare" element={<ComparePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
