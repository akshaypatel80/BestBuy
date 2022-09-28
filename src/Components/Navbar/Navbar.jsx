import { Container } from "@chakra-ui/react";
import React from "react";
import BottomBar from "./BottomBar";
import MidleBar from "./MidleBar";
import TopBar from "./TopBar";
const Navbar = () => {
  return (
    <div>
      <Container maxW={"80%"} color={"white"} mb={"20px"}>
        <TopBar />
        <MidleBar />
      </Container>
    </div>
  );
};

export default Navbar;
