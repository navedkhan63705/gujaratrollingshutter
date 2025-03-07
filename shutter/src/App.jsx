import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Footer from './Component/Footer';
import Help from './Component/Help';
import Support from './Component/Support';
import ContactPage from './Component/ContactPage';
import AboutUs from './Component/AboutUs';
import Milestone from './Component/Milestone';
import Main from './Component/Main';
import Product from './Component/Product';
 
 

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
        <Route path='/main' element={<Main/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/product/:speciality' element={<Product/>}/>
      </Routes>
      <Help/>
      <Footer/>
    </>
  );
}

export default App;
