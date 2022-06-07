import React, { useState } from 'react';
import './App.css';
 
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import  HomePage  from './component/HomePage';
import { Container, makeStyles } from '@material-ui/core';
import Header from './component/Header';
import Grid from '@mui/material/Grid';


const useStyles = makeStyles(() => ({
  App:{
    backgroundColor:"rgb(224,226,244)",
    color:"#999877",
    minHeight:"100vh",
    paddingTop:"50px",
    overflow: "hidden",
    position: "relative",
  },
 
  circleHome:{
    backgroundColor: "transparent",
    border: "40px solid rgb(203,206,243)",
    borderRadius: "100%",
    top: "-195px",
    height: "350px",
    opacity: .85,
    position: "absolute",
    right: "-120px",
    width: "350px",
    zIndex:0
  },
  header :{
    boxshadow:"3px 2px 4px -1px rgb(0 0 0 / 3%),0px 4px 5px 0px rgb(0 0 0 / 2%),0px 1px 10px 0px rgb(0 0 0 / 2%)",
    zIndex:1,
    position:"relative"
  }
}));
 
const App = () => {
  const classes = useStyles();
  return (
<BrowserRouter>
   <div className={classes.App}>
   <div className={classes.circleHome}></div>
   <Container>
       <Grid item xs={12}>
          <Header />
        </Grid>
        </Container>
    <Routes>
      <Route path="/" element={<HomePage />}/>
      </Routes>
    </div>
</BrowserRouter>
     
  );
}

export default App;
