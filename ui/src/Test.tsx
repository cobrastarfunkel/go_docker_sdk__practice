import React, { Fragment } from "react";
import { useEffect, useState } from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Accordion, AccordionDetails, AccordionSummary, Divider, List, ListItem, ListItemText } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2, 0, 2),
  },
  list: {
    width: '100%',
    margin: "0",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

type Data = {
  endpoint: string
  nameKey: string
}

export const Test = ({ endpoint, nameKey }: Data) => {
  const [containers, setContainers] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    const getContainers = async () => {
      const res = await fetch(`http://localhost:8080/api/${endpoint}/list`);
      const json = await res.json();
      setContainers(json);
    };
    getContainers();
  }, [endpoint]);

  const [open, setOpen] = useState<Boolean>(false)

  return (
    <div>
      {containers.map((container) => {
        return (
          <Accordion>
            <AccordionSummary>
              <Typography
                className={classes.heading}
                color="textSecondary"
                gutterBottom
              >
                <b>{container[nameKey]}</b>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List className={classes.list} component="div">
                {Object.keys(container).map((el) => (
                  <Fragment>
                    <ListItem id={container["Id"]}>
                      <ListItemText color="textSecondary">
                        <h5>{el}</h5>
                        {`${JSON.stringify(container[el], null, 2)}`}
                      </ListItemText>
                    </ListItem>
                    <Divider />
                  </Fragment>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};
