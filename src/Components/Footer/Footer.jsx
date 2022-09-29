import { Button, Flex, HStack, Input, Text, VStack } from "@chakra-ui/react";
import React from "react";
import style from "./Footer.module.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#F4F6F9",
        padding: "60px",
      }}
    >
      <Flex
        justifyContent={"space-between"}
        alignItems={"flex-start"}
        w={"100%"}
        pb={"20px"}
        borderBottom={"2px solid #e0e6ef"}
        // border="1px solid red"
      >
        <div style={{ width: "80%", borderRight: "2px solid #e0e6ef" }}>
          <HStack
            justifyContent={"space-evenly"}
            textAlign={"left"}
            alignItems={"flex-start"}
          >
            <ul className={style.Ul}>
              <Text fontWeight={"600"}>Customer Support</Text>
              <li>Contact Us</li>
              <li>Help Centre</li>
              <li>Returns & Exchanges</li>
              <li>Best Buy Financing</li>
              <li>Best Buy Gift Card</li>
            </ul>
            <ul className={style.Ul}>
              <Text fontWeight={"600"}>Account</Text>
              <li>Order Status</li>
              <li>Manage Account</li>
              <li>Email Preferences</li>
            </ul>
            <ul className={style.Ul}>
              <Text fontWeight={"600"}>Services</Text>
              <li>Geek Squad</li>
              <li>In-Home Advisor</li>
              <li>Trade-In Program</li>
              <li>Electronics Recycling</li>
              <li>Best Buy Health</li>
            </ul>
          </HStack>
          <HStack
            justifyContent={"space-evenly"}
            textAlign={"left"}
            alignItems={"flex-start"}
            mt={"3rem"}
          >
            <ul className={style.Ul}>
              <Text fontWeight={"600"}>About Us</Text>
              <li>Careers</li>
              <li>Corporate Information</li>
              <li>About Best Buy Marketplace</li>
              <li>Sell on Best Buy Marketplace</li>
              <li>Best Buy Affiliate Program</li>
              <li>Advertise with Best Buy</li>
            </ul>
            <ul className={style.Ul}>
              <Text fontWeight={"600"}>International Sites</Text>
              <li>Best Buy US</li>
            </ul>
            <ul className={style.Ul}>
              <Text fontWeight={"600"}>Mobile Apps</Text>
              <li>Android App</li>
              <li>iOS App</li>
            </ul>
          </HStack>
        </div>

        <div style={{ width: "50%", textAlign: "left" }}>
          <VStack textAlign={"left"}>
            <Text fontWeight={"600"}>About Us</Text>
            <Text fontWeight={"400"} fontSize={"15px"} w={"60%"}>
              Sign up to stay in the loop about the hottest deals, coolest new
              products, and exclusive sales events.
            </Text>
            <Flex>
              <Input placeholder="Email Address" borderColor={"black"} />
              <Button colorScheme="messenger">Sign Up</Button>
            </Flex>
            <Flex
              justifyContent={"space-evenly"}
              w={"75%"}
              pt={"20px"}
              fontSize={"20px"}
            >
              <FaFacebookF />
              <FaInstagram />
              <FaLinkedinIn />
              <FaPinterestP />
              <FaTwitter />
              <FaYoutube />
            </Flex>
          </VStack>
        </div>
      </Flex>

      <Text fontSize={"10px"} textAlign={"left"} mt={"20px"}>
        © Best Buy Canada Ltd. Suite #102, 425 West 6th Avenue, Vancouver, BC
        V5Y 1L3
      </Text>
      <Flex fontSize={"10px"} gap={"10px"} mt={"20px"}>
        <Text>Terms & Conditions</Text>
        <Text>|</Text>
        <Text>Conditions of Use</Text>
        <Text>|</Text>
        <Text>Online Policies</Text>
        <Text>|</Text>
        <Text>Interest-Based Ads</Text>
        <Text>|</Text>
        <Text>Privacy Policy</Text>
        <Text>|</Text>
        <Text>Accessibility Policy</Text>
        <Text>|</Text>
        <Text>Geek Squad Terms & Conditions</Text>
        <Text>|</Text>
        <Text>Product Recalls</Text>
        <Text>|</Text>
        <Text>Credits</Text>
      </Flex>
    </div>
  );
};

export default Footer;
