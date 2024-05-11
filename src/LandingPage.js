import React, { useEffect, useState } from "react";
import faker from 'faker';
import { TextField, InputAdornment, Button } from '@mui/material';
import { Grid as MuiGrid } from '@mui/material';
import Sidebar from "./Sidebar";
import "./LandingPage.css";
import { Search } from "@mui/icons-material";


const LandingPage = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('');
  const [wishlist, setWishlist] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = [];
      for (let i = 0; i < 100; i++) {
        data.push({
          id: i,
          name: faker.commerce.productName(),
          price: faker.commerce.price(),
          image: faker.image.imageUrl(200, 200, 'fashion', true),
        });
      }
      setProducts(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filtered = products.filter(product => product.name.toLowerCase().includes(filter.toLowerCase()));
    setFilteredProducts(filtered);
  }, [products, filter]);

  const addToWishlist = (productId) => {
    setWishlist([...wishlist, productId]);
  };

  const removeFromWishlist = (productId) => {
    setWishlist(wishlist.filter((id) => id !== productId));
  };

  return (
    <div className="search">
      <TextField
        style={{ marginLeft: '235px' }}
        className="search-desktop"
        size="small"
        InputProps={{
          className: "search",
          endAdornment: (
            <InputAdornment position="end">
              <Search color="primary" />
            </InputAdornment>
          ),
        }}
        placeholder="Search for items/categories"
        name="search"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      <TextField
        style={{ marginLeft: '235px' }}
        className="search-mobile"
        size="small"
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Search color="primary" />
            </InputAdornment>
          ),
        }}
        placeholder="Search"
        name="search"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      <Sidebar products={products} setFilteredProducts={setFilteredProducts} />

      <MuiGrid container spacing={2} style={{ marginLeft: '235px' }}>
        {filteredProducts.map((product) => (
<MuiGrid item key={product.id} xs={12} sm={6} md={4} lg={3} style={{ margin: '15px' }} className="grid-item">
  <div style={{ backgroundColor: '#fff', border: '1px solid #ccc', padding: '10px', borderRadius: '5px', height: '100%', position: 'relative' }}>
    <img
      src={product.image}
      alt={product.name}
      style={{ width: '100%', height: '200px', objectFit: 'cover' }}
      onError={(e) => {
        e.target.src = "https://via.placeholder.com/200x200?text=Image+Not+Found";
      }}
    />
    <span style={{ color: 'black', fontWeight: 'bold' }}>{product.name}</span>
    <div>
      <Button
        variant="contained"
        style={{
          backgroundColor: wishlist.includes(product.id) ? 'red' : 'green',
        }}
        onClick={() =>
          wishlist.includes(product.id)
            ? removeFromWishlist(product.id)
            : addToWishlist(product.id)
        }
      >
        Wishlist
      </Button>
    </div>
    <span style={{ color: 'blue' }}> Rs. {product.price}</span>
    <div className="product-banner">
      <span>Show Product</span>
    </div> 
  </div>
</MuiGrid>

        ))}
      </MuiGrid>
    </div>
  );
}

export default LandingPage;
