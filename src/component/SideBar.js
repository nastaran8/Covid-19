import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
 
import { Blog } from "../config/data";
import { SideBarCovidSymptoms } from './SideBarCovidSymptoms';
import { makeStyles } from '@material-ui/core'; 

const useStyles = makeStyles({
  card: {
    backgroundColor: "#ffffff",
    borderRadius:10,
    marginBottom:30,
    padding:20
  },

  env : {
    padding:"15px",
    backgroundColor:"rgb(243,243,255)", 
    borderRadius:"10px",
    display: "flex",
    flexDirection: "row",
    maxWidth: "85px"
  }
  
});



const SideBar = () => {
  const classes = useStyles();
  return (
    <div>
       <div className={classes.card}>
      <Typography component="h4" variant="h4" sx={{ color:"#000000", fontSize:18,fontWeight:600, marginBottom:"10px"}}>
          CONTAGION
           </Typography>
       {Blog.map((blog) => (
      <Card sx={{ display: 'flex',backgroundColor:"transparent",boxShadow:"none",alignItems:"center" }}>
        <div className={classes.env}>
       <CardMedia
           component="img"
           sx={{width: "100%", height:"100%", display: { xs: 'none', sm: 'block' } }}
           image={blog.image}
           alt={blog.imageText}
         />
         </div>
         <CardContent sx={{ flex: 1 }}>
           <Typography component="h5" variant="h5"   sx={{ fontSize:16,fontWeight:600, marginBottom:"10px"}}>
             {blog.label}
           </Typography>
           
           <Typography variant="subtitle1" paragraph  sx={{fontSize:12,color:"rgba(0,0,0,0.5)", fontWeight:600}}>
             {blog.description}
           </Typography>
          </CardContent>
       </Card>
   ))}
 </div>
 <SideBarCovidSymptoms />
 </div>
  )
}

export default SideBar;
