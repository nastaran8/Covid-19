import LinearProgress from "@mui/material/LinearProgress";
import axios from "axios";
import { useEffect, useState } from "react";
import InfoButton from "./InfoButton";
import { TotalDataCovid } from "../hooks/TotalDataCovid";
import { useDispatch } from "react-redux";
import { getInfo } from "../app/countrySlice";
import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
   [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
     
    },
    "&:hover": {
      color: "black",
    },
  },
}));

export const BottonSection = () => {
   const [isLoading, setIsLoading] = useState(true);
  const getListData = TotalDataCovid();
  const dispatch = useDispatch();
   const classes = useStyles();
  
 

  useEffect(() => {
    dispatch(getInfo(getListData));
      setIsLoading(false);
  }, [getListData]);
  return (
    <>
      {isLoading ? (
        <LinearProgress style={{ backgroundColor: "gold" }} />
      ) : (
        <div
          className={classes.wrapper}
        >
          {getListData.map((info) => (
            <InfoButton key={info.name} name={info.name} number={info.num} />
          ))}
        </div>
      )}
    </>
  );
};
