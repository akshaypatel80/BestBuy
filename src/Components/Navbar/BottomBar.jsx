import {
  Button,
  Container,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import { FaAngleDown } from "react-icons/fa";

const BottomBar = () => {
  return (
    <div>
      <Container maxW={"80%"}>
        <HStack color={"black"}>
          <Menu>
            <MenuButton
              fontSize={"18px"}
              fontWeight={"600"}
              color={"white"}
              p={"10px"}
            >
              Shop
            </MenuButton>
            <MenuList overflow={"auto"} maxH={"500px"}>
              <MenuItem>Computers, Tablets, & Accessories</MenuItem>
              <MenuItem>Cell Phones and Accessories</MenuItem>
              <MenuItem>Office Supplies & Ink</MenuItem>
              <MenuItem>TV & Home Theatre</MenuItem>
              <MenuItem>Headphones, Speakers, & Audio</MenuItem>
              <MenuItem>Cameras & Camcorders</MenuItem>
              <MenuItem>Car Tech and GPS</MenuItem>
              <MenuItem>Appliances</MenuItem>
              <MenuItem>Smart Home</MenuItem>
              <MenuItem>Home Living</MenuItem>
              <MenuItem>Baby & Maternity</MenuItem>
              <MenuItem>Video Games & VR</MenuItem>
              <MenuItem>Wearable Technology</MenuItem>
              <MenuItem>Health & Fitness</MenuItem>
              <MenuItem>Sports, Recreation, & Transportation</MenuItem>
              <MenuItem>Movies & Music</MenuItem>
              <MenuItem>Musical Instruments & Equipment</MenuItem>
              <MenuItem>Toys, Drones, & Education</MenuItem>
              <MenuItem>Beauty</MenuItem>
              <MenuItem>Personal Care</MenuItem>
              <MenuItem>Travel, Luggage, & Bags</MenuItem>
              <MenuItem>Watches, Jewelry, & Fashion</MenuItem>
              <MenuItem>Gift Cards</MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton
              fontSize={"18px"}
              fontWeight={"600"}
              color={"white"}
              p={"10px"}
            >
              Brands
            </MenuButton>
            <MenuList overflow={"auto"} maxH={"500px"}>
              <MenuItem>A B</MenuItem>
              <MenuItem>C D E F</MenuItem>
              <MenuItem>G H I J K</MenuItem>
              <MenuItem>L M N O</MenuItem>
              <MenuItem>P Q R S</MenuItem>
              <MenuItem>T U V X Y Z</MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton
              fontSize={"18px"}
              fontWeight={"600"}
              color={"white"}
              p={"10px"}
            >
              Deals
            </MenuButton>
            <MenuList overflow={"auto"} maxH={"500px"}>
              <MenuItem>Top Deals</MenuItem>
              <MenuItem>Best Buy Outlet</MenuItem>
              <MenuItem>Clearance Products</MenuItem>
              <MenuItem>Refurbished Products</MenuItem>
              <MenuItem>Geek Squad Certified Open Box Product</MenuItem>
              <MenuItem>Open Box Product</MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton
              fontSize={"18px"}
              fontWeight={"600"}
              color={"white"}
              p={"10px"}
            >
              Services
            </MenuButton>
            <MenuList overflow={"auto"} maxH={"500px"}>
              <MenuItem>Geek Squad Services</MenuItem>
              <MenuItem>In-Home Advisor</MenuItem>
              <MenuItem>Trade-In Program</MenuItem>
              <MenuItem>Electronics Recycling</MenuItem>
              <MenuItem>Best Buy Membership</MenuItem>
              <MenuItem>Best Buy Protection</MenuItem>
              <MenuItem>Best Buy Business</MenuItem>
              <MenuItem>Best Buy Health</MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </Container>
    </div>
  );
};

export default BottomBar;
