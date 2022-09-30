import { Container, Flex, Text } from "@chakra-ui/react";
import React from "react";
import CreateAccount from "../Components/Account/CreateAccount";
import RightPart from "../Components/Account/RightPart";

const CreateAccountPage = () => {
  return (
    <div>
      <Container maxW={"80%"} background={"#FAFBFC"} textAlign="left">
        <Flex gap={"2rem"} p={"5rem 0"} alignItems={"center"}>
          <CreateAccount />
          <div>
            <RightPart />
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default CreateAccountPage;
