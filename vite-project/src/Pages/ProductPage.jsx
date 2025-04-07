import styled from "@emotion/styled";
import Header from "../components/Header";
import Banner from "../components/ProductPageComp/Banner";
import ProductList from "../components/ProductPageComp/ProductList";
import Footer from "../components/Footer";

function ProductPage() {
  return (
    <>
      <Header />
      <Banner />
      <ProductList />
      <Footer />
    </>
  );
}

export default ProductPage;
