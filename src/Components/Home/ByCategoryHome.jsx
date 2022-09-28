import {
  Box,
  Grid,
  GridItem,
  Heading,
  Image,
  Link,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";

const ByCategoryHome = () => {
  return (
    <div>
      <Heading fontSize={"25px"} mt={"4rem"} mb={"20px"}>
        Shop fall essentials by category
      </Heading>
      <SimpleGrid
        columns={6}
        gap={"20px"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Box>
          <Image
            src="https://multimedia.bbycastatic.ca/multimedia/products/250x250/160/16009/16009745.jpg"
            width={"55%"}
            m={"auto"}
            mb={"40px"}
          />
          <Link fontSize={"15px"} color={"#0046be"}>
            Televisions
          </Link>
        </Box>
        <Box>
          <Image
            src="https://multimedia.bbycastatic.ca/multimedia/products/250x250/160/16000/16000039.jpg"
            width={"55%"}
            m={"auto"}
            mb={"40px"}
          />
          <Link fontSize={"15px"} color={"#0046be"}>
            Home Audio & Theatre
          </Link>
        </Box>
        <Box>
          <Image
            src="https://multimedia.bbycastatic.ca/multimedia/products/250x250/148/14800/14800929.jpg"
            width={"55%"}
            m={"auto"}
            mb={"40px"}
          />
          <Link fontSize={"15px"} color={"#0046be"}>
            Smart Lighting
          </Link>
        </Box>
        <Box>
          <Image
            src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt6ea9df780be40f5a/5f7f9c354b7a2b0e86b04c58/sh-smart-speakers-displays-icons.jpg?width=250&quality=80&auto=webp"
            width={"55%"}
            m={"auto"}
            mb={"40px"}
          />
          <Link fontSize={"15px"} color={"#0046be"}>
            Smart Speakers and Displays
          </Link>
        </Box>
        <Box>
          <Image
            src="https://multimedia.bbycastatic.ca/multimedia/products/250x250/105/10574/10574405.jpg"
            width={"55%"}
            m={"auto"}
            mb={"40px"}
          />
          <Link fontSize={"15px"} color={"#0046be"}>
            Small Kitchen Appliances
          </Link>
        </Box>
        <Box>
          <Image
            src="https://multimedia.bbycastatic.ca/multimedia/products/250x250/152/15264/15264632.jpg"
            width={"55%"}
            m={"auto"}
            mb={"40px"}
          />
          <Link fontSize={"15px"} color={"#0046be"}>
            Heating, Air Quality and Cooling
          </Link>
        </Box>
      </SimpleGrid>
      <Heading fontSize={"25px"} mt={"7rem"} mb={"20px"}>
        Shop by category
      </Heading>
      <SimpleGrid columns={6} spacing={4}>
        <Box>
          <Image
            src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltad02379eb78e9028/5e28a49463d1b6503160ee40/computing-evergreen-category-icon-laptops.jpg?width=250&quality=80&auto=webp"
            width={"65%"}
            m={"auto"}
            mb={"40px"}
          />
          <Link fontSize={"15px"} color={"#0046be"}>
            Computers and Tablets
          </Link>
        </Box>
        <Box>
          <Image
            src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltd9386dee2c0bb137/631a7b580a5bd94db562fe97/computing-evergreen-icon-computer-accessories.jpg?width=250&quality=80&auto=webp"
            width={"65%"}
            m={"auto"}
            mb={"40px"}
          />
          <Link fontSize={"15px"} color={"#0046be"}>
            Computer Accessories
          </Link>
        </Box>
        <Box>
          <Image
            src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt819b5f45dd06be17/6025c7884b8030688c37d8bd/bbym-20210212-icon-cellphone-accessories.jpg?width=250&quality=80&auto=webp"
            width={"65%"}
            m={"auto"}
            mb={"40px"}
          />
          <Link fontSize={"15px"} color={"#0046be"}>
            Cell Phones and Accessories
          </Link>
        </Box>
        <Box>
          <Image
            src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt7682f947ff1c0cd3/5f9749ff67a7c35492602290/smart-home-icon.jpg?width=250&quality=80&auto=webp"
            width={"65%"}
            m={"auto"}
            mb={"40px"}
          />
          <Link fontSize={"15px"} color={"#0046be"}>
            Smart Home
          </Link>
        </Box>
        <Box>
          <Image
            src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltebba6ba1bd154354/5ee2c83e0f079e4334fd6c74/majorapps-icon.jpg?width=250&quality=80&auto=webp"
            width={"65%"}
            m={"auto"}
            mb={"40px"}
          />
          <Link fontSize={"15px"} color={"#0046be"}>
            Major Appliances
          </Link>
        </Box>
        <Box>
          <Image
            src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt9450d10d80be158b/6192ea614eed0e4a24dca596/homepage-shopbycategory-pa-on-sale.jpg?width=250&quality=80&auto=webp"
            width={"65%"}
            m={"auto"}
            mb={"40px"}
          />
          <Link fontSize={"15px"} color={"#0046be"}>
            Headphones and Portable Speakers
          </Link>
        </Box>
        <Box>
          <Image
            src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt2705e457feb84d61/62059060214fe9266428d3e4/vacuums-sbc-icon-12370687.jpeg?width=250&quality=80&auto=webp"
            width={"65%"}
            m={"auto"}
            mb={"40px"}
          />
          <Link fontSize={"15px"} color={"#0046be"}>
            Vacuums
          </Link>
        </Box>
        <Box>
          <Image
            src="https://multimedia.bbycastatic.ca/multimedia/products/250x250/155/15598/15598575_2.jpg"
            width={"65%"}
            m={"auto"}
            mb={"40px"}
          />
          <Link fontSize={"15px"} color={"#0046be"}>
            Video Games, Consoles, and Accessories
          </Link>
        </Box>
        <Box>
          <Image
            src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt77b27294b5c07f31/6317d3609dbe2b58ee19e863/computing-evergreen-category-icon-pc-gaming.jpg?width=250&quality=80&auto=webp"
            width={"65%"}
            m={"auto"}
            mb={"40px"}
          />
          <Link fontSize={"15px"} color={"#0046be"}>
            PC Gaming
          </Link>
        </Box>
        <Box>
          <Image
            src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt4cddcbaa288413ec/5f5a7640c0eb1d4aeabe8f7f/14882490.jpg?width=250&quality=80&auto=webp"
            width={"65%"}
            m={"auto"}
            mb={"40px"}
          />
          <Link fontSize={"15px"} color={"#0046be"}>
            Wearable Technology
          </Link>
        </Box>
        <Box>
          <Image
            src="https://multimedia.bbycastatic.ca/multimedia/products/250x250/151/15136/15136027.jpg"
            width={"65%"}
            m={"auto"}
            mb={"40px"}
          />
          <Link fontSize={"15px"} color={"#0046be"}>
            Health and Fitness
          </Link>
        </Box>
        <Box>
          <Image
            src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt2b069a38bfbed6f6/60db8b26a1ff3159b5938622/luggage-evergreen-category-icon-luggage-bags.jpg?width=250&quality=80&auto=webp"
            width={"65%"}
            m={"auto"}
            mb={"40px"}
          />
          <Link fontSize={"15px"} color={"#0046be"}>
            Travel and Luggage
          </Link>
        </Box>
      </SimpleGrid>
    </div>
  );
};

export default ByCategoryHome;
