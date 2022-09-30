import { Button, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdLocationPin, MdHistory } from "react-icons/md";
import { Link } from "react-router-dom";
const RightPart = () => {
  return (
    <div>
      <Stack spacing={"20px"}>
        <Text>Here are some of the benefits you’ll enjoy:</Text>
        <Flex gap={"20px"}>
          <span style={{ fontSize: "25px", color: "#0046be" }}>
            <FaShoppingCart />
          </span>

          <span>
            <Text fontWeight={"800"}>Fast checkout.</Text>
            <Text>Your payment info is saved and ready.</Text>
          </span>
        </Flex>
        <Flex gap={"20px"}>
          <span style={{ fontSize: "25px", color: "#0046be" }}>
            <MdLocationPin />
          </span>
          <span>
            <Text fontWeight={"800"}>Easy tracking.</Text>
            <Text>Keep an eye on your order.</Text>
          </span>
        </Flex>
        <Flex gap={"20px"}>
          <span style={{ fontSize: "25px", color: "#0046be" }}>
            <MdHistory />
          </span>
          <span>
            <Text fontWeight={"800"}>Quick recap.</Text>
            <Text>Your order history is a click away.</Text>
          </span>
        </Flex>
        <Button variant={"link"} textColor={"#0046be"} fontWeight={"700"}>
          <Link to={"/Create-Account"}>Create an account</Link>
        </Button>
      </Stack>
    </div>
  );
};

export default RightPart;
