import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  flex: {
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
  },
});

const UserProductList = ({ user }) => {
  const classes = useStyles();

  const productBasePath = "http://localhost:8081/";

  const [products, setProducts] = useState([]);

  useEffect(() => fetchProducts(), []);

  const fetchProducts = () => {
    axios
      .get(`${productBasePath}catalog/${user}`)
      .then((response) => setProducts(response.data));
  };

  return (
    <div className={classes.flex}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default UserProductList;
