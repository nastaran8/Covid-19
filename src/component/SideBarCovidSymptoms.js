import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia'; 
import Typography from '@mui/material/Typography';
 
import {  makeStyles} from "@material-ui/core";

 

export const SideBarCovidSymptoms = () => {
 
  return (
    <Card  sx={{ backgroundColor: "rgb(133,49,255)" ,borderRadius:"7px",width: "120%",marginBottom: "-60px"}}>
        <CardMedia
          component="img"
           height="100%"
          image="./img/8f4129f5aa27.pdf-1.jpg"
          alt="Covid Symptoms"
        />
       <CardContent>
       <Typography gutterBottom variant="h5" component="div" align='left' color="white">
       Coronavirus symptoms
          </Typography>

          <Typography sx={{ fontSize:12 }} variant="body2" color="rgba(255,255,255,0.8)" component="p" align='left'>
          People with mild symptoms who are otherwise healthy should manage their symptoms at home.
          On average it takes 5–6 days from when someone is infected 
          with the virus for symptoms to show, however it can take up to 14 days
          </Typography>
      
      </CardContent>
    </Card>
  );
}

 

