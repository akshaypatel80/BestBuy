import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Skeleton,
  Stack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../Api/AllApi";
import Carousel from "../Components/Carousel";
import ComputerScategory from "../Components/Shop/ComputersAndTablets/ComputerScategory";
import ComputersTabletsLeft from "../Components/Shop/ComputersAndTablets/ComputersTabletsLeft";
import ShopGrid from "../Components/Shop/ShopData/ShopGrid";

const ComputersAndTabletsPage = () => {
  const [data, setData] = useState([]);
  const [carousel, setCarousel] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getData();
    CarouselData();
    setTimeout(() => {
      setIsLoading(true);
    }, 2500);
  }, []);
  const getData = async () => {
    try {
      let res = await baseUrl.get("/Computers-Tablets");
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const CarouselData = async () => {
    try {
      let res = await baseUrl.get("/Carousel");
      setCarousel(res.data.Toppicks);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(data);
  console.log(carousel);
  return (
    <div style={{ marginTop: "50px" }}>
      <Heading fontWeight={400} textAlign={"left"} pl={"50px"} mb={"1rem"}>
        Computers & Tablets
      </Heading>
      <Skeleton isLoaded={isLoading}>
        <Image src="https://drive.google.com/uc?export=view&id=1LkOdQQTsJ6ppAPDkbqDkCjC4nD7GQZcM" />
      </Skeleton>
      <Container maxW={"90%"}>
        <ComputerScategory />
        <Carousel
          carousel={carousel}
          backgroundImage={
            "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt688687f63a9eeba0/62d19512181754349ea32d7c/global-20220722-fsl-bts-background-m.jpg"
          }
          Hading={"Top picks for performance and price."}
          title={
            "Boost your productivity no matter where you're working from with laptops for students, creatives, and anyone who takes their work to-go."
          }
        />
        <HStack alignItems={"flex-start"} spacing={"20px"}>
          <Box width={"70%"}>
            <ComputersTabletsLeft />
          </Box>
          <ShopGrid data={data} />
        </HStack>
      </Container>
    </div>
  );
};

export default ComputersAndTabletsPage;
