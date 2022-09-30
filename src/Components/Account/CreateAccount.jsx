import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { requresLogin } from "../../Api/AllApi";
import { AuthContext } from "../../Context/AuthContextProvider";

const CreateAccount = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const toast = useToast();
  const handleClick = () => setShow(!show);

  const { isAuth, token, firstName, lastName, loginSuccess, logOutSuccess } =
    useContext(AuthContext);

  const handleSubmit = async () => {
    const payLode = {
      email,
      password,
    };
    try {
      let res = await requresLogin(payLode);
      loginSuccess(res.data.token, first, last);
      console.log(res);
      toast({
        title: "Account created.",
        description: "We've created your account for you.",
        status: "success",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
    } catch (error) {
      console.log(error);
      toast({
        title: "Errer",
        description: "Enter Valid Email & Password",
        status: "error",
        position: "top",
        duration: 2000,
        isClosable: true,
      });
    }
  };
  if (isAuth) {
    return <Navigate to={"/"} />;
  }
  return (
    <div style={{ width: "50%" }}>
      <Heading
        fontSize={"48px"}
        fontWeight={"800"}
        color={"#0046be"}
        mb={"2rem"}
        pl={"30px"}
      >
        Create an Account
      </Heading>
      <VStack
        spacing={"30px"}
        // border={"1px solid red"}
        width={"90%"}
        p={"30px"}
        align={"flex-start"}
      >
        <FormControl>
          <FormLabel mt={"20px"}>First Name</FormLabel>
          <Input
            type="text"
            size={"lg"}
            borderColor={"black"}
            color={"black"}
            value={first}
            onChange={(e) => setFirst(e.target.value)}
          />
          <FormLabel mt={"20px"}>Last Name</FormLabel>
          <Input
            type="text"
            size={"lg"}
            borderColor={"black"}
            color={"black"}
            value={last}
            onChange={(e) => setLast(e.target.value)}
          />
          <FormLabel mt={"20px"}>Email address</FormLabel>
          <Input
            type="email"
            size={"lg"}
            borderColor={"black"}
            color={"black"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormLabel mt={"20px"}>Password</FormLabel>
          <InputGroup size="lg">
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              borderColor={"black"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <div style={{ fontSize: "15px" }}>
          <Checkbox
            size="lg"
            colorScheme="blue"
            defaultChecked
            width={"80%"}
            mt={"20px"}
          >
            Sign up for our newsletter to stay in the loop about hot deals, new
            products, and more. Don’t worry, you can unsubscribe at any time.
          </Checkbox>
        </div>
        <Button
          p={"30px"}
          fontSize={"15px"}
          colorScheme={"yellow"}
          onClick={handleSubmit}
        >
          Create Account
        </Button>
      </VStack>
    </div>
  );
};

export default CreateAccount;
