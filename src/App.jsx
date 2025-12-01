import { Navbar } from './Components/Navbar';
import Hero from './Components/Hero';
import Features from './Components/Features';
import SimplicitySection from './Components/SimplicitySection';
import Footer from './Components/Footer';
import CTA from './Components/CTA';
import Pricing from './Components/Pricing';
import './index.css';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div className="bg-white min-h-screen font-sans selection:bg-teal-100 selection:text-teal-900">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;