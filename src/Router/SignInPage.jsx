import { Container, Flex } from "@chakra-ui/react";
import React from "react";
import RightPart from "../Components/Account/RightPart";
import Signin from "../Components/Account/Signin";

const SignInPage = () => {
  return (
    <div>
      <Container maxW={"85%"}>
        <Flex gap={"100px"} alignItems={"center"} m={"10rem 0"}>
          <Signin />
          <RightPart />
        </Flex>
      </Container>
    </div>
  );
};

export default SignInPage;
