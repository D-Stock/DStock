import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import "../center.css";


const useStyles = makeStyles ((theme) => ({
  root: {
    minWidth: 275,
    maxWidth: 800,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

export default function SimpleCard(props) {
  const classes = useStyles();

  let [Tokens,setTokens] = useState("");
  const handleTokens = e => {
    setTokens(e.target.value)
  }

  return (
    <div class="centered">
    <Card className={classes.root} centered>
    <form onSubmit={(event) => {
        event.preventDefault()
        props.buyToken(Tokens)
        }} >
        <CardContent style={{backgroundColor: "lightblue"}}>
            <Typography variant="h5" component="h2">
            Buy Tokens Here
            <CardActions doubleSpacing={true}>
            </CardActions>
            </Typography>
            <TextField id="outlined-basic"  value={Tokens} label="Tokens" onChange={handleTokens}  label="Tokens" variant="outlined" />
            <CardActions doubleSpacing={true}>
            </CardActions>
            <Button type="submit" variant="contained" color="primary" disableElevation>
            Buy Now
            </Button>
        </CardContent>
        </form>
        </Card>
    </div>
  );
}
