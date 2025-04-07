import styled from "@emotion/styled";
import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MockProducts from "../../JSONFILES/MockProducts";

// function ProductList() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const getAllData = async () => {
//       try {
//         const response = await axios.get(
//           "https://67efb4dd2a80b06b889572e9.mockapi.io/api/products/products"
//         );
//         setProducts(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     getAllData();
//   }, []);

//   return (
//     <Container>
//       {products.map((props) => (
//         <Card key={props.id}>
//           <Link to={`/getSingleProduct/${props.id}`}>
//             <Image src={props.Image} alt="Product Image" />
//             <Title>{props.Title}</Title>
//             <Price>{props.Price}</Price>
//             <Category>{props.Category}</Category>
//             <Details>{props.Details}</Details>
//           </Link>
//         </Card>
//       ))}
//     </Container>
//   );
// }

function ProductList() {
  const [products, setProducts] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Simulate delay like API
    setTimeout(() => {
      setProducts(MockProducts);
    }, 1500);
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    console.log("Cart:", [...cart, product]);
  };

  const filteredProducts = products.filter((product) => {
    const price = parseFloat(product.Price);
    const categoryMatch =
      categoryFilter === "All" || product.Category === categoryFilter;
    const minMatch = minPrice === "" || price >= parseFloat(minPrice);
    const maxMatch = maxPrice === "" || price <= parseFloat(maxPrice);
    const searchMatch = product.Title.toLowerCase().includes(
      searchQuery.toLowerCase()
    );

    return categoryMatch && minMatch && maxMatch && searchMatch;
  });

  const categories = [
    "All",
    ...new Set(MockProducts.map((item) => item.Category)),
  ];

  return (
    <>
      <FilterContainer>
        <label>
          Category:
          <select
            onChange={(e) => setCategoryFilter(e.target.value)}
            value={categoryFilter}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </label>
        <label>
          Min Price:
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            placeholder="0"
          />
        </label>
        <label>
          Max Price:
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            placeholder="1000"
          />
        </label>
        <label>
          Search:
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by title..."
          />
        </label>
      </FilterContainer>

      <Container>
        {filteredProducts.length === 0 ? (
          <p>Loading or no products match...</p>
        ) : (
          filteredProducts.map((product) => (
            <Card key={product.id}>
              <Link to={`/getSingleProduct/${product.id}`}>
                <Image>
                  <img src={product.Image} alt="Product Image" />
                </Image>
              </Link>
              <Title>{product.Title}</Title>
              <Price>${product.Price}</Price>
              <Category>{product.Category}</Category>
              <Details>{product.Details}</Details>
              <AddButton onClick={() => addToCart(product)}>
                Add to Cart
              </AddButton>
            </Card>
          ))
        )}
      </Container>
    </>
  );
}

export default ProductList;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
`;

const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const Card = styled.div`
  width: 330px;
  height: 500px;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
`;

const Image = styled.div`
  width: 100%;
  height: 60%;
  object-fit: cover;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    height: 90%;
    object-fit: cover;
  }
`;

const Title = styled.h2`
  font-size: 1.2rem;
  margin: 10px;
`;

const Price = styled.p`
  font-size: 1rem;
  margin: 10px;
`;

const Category = styled.p`
  font-size: 0.9rem;
  margin: 10px;
`;

const Details = styled.p`
  font-size: 0.8rem;
  margin: 10px;
`;

const AddButton = styled.button`
  margin: 10px;
  padding: 8px 12px;
  font-size: 0.9rem;
  background-color: #00b894;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #019875;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  gap: 20px;
`;
