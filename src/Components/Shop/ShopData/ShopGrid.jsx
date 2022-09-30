import { Box, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../../../Api/AllApi";
import ShopCard from "./ShopCard";

const ShopGrid = ({ data }) => {
  return (
    <div>
      <SimpleGrid columns={3} spacing={10} paddingTop={"20px"}>
        {data &&
          data.map((item) => (
            <Box
              boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}
              borderRadius={"10px"}
            >
              <ShopCard
                key={item.id}
                image={item.Image[0]}
                ProductName={item.ProductName}
                RatingStar={item.RatingStar}
                Reviews={item.Reviews}
                Price={item.Price}
                Avaliable={item.Avaliable}
              />
            </Box>
          ))}
      </SimpleGrid>
    </div>
  );
};

export default ShopGrid;
