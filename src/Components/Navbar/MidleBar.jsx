import {
  HStack,
  Image,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";
import { FaSearch, FaStore, FaUser, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const MidleBar = () => {
  return (
    <div>
      <HStack justifyContent={"space-between"} mt={"20px"}>
        <HStack gap={"20px"}>
          <Link to="/" style={{ width: "10%" }}>
            <Image src="https://drive.google.com/uc?export=view&id=1kfogwqOe0l6NlDxwrTeG7T_ZVTK_wzeS" />
          </Link>
          <InputGroup w={"50%"} size={"lg"}>
            <Input
              type="search"
              placeholder="Search Best Buy"
              bg={"white"}
              color={"black"}
            />
            <InputRightElement children={<FaSearch color="#0046BE" />} />
          </InputGroup>
        </HStack>
        <HStack fontSize={"18px"} spacing={"20px"}>
          <span>
            <FaStore />
          </span>
          <span>Stores</span>
          <span>
            <FaUser />
          </span>
          <span>
            <Link to={"/Signin"}>Account</Link>
          </span>
          <span>
            <FaShoppingCart />
          </span>
          <span>Cart</span>
        </HStack>
      </HStack>
    </div>
  );
};

export default MidleBar;
