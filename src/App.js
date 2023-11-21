import './index.css';
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Hero from './components/hero/Hero'
import LeadForm from './components/leadForm/LeadForm';
import Services from './components/services/Services';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Hero/>
      <LeadForm/>
      <Services/>
      <Footer/>
    </div>
  );
}

export default App;
