import {
  Box,
  Flex,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const ComputerScategory = () => {
  return (
    <div>
      <Stack>
        <Heading fontSize={"24px"} mt={"5rem"} mb={"1rem"}>
          Shop computers and accessories by category
        </Heading>
        <SimpleGrid
          columns={6}
          gap={"20px"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box>
            <Image
              src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltad02379eb78e9028/5e28a49463d1b6503160ee40/computing-evergreen-category-icon-laptops.jpg"
              width={"55%"}
              m={"auto"}
              mb={"40px"}
            />

            <Link fontSize={"15px"} color={"#0046be"}>
              Laptops and MacBook
            </Link>
          </Box>
          <Box>
            <Image
              src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blte73a0aa7410488ad/619fbd33797626108fb039ac/computing-evergreen-category-icon-gaming-desktops.jpg"
              width={"55%"}
              m={"auto"}
              mb={"40px"}
            />
            <Link fontSize={"15px"} color={"#0046be"}>
              Desktops and iMac
            </Link>
          </Box>
          <Box>
            <Image
              src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt247809581572508a/609cff5b4adba359327cdcd2/computing-evergreen-category-icon-monitors.jpg"
              width={"55%"}
              m={"auto"}
              mb={"40px"}
            />
            <Link fontSize={"15px"} color={"#0046be"}>
              Monitors
            </Link>
          </Box>
          <Box>
            <Image
              src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt39c2a719f1bb4cc1/6261fabdfd9afd4b1fe30b40/computing-evergreen-category-icon-computer-components.jpg"
              width={"55%"}
              m={"auto"}
              mb={"40px"}
            />
            <Link fontSize={"15px"} color={"#0046be"}>
              Computer Components
            </Link>
          </Box>
          <Box>
            <Image
              src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt77b27294b5c07f31/6317d3609dbe2b58ee19e863/computing-evergreen-category-icon-pc-gaming.jpg"
              width={"55%"}
              m={"auto"}
              mb={"40px"}
            />
            <Link fontSize={"15px"} color={"#0046be"}>
              All PC Gaming Gear
            </Link>
          </Box>
          <Box>
            <Image
              src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt1ce43cf4af537e6a/6261f4f5e4b2fd4fda37cfd6/computing-evergreen-category-icon-tablets-and-ipad.jpg"
              width={"55%"}
              m={"auto"}
              mb={"40px"}
            />
            <Link fontSize={"15px"} color={"#0046be"}>
              Tablets and iPad
            </Link>
          </Box>
          <Box>
            <Image
              src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltd0097bbc5ebb4d59/6261f9e1007cf42817cd4dd0/computing-evergreen-category-icon-wifi-and-networking.jpg"
              width={"55%"}
              m={"auto"}
              mb={"40px"}
            />
            <Link fontSize={"15px"} color={"#0046be"}>
              Wi-Fi and Networking Devices
            </Link>
          </Box>
          <Box>
            <Image
              src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt399de88a24a84b6d/5de95ac1d7e18e0c7662de86/computing-evergreen-category-icon-hard-drives-and-storage.jpg"
              width={"55%"}
              m={"auto"}
              mb={"40px"}
            />
            <Link fontSize={"15px"} color={"#0046be"}>
              Hard Drives and Storage
            </Link>
          </Box>
          <Box>
            <Image
              src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt1a2d5ac6678d79b1/5de967566b56dd58f8fbeb54/computing-evergreen-category-icon-printers.jpg"
              width={"55%"}
              m={"auto"}
              mb={"40px"}
            />
            <Link fontSize={"15px"} color={"#0046be"}>
              Printers
            </Link>
          </Box>
          <Box>
            <Image
              src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt5b0cc4391b0395d4/62d0bd6fa80c6d36eaa134df/computing-evergreen-category-icon-business-and-home-office-software.jpg"
              width={"55%"}
              m={"auto"}
              mb={"40px"}
            />
            <Link fontSize={"15px"} color={"#0046be"}>
              Software
            </Link>
          </Box>
          <Box>
            <Image
              src="https://multimedia.bbycastatic.ca/multimedia/products/250x250/141/14193/14193888.jpg"
              width={"55%"}
              m={"auto"}
              mb={"40px"}
            />
            <Link fontSize={"15px"} color={"#0046be"}>
              Cables and Connectors
            </Link>
          </Box>
          <Box>
            <Image
              src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltd9386dee2c0bb137/631a7b580a5bd94db562fe97/computing-evergreen-icon-computer-accessories.jpg"
              width={"55%"}
              m={"auto"}
              mb={"40px"}
            />
            <Link fontSize={"15px"} color={"#0046be"}>
              All Computer Accessories
            </Link>
          </Box>
        </SimpleGrid>
      </Stack>
    </div>
  );
};

export default ComputerScategory;
