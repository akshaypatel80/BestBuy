import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Signin = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <div>
      <Heading
        fontSize={"48px"}
        fontWeight={"800"}
        color={"#0046be"}
        mb={"5rem"}
      >
        Sign In
      </Heading>
      <HStack w={"100%"}>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
          <FormLabel>Password</FormLabel>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter password"
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
      </HStack>
    </div>
  );
};

export default Signin;
