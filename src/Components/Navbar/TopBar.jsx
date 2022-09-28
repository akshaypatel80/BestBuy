import { Flex } from "@chakra-ui/react";
import React from "react";

const TopBar = () => {
  return (
    <div>
      <Flex justifyContent={"flex-end"} gap={"20px"}>
        <p>Order Status</p>
        <p>Blog</p>
        <p>Best Buy Business</p>
        <p>Français</p>
      </Flex>
    </div>
  );
};

export default TopBar;
