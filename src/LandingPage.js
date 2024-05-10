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




const LandingPage=()=>{






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
 
          </div>
          
          );
}

export default LandingPage;