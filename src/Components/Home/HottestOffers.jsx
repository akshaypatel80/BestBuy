import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import React from "react";

const HottestOffers = () => {
  return (
    <div>
      <Flex mt={"20px"} gap={"25px"}>
        <Box width={"25%"} textAlign={"left"} fontSize={"1rem"}>
          <Image src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt1a5c8ad441ae4543/632a440601535d6d0be3603d/ht-20220923-offer-hp-htonsale-m.jpg?width=1800&quality=80&auto=webp" />
          <Text fontWeight={"700"}>
            Save up to $800 on select big-screen TVs.
          </Text>
          <Text>
            Plus, find great deals on speakers, receivers, sound bars and more.
          </Text>
          <Link color={"#0046be"}>Shop now </Link>
        </Box>
        <Box width={"25%"} textAlign={"left"} fontSize={"1rem"}>
          <Image src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt472d8b44d21c1989/632a3fd07a3ff86d11d8d876/computing-20220923-offer-home-page-laptops-m.jpg?width=1800&quality=80&auto=webp" />
          <Text fontWeight={"700"}>Save up to $200 on select laptops.</Text>
          <Text>
            Plus, get 15 months of Microsoft 365 for the price of 12 with select
            laptop purchases.
          </Text>
          <Link color={"#0046be"}>Shop now </Link>
        </Box>
        <Box width={"25%"} textAlign={"left"} fontSize={"1rem"}>
          <Image src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt9af1f4fefed3368b/6317b88ed9aa2a4ef9cfb6e6/ma-20220909-offer-homepage-4col-m.jpg?width=1800&quality=80&auto=webp" />
          <Text fontWeight={"700"}>
            Start saving big on select major appliances with amazing deals.
          </Text>
          <Link color={"#0046be"}>Shop now </Link>
        </Box>
        <Box width={"25%"} textAlign={"left"} fontSize={"1rem"}>
          <Image src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltfd8e8b6f3240d191/6328b9477a3ff86d11d8cfcd/sh-20220923-offer-smart-home-sale-m-en.jpg?width=1800&quality=80&auto=webp" />
          <Text fontWeight={"700"}>Save up to $120 on smart home tech.</Text>
          <Text>
            Score brilliant savings on security cameras, video doorbells, smart
            lighting, and more.
          </Text>
          <Link color={"#0046be"}>Shop now </Link>
        </Box>
      </Flex>
    </div>
  );
};

export default HottestOffers;
