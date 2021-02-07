import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import StarOutlinedIcon from "@material-ui/icons/StarOutlined";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { orange } from "@material-ui/core/colors";
import axios from "axios";

const useStyles = makeStyles({
  root: {
    width: 345,
  },
  media: {
    height: 345,
    width: 345,
    maxHeight: 345,
    maxWidth: 345,
    backgroundPosition: "cover",
  },
  actionItems: {
    display: "flex",
    justifyContent: "space-between",
  },
  appBar: {
    position: "relative",
  },
  title: {
    flex: 1,
  },
  listItem: {
    display: "flex",
  },
  flexText: {
    padding: "0 20px",
  },
  flexImage: {
    maxWidth: 345,
    width: "50%",
    height: 345,
  },
  rating: {
    width: 345,
    flex: " 0 1 auto;",
  },
});

const ProductCard = (product) => {
  const classes = useStyles();
  const ratingBaseUrl = "http://localhost:8083/ratingsdata/products/";
  const [open, setOpen] = useState(false);
  const starArr = [];
  let rating = 0;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getRating = async () => {
    if (product.product.rating) {
      rating = product.product.rating;
    }
    // else {
    //   let productUrl = product.product._links.self.href;
    //   let id = productUrl.substring(
    //     productUrl.lastIndexOf("/") + 1,
    //     productUrl.length
    //   );
    //   await axios
    //     .get(`${ratingBaseUrl}${id}`)
    //     .then((response) => (rating = response.data.rating));
    // }
    for (let i = 0; i < rating; i++) {
      starArr.push(<StarOutlinedIcon key={i} style={{ color: orange[500] }} />);
    }
  };

  getRating();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`https://source.unsplash.com/345x345/?${product.product.name}`}
          title={`Image of ${product.product.name}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {product.product.name}
          </Typography>
          <Typography gutterBottom variant="h6" component="h3">
            {product.product.manufacturer}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {product.product.comment}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.actionItems}>
        {product.product.rating ? (
          <IconButton aria-label="rating">{starArr}</IconButton>
        ) : (
          ""
        )}

        <Button size="small" color="primary" onClick={handleClickOpen}>
          See Product Details
        </Button>
        <Dialog fullScreen open={open} onClose={handleClose}>
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                {/* <CloseIcon /> */}
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                {product.product.name}
              </Typography>
              <Button autoFocus color="inherit" onClick={handleClose}>
                Close
              </Button>
            </Toolbar>
          </AppBar>
          <List>
            <ListItem>
              <ListItemText
                primary="Manufacturer"
                secondary={product.product.manufacturer}
              />
            </ListItem>
            <Divider />
            <ListItem>
              <CardMedia
                className={classes.flexImage}
                image={`https://source.unsplash.com/345x140/?${product.product.name}`}
                title={`Image of ${product.product.name}`}
              />
              <ListItemText
                className={classes.flexText}
                primary="Description"
                secondary="Commodo Lorem deserunt magna cillum ullamco ad officia aliquip mollit occaecat magna nostrud sunt reprehenderit. Voluptate consectetur excepteur consequat velit proident. Aute pariatur irure nulla culpa proident anim exercitation incididunt aliqua laborum. Est ea cupidatat ut veniam aliqua. Nostrud dolore mollit excepteur proident occaecat aliquip. Aliqua reprehenderit laboris mollit adipisicing anim sunt aliquip voluptate quis. Nostrud ipsum cillum quis dolore."
              />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText primary="Rating" className={classes.rating} />

              <IconButton aria-label="rating">{starArr}</IconButton>
            </ListItem>
          </List>
        </Dialog>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
