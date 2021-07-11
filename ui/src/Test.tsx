import React from "react";
import { useEffect, useState } from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(6, 0, 3),
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

export const Test = () => {
  const [containers, setContainers] = useState([]);
  const [loading, setLoading] = useState(true);

  const classes = useStyles();

  useEffect(() => {
    const getContainers = async () => {
      const res = await fetch("http://localhost:8080/api/containers/list");
      const json = await res.json();
      setContainers(json);
      setLoading(false);
      console.log(json);
    };
    if (loading) getContainers();
  }, [loading]);

  if (loading) {
    return <div>Loadin</div>;
  }
  return (
    <div>
      {containers.map((container) => {
        return (
          <Card className={classes.root}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                {container["Image"]}
              </Typography>
              {Object.keys(container).map((el) => (
                <Typography
                  variant="body2"
                  component="p"
                  color="textSecondary"
                >{`${el}: ${JSON.stringify(container[el])}`}</Typography>
              ))}
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
