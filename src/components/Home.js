import UserProductList from "../components/UserProductList";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    padding: 20,
  },
});

const Home = () => {
  const classes = useStyles();
  const user = "foo";

  return (
    <div className={classes.root}>
      <h1>Welcome, {user}!</h1>
      <h2>Your products</h2>
      <UserProductList user={user} />
    </div>
  );
};

export default Home;
