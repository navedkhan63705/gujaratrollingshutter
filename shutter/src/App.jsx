import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Footer from './Component/Footer';
import Help from './Component/Help';
import Support from './Component/Support';
import ContactPage from './Component/ContactPage';
import AboutUs from './Component/AboutUs';
import Milestone from './Component/Milestone';
 
 

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/support' element={<Support/>} />
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/AboutUs' element={<AboutUs/>}/>
        <Route path='/milestone' element={<Milestone/>}/>
      </Routes>
      <Help/>
      <Footer/>
    </>
  );
}

export default App;
