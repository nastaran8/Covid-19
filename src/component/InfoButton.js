import { makeStyles, Typography } from "@material-ui/core";
import LinearProgress from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";

import { linearProgressClasses } from "@mui/material/LinearProgress";

const useStyles = makeStyles((theme) => ({
  chosenBox: {
    borderRadius: 10,
    padding: 50,
    cursor: "pointer",
    backgroundColor: "white",
    color: "black",
    fontWeight: 700,
     [theme.breakpoints.down("sm")]: {
     width:"85%",
     marginBottom:"30px"
    },
    [theme.breakpoints.down("xs")]: {
      width:"75%",
    },
    "&:hover": {
      color: "black",
    },
  },

  header: {
    fontSize: 12,
    fontWeight: 900,
  },

  wrapper: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
  },

  percentage: {
    position: "absolute",
    left: 0,
    right: 0,
    textAlign: "center",
    fontSize: "1em",
    top: "-1px",
    color:"white"
  },
}));

const InfoButton = ({ name, number }) => {
  const total = 600000000;
  const classes = useStyles();
  let color_box = "";
  switch (name) {
    case "TOTAL CASES":
      color_box = "rgb(133,49,255)";
      break;

    case "ACTIVE CASES":
      color_box = "rgb(250,192,0)";
      break;

    case "RECOVERED":
      color_box = "rgb(119,208,30)";
      break;

    case "DEATH":
      color_box = "rgb(246,90,8)";
      break;

    default:
      color_box = "rgb(133,49,255)";
      break;
  }

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 20,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "light" ? color_box : color_box,
    },
  }));

  return (
    <div className={classes.chosenBox}>
      <Typography variant="h6" component="h6" className={classes.header}>
        {name}
      </Typography>
      <span style={{ color: color_box }}>{number}</span>

      <div className={classes.wrapper}>
        <BorderLinearProgress
          variant="determinate"
          value={((number / total) * 100).toFixed(2)}
        />
        <span className={classes.percentage}>
          {((number / total) * 100).toFixed(2)}%
        </span>
      </div>
    </div>
  );
};

export default InfoButton;
