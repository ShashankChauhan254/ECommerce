import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import Banner from './Components/Banner/banner';
import Navbar from './Components/Navbar/navbar';
import Hero from './Components/Hero/hero';
import Products from './Components/Products/products';
import TopProducts from './Components/TopProducts/topproducts';
import Subscribe from './Components/Subscribe/subscribe';
import Testimonials from './Components/Testimonials/testimonials';
import Footer from './Components/Footer/footer';

function App() {
  const [orderPopup, setOrderPopup] = useState(false);
  
  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  }

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar handleOrderPopup={handleOrderPopup} />
        <Hero handleOrderPopup={handleOrderPopup} />
        <Products />
        <TopProducts handleOrderPopop={handleOrderPopup}/>
        <Banner />
        <Subscribe />
        <Testimonials />
        <Footer />
      </div>
    </>
  )
}

export default App;
