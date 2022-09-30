import {
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  VStack,
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
        mb={"2rem"}
        pl={"30px"}
      >
        Sign In
      </Heading>
      <VStack
        spacing={"30px"}
        // border={"1px solid red"}
        width={"130%"}
        p={"30px"}
      >
        <FormControl>
          <FormLabel m={"20px 0"}>Email address</FormLabel>
          <Input
            type="email"
            size={"lg"}
            borderColor={"black"}
            color={"black"}
          />
          <FormLabel m={"20px 0"}>Password</FormLabel>
          <InputGroup size="lg">
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              borderColor={"black"}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Flex gap={"100px"}>
          <Button size={"lg"} colorScheme="facebook">
            Sign In
          </Button>
          <Link>Forgot Password?</Link>
        </Flex>
      </VStack>
    </div>
  );
};

export default Signin;
