import { Container, Heading, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../Api/AllApi";
import Carousel from "../Components/Carousel";
import ComputerScategory from "../Components/Shop/ComputersAndTablets/ComputerScategory";
import ShopGrid from "../Components/Shop/ShopData/ShopGrid";

const ComputersAndTabletsPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      let res = await baseUrl.get("/Computers-Tablets");
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(data);
  return (
    <div style={{ marginTop: "50px" }}>
      <Heading fontWeight={400} textAlign={"left"} pl={"50px"} mb={"1rem"}>
        Computers & Tablets
      </Heading>
      <Image src="https://drive.google.com/uc?export=view&id=1LkOdQQTsJ6ppAPDkbqDkCjC4nD7GQZcM" />
      <Container maxW={"80%"}>
        <ComputerScategory />
        <Carousel />
        <ShopGrid data={data} />
      </Container>
    </div>
  );
};

export default ComputersAndTabletsPage;
