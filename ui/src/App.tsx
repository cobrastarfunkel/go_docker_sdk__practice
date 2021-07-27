import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { useState } from "react";
import { useEffect } from "react";
import { Test } from "./Test";
import { AppBar, IconButton, MenuItem, Toolbar } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';

function App() {
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null)
  const [nameKey, setNameKey] = useState<string>("containers")
  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenuAnchor(event.currentTarget)
  }
  const handleClose = () => {
    setMenuAnchor(null)
  }

  type Data = {
    endpoint: string
    nameKey: string
  }

  const mappings: { [index: string]: Data } = {
    "images": { "endpoint": "images", "nameKey": "RepoTags" },
    "containers": { "endpoint": "containers", "nameKey": "Image" }
  }

  return (
    <div>
      <AppBar color={"primary"} position={"static"}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleOpen}>
            <MenuIcon></MenuIcon>
          </IconButton>
          <Menu anchorEl={menuAnchor} open={Boolean(menuAnchor)} onClose={handleClose}>
            <MenuItem onClick={() => { setNameKey("images") }}>
              Images
            </MenuItem>
            <MenuItem onClick={() => { setNameKey("containers") }}>
              Containers
            </MenuItem>
          </Menu>
          <Typography variant="h4" component="h1">
            Docker {nameKey}
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Test endpoint={mappings[nameKey].endpoint} nameKey={mappings[nameKey].nameKey} />
      </Container>
    </div>
  );
}

export default App;
