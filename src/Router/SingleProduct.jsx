import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseUrl } from "../Api/AllApi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Carousel.css";
import { FcCheckmark } from "react-icons/fc";
import { FaStar, FaStarHalfAlt, FaRegStar, FaTruck } from "react-icons/fa";
const SingleProduct = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const toast = useToast();

  useEffect(() => {
    getData();
  }, [id]);

  const getData = async () => {
    try {
      let res = await baseUrl.get(`/Computers-Tablets/${id}`);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCart = async () => {
    try {
      let res = await baseUrl.post("/cart", data);
      toast({
        title: "Product is Added",
        status: "success",
        positions: "top",
        isClosable: true,
      });
      console.log(res);
    } catch (error) {
      toast({
        title: "Product was already added",
        status: "info",
        position: "top",
        isClosable: true,
      });
      console.log(error);
    }
  };

  console.log(data);

  let settings = {
    dotsClass: "slick-dots slick-thumb",
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    customPaging: (i) => {
      return (
        <Flex width={"100px"} height={"100px"} scale={"20px"} pb={"60px"}>
          <Image
            src={data.Image[i]}
            width={"200px"}
            height={"100px"}
            objectFit={"cover"}
          />
        </Flex>
      );
    },
  };
  return (
    <div>
      <Container
        maxW={"90%"}
        justifyContent={"space-between"}
        mt={"2rem"}
        textAlign={"left"}
      >
        <Flex gap={"30px"} textAlign={"left"}>
          <Stack width={"50%"} spacing={"30px"}>
            <Slider {...settings}>
              {data.Image?.map((item) => (
                <div style={{ marginBottom: "50px" }}>
                  <Image src={item} alt="image" />
                </div>
              ))}
            </Slider>
            <Text fontSize={"20px"} fontWeight={600}>
              Overview
            </Text>
            <Text>{data.Overview}</Text>
            <Image src="https://drive.google.com/uc?export=view&id=15O2QW99uX-Hmh9moZPzyRDf45aUCys2e" />
          </Stack>
          <Stack textAlign={"left"}>
            <Text fontSize={"24px"}>{data.ProductName}</Text>
            <Box fontSize={"13px"}>
              <span>
                <b>Model Number:</b> {data.ModelNumber}
              </span>
              &nbsp; &nbsp; &nbsp;
              <span>
                <b>Web Code:</b>
                {data.WebCode}
              </span>
            </Box>
            <Flex gap={"10px"}>
              <Flex
                alignItems={"center"}
                gap={"5px"}
                color={"#FECF0A"}
                fontSize={"15px"}
              >
                {data.RatingStar?.map((star) => (
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
              <Text color={"#0046be"} fontSize={"13px"}>
                {data.Rating} ({data.Reviews} Reviews)
              </Text>
              <Text color={"#0046be"} fontSize={"13px"}>
                Write your review
              </Text>
            </Flex>
            <Flex gap={"20px"}>
              <Image
                src="https://logos-world.net/wp-content/uploads/2020/11/Best-Buy-Logo.png"
                width={"5%"}
              />

              <Text fontSize={"13px"} fontWeight={600}>
                Sold and shipped by Best Buy
              </Text>
            </Flex>
            <Heading pt={"20px"}>${data.Price}</Heading>
            <Flex gap={"20px"} pt={"15px"}>
              <Image
                src="https://cdn-icons-png.flaticon.com/512/2652/2652181.png"
                width={"4%"}
              />
              <Text fontWeight={600}>7 Special Offers Available</Text>
            </Flex>
            <Text pl={"45px"} color={"#0046be"}>
              Save 55% on an eligible 1-year subscription to NordVPN when you
              buy a qualifying laptop, PC, tablet, storage device, or Wi-Fi
              device.*
            </Text>
            <VStack p={"50px"} bgColor={"#F4F6F9"}>
              <Button
                colorScheme={"yellow"}
                width={"100%"}
                h={"50px"}
                fontWeight={"500"}
                onClick={handleCart}
              >
                Add to Cart
              </Button>
              <Button
                bgColor={"#C5CBD5"}
                width={"100%"}
                h={"50px"}
                fontWeight={"500"}
              >
                Pick Up at Store
              </Button>

              {data.Avaliable ? (
                <>
                  <Flex
                    gap={"20px"}
                    textAlign={"left"}
                    borderBottomColor={"1px solid red"}
                    alignItems={"flex-start"}
                    pt={"20px"}
                  >
                    <Box display={"flex"} gap={"2px"}>
                      <span style={{ fontSize: "24px" }}>
                        <FaTruck />
                      </span>
                      <span>
                        <FcCheckmark />
                      </span>

                      <VStack textAlign={"left"}>
                        <Text>Available to ship</Text>
                        <Text textAlign={"left"}>Only 4 left!</Text>
                        <Text>
                          This will be delivered as early as October 7, 2022
                        </Text>
                        <Text>
                          Enjoy fast, free shipping on most orders over $35.
                        </Text>
                        <Text>Not available for pickup:</Text>
                      </VStack>
                    </Box>
                  </Flex>
                </>
              ) : (
                <FaTruck />
              )}
            </VStack>
          </Stack>
        </Flex>
      </Container>
    </div>
  );
};

export default SingleProduct;
