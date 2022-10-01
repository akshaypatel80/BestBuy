import { Container, Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import Carousel from "../Components/Carousel";
import AppleProduct from "../Components/Home/AppleProduct";
import ByCategoryHome from "../Components/Home/ByCategoryHome";
import HottestOffers from "../Components/Home/HottestOffers";
import TopSection from "../Components/Home/TopSection";

const HomePage = () => {
  const [carouselone, setCarouselOne] = useState([]);
  return (
    <div>
      <TopSection />
      <Container maxW={"85%"}>
        <Heading fontSize={"25px"} mt={"5rem"}>
          Our hottest offers
        </Heading>
        <HottestOffers />
        <ByCategoryHome />
        <AppleProduct />
        <Carousel />
      </Container>
    </div>
  );
};

export default HomePage;
