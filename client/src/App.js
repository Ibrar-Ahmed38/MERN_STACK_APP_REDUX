import React, { useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import Photo1 from "./Components/images/photo1.jpg";
import Post from "./Components/Posts/Post";
import Forms from "./Components/Forms/Forms";
import useStyles from './Components/Styles'
import {useDispatch} from "react-redux";
import {getPost} from '../src/Components/actions/post'


const App = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  

  useEffect( ()=>{
    dispatch(getPost())
  },[dispatch])
 
  return (
    <>
    
    <Container  maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography  className={classes.heading} variant="h6" align="center">
          Memories
        </Typography>
        <img className={classes.image} src={Photo1} alt="Img" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent="space-between"  alignItems="center" spacing={3}>
            <Grid item xs={12} sm={7}>
            <Post /> 
            </Grid>
    
           
            <Grid item xs={12} sm={4}>
            <Forms />
            </Grid>
  
          </Grid>
        </Container>
      </Grow>
    </Container>
  </>
  );
};

export default App;
