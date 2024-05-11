import { Search, SentimentDissatisfied } from "@mui/icons-material";
import {
  CircularProgress,
  Grid,
  InputAdornment
} from "@mui/material";
import { Box } from "@mui/system";
import TextField from '@mui/material/TextField';
import "./LandingPage.css";
import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import faker from 'faker';
import { Grid as MuiGrid, Button } from '@mui/material';




const LandingPage=()=>{
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('');
  const [wishlist, setWishlist] = useState([]);    
  useEffect(() => {
    // Fetch data from Faker API
    const fetchData = async () => {
      const data = [];
      for (let i = 0; i < 10; i++) {
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

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const addToWishlist = (productId) => {
    setWishlist([...wishlist, productId]);
  };

  const removeFromWishlist = (productId) => {
    setWishlist(wishlist.filter((id) => id !== productId));
  };


    return (
        <div className="search">
          
            <TextField
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
              onChange={(e) => {
               
              }}
            />
   
    
          <TextField
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
            onChange={(e) => {
                
               
            }}
          />


<MuiGrid container spacing={2}>
        {products
          .filter((product) =>
            product.name.toLowerCase().includes(filter.toLowerCase())
          )
          .map((product) => (
            <MuiGrid item key={product.id} xs={12} sm={6} md={4} lg={3} style={{ margin: '15px'}}>
              <div style={{ backgroundColor: '#fff', border: '1px solid #ccc', padding: '10px', borderRadius: '5px', height: '100%' }}>
                <img
                  src={product.image}
                  alt={product.name}
                  style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                  onError={(e) => {
                    console.error('Error loading image:', e.target.src);
                    e.target.onerror = null;
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
                <Button style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', display: 'none' }}>View</Button>
              </div>
            </MuiGrid>
          ))}
      </MuiGrid>


            </div>
  
          
          
          );
}

export default LandingPage;