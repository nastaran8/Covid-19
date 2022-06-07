import  { useEffect, useState } from "react";
import {
  TableCell,
  LinearProgress,
  Typography,
  TableBody,
  TableRow,
  TableHead,
  TableContainer,
  Table,
  Paper,
  makeStyles
} from "@material-ui/core";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import { useDispatch } from 'react-redux';
import { TableDataCovid } from "../hooks/TableDataCovid";
import { getTableInfo } from "../app/countrySlice";

const useStyles = makeStyles({
  row: {
    backgroundColor: "#16171a",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#131111",
    },
    fontFamily: "Montserrat",
  },

  table_row : {
    backgroundColor: "white",
  }
 
 
});



const CovidTable = () => {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [value, setValue] = useState(0);
  const getTable = TableDataCovid();
  const dispatch = useDispatch();


   useEffect(() => {
    dispatch(getTableInfo(getTable));
    setLoading(false);
  }, [getTable]);


  const handleSearch = () => {
     return getTable.filter(
      (covidData) =>
      covidData.countryRegion.includes(search)
    );
 
  };

   const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
            <Typography>{children}</Typography>
         )}
      </div>
    );
  }
 
  const classes = useStyles();
  
  return (
   <div style={{
    borderRadius: "30px",
     
  }}>
     <div
              style={{
                display: "flex",
                flexDirection:"row-reverse",
                marginTop: 20,
                justifyContent: "space-between",
                width: "100%",
                borderRadius:"10px 10px 0 0",
                backgroundColor:"rgb(229,221,245)",
                padding:"10px 0",
                alignItems: "center"
              }}
            >
  
<Paper
      component="form"
      style={{display: 'flex',boxShadow:"none", alignItems: 'center', 
      width: "30%",backgroundColor:"white",borderRadius:"60px",  height: "35px", marginRight:20 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search"
        inputProps={{ 'aria-label': 'search google maps' }}
        onChange={(e) => setSearch(e.target.value)}
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon style={{color:"rgb(199,180,234)"}} />
      </IconButton>

      </Paper>
      
        <Tabs value={value}  TabIndicatorProps={{
    sx: {
      height: "0"
    }
  }}  onChange={handleChange} style={{marginLeft:20 }} >
          <Tab label="Now"   />
          <Tab label="Yesterday"   /> 
        </Tabs>
      
       
      </div>
      <TabPanel value={value} index={0}>
           <TableContainer style={{ maxHeight: 500,}}>
           <Table aria-label="simple table" >
              <TableHead style={{ backgroundColor: "white" }}>
                <TableRow>
                  {["Country", "Total Cases", "New Cases", "New deaths",
                  "Total Recovered","Active Cases","Criticail"].map((head) => (
                    <TableCell
                      style={{
                        color: "black",
                        fontWeight: "700",
                        fontFamily: "Montserrat",
                      }}
                      key={head}
                      align={head === "Country" ? "inherit" : "right"}
                    >
                      {head}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
               
              <TableBody>
              {loading ?
              (<LinearProgress style={{ backgroundColor: "gold" }} />)

              :
              (
                <>

                {handleSearch().map((row) => {
                    const sum = row.confirmed + row.deaths;
                    return (
                      <TableRow
                        className={classes.row}
                        key={row.countryRegion}
                      >
                        <TableCell
                          component="th"
                          scope="row"
                          style={{
                            display: "flex",
                            gap: 15,
                          }}
                          className={classes.table_row}
                        >
                          {row.countryRegion}
                         
                        </TableCell>
                        <TableCell align="right" className={classes.table_row}>
                        {sum}
                        </TableCell>
                        <TableCell
                          align="right"
                          style={{
                            color: row.cases28Days > 0 ? "yellow" : "red",
                            fontWeight: 500,
                          }}
                          className={classes.table_row}
                        >
                            {row.cases28Days} 
                        </TableCell>
                        <TableCell align="right"
                         style={{
                          color: row.deaths28Days > 0 ? "red" : "red",
                          fontWeight: 500,
                        }}
                        className={classes.table_row}
                        >
                          {row.deaths28Days}
                        </TableCell>

                        <TableCell align="right"  className={classes.table_row}>
                        {row.recovered === null ? 0 : row.recovered}
                        </TableCell> 


                        <TableCell align="right"   className={classes.table_row}>
                          {row.active === null ? 0 : row.active}
                        </TableCell>

                        <TableCell align="right"   className={classes.table_row}>
                          {row.confirmed}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                       </>
              )}
                  
              </TableBody>
              
            </Table>
            </TableContainer>
            
          
        
      </TabPanel>
      <TabPanel value={value} index={1}>
              "Coming Soon"
        </TabPanel>
 
 
    </div>
  );
}


export default CovidTable;
