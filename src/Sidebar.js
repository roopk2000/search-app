import React, { useState, useEffect } from 'react';

const Sidebar = ({ products, setFilteredProducts }) => {
  const [selectedBrand, setSelectedBrand] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState([]);
  const [selectedRating, setSelectedRating] = useState([]);

  useEffect(() => {
    const filteredProducts = products.filter((product) => {
      const brandMatch = selectedBrand.length === 0 || selectedBrand.includes(product.brand);
      const priceRangeMatch =
        selectedPriceRange.length === 0 || selectedPriceRange.includes(product.priceRange);
      const ratingMatch = selectedRating.length === 0 || selectedRating.includes(product.rating);
      return brandMatch && priceRangeMatch && ratingMatch;
    });
    setFilteredProducts(filteredProducts);
  }, [products, selectedBrand, selectedPriceRange, selectedRating, setFilteredProducts]);

  const handleCheckboxChange = (type, value) => {
    switch (type) {
      case 'brand':
        setSelectedBrand((prevSelected) =>
          prevSelected.includes(value)
            ? prevSelected.filter((brand) => brand !== value)
            : [...prevSelected, value]
        );
        break;
      case 'priceRange':
        setSelectedPriceRange((prevSelected) =>
          prevSelected.includes(value)
            ? prevSelected.filter((priceRange) => priceRange !== value)
            : [...prevSelected, value]
        );
        break;
      case 'rating':
        setSelectedRating((prevSelected) =>
          prevSelected.includes(value)
            ? prevSelected.filter((rating) => rating !== value)
            : [...prevSelected, value]
        );
        break;
      default:
        break;
    }
  };

  return (
    <div className="sidebar" style={{ position: 'fixed', left: 0, top: 0, bottom: 0, width: '200px', backgroundColor: '#fff', zIndex: 999, padding:"15px" }}>
      <h3>BRAND</h3>
      <hr />
      <label>
        <input
          type="checkbox"
          checked={selectedBrand.includes('Mango')}
          onChange={() => handleCheckboxChange('brand', 'Mango')}
        /> Mango
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          checked={selectedBrand.includes('H&M')}
          onChange={() => handleCheckboxChange('brand', 'H&M')}
        /> H&M
      </label>


    
      <h3>PRICE RANGE</h3>
      <hr />
      <label>
        <input
          type="checkbox"
          onChange={() => handleCheckboxChange('priceRange', 'Under 500')}
        /> Under 500.00
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          onChange={() => handleCheckboxChange('priceRange', '1000 To 3000')}
        /> 1000 To 3000
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          onChange={() => handleCheckboxChange('priceRange', '3000 To 5000')}
        /> 3000 To 5000
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          onChange={() => handleCheckboxChange('priceRange', '5000 To 8000')}
        /> 5000 To 8000
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          onChange={() => handleCheckboxChange('priceRange', '8000 To 10000')}
        /> 8000 To 10000
      </label>
      <h3>RATINGS</h3>
      <hr />
      <label>
        <input
          type="checkbox"
          checked={selectedRating.includes('★★★★★')}
          onChange={() => handleCheckboxChange('rating', '★★★★★')}
        /> ★★★★★
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          checked={selectedRating.includes('★★★★')}
          onChange={() => handleCheckboxChange('rating', '★★★★')}
        /> ★★★★
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          checked={selectedRating.includes('★★★★')}
          onChange={() => handleCheckboxChange('rating', '★★★★')}
        /> ★★★
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          checked={selectedRating.includes('★★★★')}
          onChange={() => handleCheckboxChange('rating', '★★★★')}
        /> ★★
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          checked={selectedRating.includes('★★★★')}
          onChange={() => handleCheckboxChange('rating', '★★★★')}
        /> ★
      </label>

      
    </div>
  );
};

export default Sidebar;
