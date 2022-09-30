import { Container, Flex, Text } from "@chakra-ui/react";
import React from "react";
import RightPart from "../Components/Account/RightPart";
import Signin from "../Components/Account/Signin";

const SignInPage = () => {
  return (
    <div>
      <Container maxW={"90%"} background={"#FAFBFC"} textAlign="left">
        <Flex gap={"20rem"} p={"5rem 0"} alignItems={"center"}>
          <Signin />
          <div>
            <Text fontSize={"30px"} fontWeight={"700"}>
              Don't have an account?
            </Text>
            <RightPart />
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default SignInPage;
