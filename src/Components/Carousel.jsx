import React from "react";
import style from "./Carousel.module.css";
import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Radio,
  Stack,
  VStack,
} from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Carousel = () => {
  const settings = {
    // className: "center",
    dots: true,
    centerMode: true,
    infinite: true,
    centerPadding: "80px",
    slidesToShow: 3,
    speed: 500,
    customPaging: (i) => (
      <div
        style={{
          width: "30px",
          color: "blue",
          color: "white",
          textAlign: "center",
        }}
      >
        <Radio colorScheme="red" value="3" mt={"20px"}></Radio>
      </div>
    ),
  };
  return (
    <div
      style={{
        marginTop: "5rem",
        width: "100%",
        margin: "auto",
        marginBottom: "10rem",
      }}
    >
      <div className={style.backgroundImage}>
        <Image
          src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltb8cbee62777e3c4f/62342c39893506175b30a8b4/computing-20220318-fsl-bg-pc-gaming-homepage-m.jpg?width=5760&quality=80&auto=webp"
          width={"100%"}
        />
      </div>
      <div className={style.container}>
        <HStack spacing={"80px"}>
          <Stack
            textAlign={"left"}
            color={"white"}
            mt={"20px"}
            // mr={"20px"}
            w={"100%"}
          >
            <Heading>PC Gaming Sale.</Heading>
            <p>
              Score hot deals on gaming desktops. Plus, save on laptops and
              accessories to level up your game.
            </p>
            <Button width={"80%"} color={"blue.600"}>
              Shop Deals
            </Button>
          </Stack>
          <div className={style.carousel}>
            <Slider {...settings}>
              {[1, 2, 3, 4, 5].map((a) => (
                <div>
                  <Box bg="tomato" height="200px" width={"90%"} scale="20px">
                    {a}
                  </Box>
                </div>
              ))}
            </Slider>
          </div>
        </HStack>
      </div>
    </div>
  );
};

export default Carousel;
