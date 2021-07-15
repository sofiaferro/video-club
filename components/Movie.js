import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import StarIcon from "@material-ui/icons/StarRateTwoTone";
import FavIcon from "./FavIcon";

export default function Movie({ movie, title, summary, poster, thumbnail }) {
  //set component styles and responsive items styles 
  const useStyles = makeStyles({
    multiLineEllipsis: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      "-webkit-line-clamp": 3,
      "-webkit-box-orient": "vertical",
    },
    starsAlignment: {
      marginBottom: "5px",
      marginTop: "-15px",
    },
    responsiveCard: {
      display: "flex",
      flexDirection: "row",
    },
    responsiveItems: {
        flexGrow: 1,
        width: "50%"
    },
    responsiveImg: {
        height: "100%"
    }
  });
  const classes = useStyles();

  //state variable and hook to handle responsive items
  const [isMobile, setIsMobile] = useState(window.innerWidth < 400);
  useEffect(() => {
    window.addEventListener("resize", () => {
        const ismobile = window.innerWidth < 400;
        if (ismobile !== isMobile) setIsMobile(ismobile);
    }, false);
}, [isMobile]);


  return (
    <Box>
      <Card>
        <CardActionArea className={isMobile ? classes.responsiveCard : ""}>
          <div className={isMobile ? classes.responsiveItems : ""}>
          <FavIcon movie={movie}/>

          <CardMedia
            component="img"
            alt={title}
            height="140"
            width="100"
            image={isMobile ? poster : thumbnail}
            title={title}
            className={isMobile ? classes.responsiveImg : ""}
          />
          </div>
          <div className={isMobile ? classes.responsiveItems : ""}>
            <CardContent>
              <Typography
                noWrap
                gutterBottom
                variant="h5"
                component="h2"
                style={{ fontFamily: "DM-Serif-Display-Regular" }}
              >
                {title}
              </Typography>
              <Typography
                gutterBottom
                variant="subtitle1"
                component="h2"
                color="textSecondary"
              >
                Film genre
              </Typography>
              <Typography
                className={classes.multiLineEllipsis}
                variant="body2"
                color="textSecondary"
                component="p"
              >
                {summary}
              </Typography>
            </CardContent>
            <CardActions className={classes.starsAlignment}>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </CardActions>
          </div>
        </CardActionArea>
      </Card>
    </Box>
  );
}
