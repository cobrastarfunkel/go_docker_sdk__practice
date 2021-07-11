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

function App() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Docker SDK Testing
        </Typography>
        <Test/>
      </Box>
    </Container>
  );
}

export default App;
