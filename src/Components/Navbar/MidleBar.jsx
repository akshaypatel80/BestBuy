import {
  HStack,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useToast,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { FaSearch, FaStore, FaUser, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContextProvider";
import { MdLogout } from "react-icons/md";
const MidleBar = () => {
  const { isAuth, token, firstName, lastName, loginSuccess, logOutSuccess } =
    useContext(AuthContext);
  const toast = useToast();
  const handleLogout = () => {
    toast({
      title: "Logout",
      description: "Have A Nice Day",
      status: "info",
      duration: 2000,
      position: "top",
      isClosable: true,
    });
    logOutSuccess();
  };

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
          {isAuth ? (
            <>
              <span>
                <FaUser />
              </span>
              <span>
                <Menu>
                  <MenuButton
                    fontSize={"18px"}
                    fontWeight={"500"}
                    color={"white"}
                    p={"10px"}
                  >
                    hi,{firstName}&nbsp;
                    {lastName}!
                  </MenuButton>
                  <MenuList
                    overflow={"auto"}
                    maxH={"500px"}
                    color={"black"}
                    fontSize={"15px"}
                  >
                    <MenuItem>
                      <span>
                        <FaUser />
                      </span>
                      &nbsp; Your Account
                    </MenuItem>
                    <MenuItem onClick={handleLogout}>
                      <span>
                        <MdLogout />
                      </span>
                      &nbsp;Sign Out
                    </MenuItem>
                  </MenuList>
                </Menu>
              </span>
            </>
          ) : (
            <>
              <span>
                <FaUser />
              </span>
              <span>
                <Link to={"/Signin"}>Account</Link>
              </span>
            </>
          )}

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
