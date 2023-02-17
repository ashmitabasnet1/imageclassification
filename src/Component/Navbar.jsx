import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar,  } from "@mui/material";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [value, setValue] = useState();

  return (
    <div>
      <AppBar sx={{ backgroundColor: "#595959" }} position="sticky">
        <Toolbar>
          
          <Tabs
            style={{marginLeft:'40rem',
            
          
            }}
            textColor="inherit"
            indicatorColor="primary"
          
          
            value={value}
            onChange={(e, val) => setValue(val)}
          >
          
            <Tab LinkComponent={ NavLink } to="/" label="Home " /> 
            <Tab LinkComponent={ NavLink } to="/about" label="Prediction " />
            
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
