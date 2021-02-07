import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    padding: 20,
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
  },
});

const ProductList = () => {
  const classes = useStyles();
  const basePath = "http://localhost:8082/api/products/";
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => fetchProducts(), []);

  const fetchProducts = () => {
    axios
      .get(basePath)
      .then((response) => setAllProducts(response.data._embedded.products));
  };

  return (
    <div className={classes.root}>
      {allProducts.map((product) => (
        <ProductCard key={product._links.self.href} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
