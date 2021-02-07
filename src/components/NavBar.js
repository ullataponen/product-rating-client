import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import { useState } from "react";
import Home from "./Home";
import ProductList from "./ProductList";

const NavBar = () => {
  const [value, setValue] = useState("home");

  const handleChange = (event, value) => {
    setValue(value);
  };

  return (
    <div>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange}>
          <Tab value="home" label="Home" />
          <Tab value="products" label="Products" />
        </Tabs>
      </AppBar>
      {value === "home" && <Home />}
      {value === "products" && <ProductList />}
    </div>
  );
};

export default NavBar;
