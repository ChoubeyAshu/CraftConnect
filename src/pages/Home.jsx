import backgroundImage from '../assets/images/mainBG.png';
import { Link } from 'react-router-dom';
import RoundButton from '../components/RoundButton';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Navbar />
      <div
        className="flex-grow h-screen flex items-center justify-center bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative z-10 px-4 sm:px-8 md:px-16 lg:px-24 text-white">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center">
            Welcome to the CraftConnect <br className="hidden sm:block" />
            E-Commerce Platform
          </h2>
          <p className="text-sm sm:text-base md:text-lg mb-6 text-center">
            Connecting rural commerce with broader markets.
          </p>
          <div className="flex justify-center">
            <Link to="/products">
              <RoundButton title="Shop Now" />
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
