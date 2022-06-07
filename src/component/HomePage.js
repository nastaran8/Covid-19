import React from 'react'
import { Container, createTheme, makeStyles, ThemeProvider } from '@material-ui/core';
import { CovidDashbord } from './CovidDashbord';
import Header  from './Header';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import SideBar from './SideBar';

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    backgroundColor:"rgb(243,243,255)",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  
}));

const lightTheme = createTheme({
  palette:{
      primary : {
          main:"rgb(224,226,244)"
      },
      
  },
});

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
}));

const HomePage = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={lightTheme}>
    <Container>
    <Box sx={{ flexGrow: 1,backgroundColor:"rgb(243,243,255)",position:"relative",marginBottom:"50px", padding:"20px",borderRadius:"0 0 20px 20px",zIndex:1 }}>
      <Grid container spacing={2}>
          <Grid item md={8} xs={12}>
            <CovidDashbord />
            </Grid>
            <Grid item md={4} xs={12}>
          <SideBar />
        </Grid>
        
      </Grid>
    </Box> 
    </Container>
    </ThemeProvider>
  )
}

export default HomePage;
