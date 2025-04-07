import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import Banner from "../components/banner1.jsx";
import Info from "../components/Info.jsx";
import Info2 from "../components/Info2.jsx";
import Food1 from "../components/food1.jsx";
import ListFood from "../components/ListFood.jsx";
import Subscribe from "../components/Subscribe.jsx";
import Footer from "../components/Footer.jsx";

// No Router here
function LandingPage() {
  return (
    <>
      <Header />
      <Hero />
      <Banner />
      <Info />
      <Info2 />
      <Food1 />
      <ListFood />
      <Subscribe />
      <Footer />
    </>
  );
}

export default LandingPage;
