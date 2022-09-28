import { Box, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import React from "react";

const AppleProduct = () => {
  return (
    <div>
      <Heading fontSize={"25px"} mt={"4rem"} mb={"20px"}>
        Latest Apple Products
      </Heading>
      <Flex mt={"20px"} gap={"25px"}>
        <Box width={"25%"} textAlign={"left"} fontSize={"1rem"}>
          <Image
            src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltd8bd0a989b042f39/63195a8b10bada5f14a34107/wi-20220907-offer-iphone-14-2col-m.jpg?width=1800&quality=80&auto=webp"
            height="180px"
          />
          <Text fontWeight={"700"}>iPhone 14 and iPhone 14 Plus.</Text>
          <Text>
            iPhone 14 available now. iPhone 14 Plus available October 7.
          </Text>
          <Link color={"#0046be"}>Shop now </Link>
        </Box>
        <Box width={"25%"} textAlign={"left"} fontSize={"1rem"}>
          <Image src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt2f47c285fccd7f2f/63197ac8fe9ec0572913aa35/wt-20220907-offer-apple-watch-series-8-4col-m.jpg?width=1800&quality=80&auto=webp" />
          <Text fontWeight={"700"}>Apple Watch Series 8.</Text>
          <Text>A healthy leap ahead.</Text>
          <Link color={"#0046be"}>Shop now </Link>
        </Box>
        <Box width={"25%"} textAlign={"left"} fontSize={"1rem"}>
          <Image src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltd714a5e2b27920e9/63197d59c1a0e62da40ce8e0/wt-20220907-offer-apple-watch-ultra-4col-m.jpg?width=1800&quality=80&auto=webp" />
          <Text fontWeight={"700"}>Apple Watch Ultra.</Text>
          <Text>Adventure awaits.</Text>
          <Link color={"#0046be"}>Shop now </Link>
        </Box>
        <Box width={"25%"} textAlign={"left"} fontSize={"1rem"}>
          <Image
            src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt51cd8d7cb68815f3/63196451c1a0e62da40ce8b3/pa-20220907-offer-airpods-pro-2col-m.jpg?width=1800&quality=80&auto=webp"
            height="180px"
          />
          <Text fontWeight={"700"}>AirPods Pro 2nd generation.</Text>
          <Text>Available now.</Text>
          <Link color={"#0046be"}>Shop now </Link>
        </Box>
      </Flex>
    </div>
  );
};

export default AppleProduct;
