import React, { useEffect, useState } from "react";
import style from "./Carousel.module.css";
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Radio,
  Skeleton,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { baseUrl } from "../Api/AllApi";
const Carousel = ({
  carousel,
  backgroundImage,
  Hading,
  title,
  button,
  text,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 2500);
  });
  const settings = {
    // className: "center",
    dots: true,
    centerMode: true,
    infinite: true,
    centerPadding: "50px",
    slidesToShow: 3,
    speed: 500,
    customPaging: (i) => (
      <div
        style={{
          width: "10px",
          color: "blue",
          color: "white",
          textAlign: "center",
        }}
      >
        <Radio colorScheme="red" value={"2"} mt={"20px"}></Radio>
      </div>
    ),
  };
  return (
    <div
      style={{
        marginTop: "6rem",
        width: "100%",
        margin: "auto",
        marginBottom: "10rem",
      }}
    >
      <div className={style.backgroundImage}>
        {/* <Image
          src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltb8cbee62777e3c4f/62342c39893506175b30a8b4/computing-20220318-fsl-bg-pc-gaming-homepage-m.jpg?width=5760&quality=80&auto=webp"
          width={"100%"}
        /> */}

        <Image src={backgroundImage} width={"100%"} />
      </div>
      <div className={style.container}>
        <HStack spacing={"80px"}>
          <Stack
            textAlign={"left"}
            color={"white"}
            // mr={"20px"}
            w={"100%"}
          >
            <Heading fontSize={"30px"}>{Hading}</Heading>
            <p>{title}</p>
            {button ? (
              <Button width={"40%"} color={"blue.600"}>
                {text}
              </Button>
            ) : null}
          </Stack>
          <div className={style.carousel}>
            <Slider {...settings}>
              {carousel?.map((item) => (
                <VStack>
                  <Box
                    textAlign={"left"}
                    bg="white"
                    p={"15px"}
                    h={"340px"}
                    width={"90%"}
                    key={item.id}
                    borderRadius={"10px"}
                  >
                    <Skeleton isLoaded={isLoading}>
                      <Image src={item.image} width={"80%"} />
                      <Text fontSize={"13px"}>{item.ProductName}</Text>
                      <Flex
                        alignItems={"center"}
                        color={"#FECF0A"}
                        fontSize={"15px"}
                        mt={"10px"}
                      >
                        {item.RatingStar.map((star) => (
                          <>
                            {star === "Star" ? (
                              <FaStar />
                            ) : star === "HalfStar" ? (
                              <FaStarHalfAlt />
                            ) : (
                              <FaRegStar />
                            )}
                          </>
                        ))}
                      </Flex>
                      <Text fontSize={"12px"} mt={"5px"}>
                        ({item.Reviews}Reviews)
                      </Text>
                      <Text fontWeight={"700"} fontSize={"20px"} mt={"10px"}>
                        ${item.Price}
                      </Text>
                    </Skeleton>
                  </Box>
                </VStack>
              ))}
            </Slider>
          </div>
        </HStack>
      </div>
    </div>
  );
};

export default Carousel;
