import {
  Box,
  Container,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../Api/AllApi";
import Carousel from "../Components/Carousel";
import AppleProduct from "../Components/Home/AppleProduct";
import ByCategoryHome from "../Components/Home/ByCategoryHome";
import HottestOffers from "../Components/Home/HottestOffers";
import TopSection from "../Components/Home/TopSection";

const HomePage = () => {
  const [carouselone, setCarouselOne] = useState([]);
  useEffect(() => {
    CarouselData();
  }, []);
  const CarouselData = async () => {
    try {
      let res = await baseUrl.get("/Carousel");
      setCarouselOne(res.data.explore);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(carouselone);
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
        <Carousel
          carousel={carouselone}
          backgroundImage={
            "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt0241a006343a81e5/624616e781c9270edfaabe98/global-evergreen-bbyexplore-fsl-m.jpg"
          }
          Hading={"Don't miss out."}
          title={
            "Demo these exciting tech products in-store from now until October 2, or check them out online"
          }
          button={true}
          text={"Shop More Latest Tech"}
        />
        <SimpleGrid
          columns={4}
          spacing={"50px 20px"}
          textAlign={"left"}
          mb={"4rem"}
        >
          <Box>
            <Image
              src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt0f16a4877784ec54/627c567c6ed4423afc98f7d3/ipp-evergreen-offer-home-gs-academy-m.jpg"
              height={"176px"}
              width={"100%"}
            />
            <Text fontWeight={"bold"} mt={"20px"}>
              Geek Squad Academy.
            </Text>
            <Text>
              We offer free online STEM courses that show young learners the
              wonders of tech and teach them new skills.
            </Text>
            <Link color={"#0046BE"}>Learn more</Link>
          </Box>
          <Box>
            <Image
              src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt46d42c007e0947d4/627c567d52bd3634ca6ffc5a/ipp-evergreen-offer-home-tech-grant-m.jpg"
              height={"176px"}
              width={"100%"}
            />
            <Text fontWeight={"bold"} mt={"20px"}>
              School Tech Grants.
            </Text>
            <Text>
              We offer grants of up to $10,000 to schools in need of new tech to
              help students excel.
            </Text>
            <Link color={"#0046BE"}>Chat with an Agent</Link>
          </Box>
          <Box>
            <Image
              src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt6a5c569a35f1d9d7/627c567cbae21939d5446b74/ipp-evergreen-offer-home-map-m.jpg"
              height={"176px"}
              width={"100%"}
            />
            <Text fontWeight={"bold"} mt={"20px"}>
              Mentorship & Accelerator Program.
            </Text>
            <Text>
              We help under-represented tech innovators reach their business
              goals with mentorship and support.
            </Text>
            <Link color={"#0046BE"}>Find the nearest store</Link>
          </Box>
          <Box>
            <Image
              src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt23b28451eac2b9fb/627c567c29f29d7c033ac9cf/ipp-evergreen-offer-home-environment-m.jpg"
              height={"176px"}
              width={"100%"}
            />
            <Text fontWeight={"bold"} mt={"20px"}>
              Environmental Programs.
            </Text>
            <Text>
              We’re working together to promote sustainability and reduce our
              impact on the environment.
            </Text>
            <Link color={"#0046BE"}>Learn more</Link>
          </Box>
        </SimpleGrid>
      </Container>
    </div>
  );
};

export default HomePage;
