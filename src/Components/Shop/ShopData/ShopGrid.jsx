import {
  Box,
  FormControl,
  FormLabel,
  HStack,
  Select,
  SimpleGrid,
  Switch,
  Text,
  VStack,
} from "@chakra-ui/react";

import ShopCard from "./ShopCard";

const ShopGrid = ({ data }) => {
  return (
    <div>
      <HStack bg={"#F4F6F9"} p={"30px 20px"} justifyContent={"space-between"}>
        <Text>1255555</Text>
        <Box width={"60%"}>
          <FormControl display="flex" alignItems="center" gap={"10px"}>
            <FormLabel htmlFor="email-alerts" mb="0">
              In Stock
            </FormLabel>
            <Switch id="email-alerts" />
            <FormLabel htmlFor="email-alerts" mb="0">
              Best Buy Only
            </FormLabel>
            <Switch id="email-alerts" />
            <FormLabel htmlFor="email-alerts" mb="0">
              Sort
            </FormLabel>
            <Select width={"40%"} borderColor={"black"}>
              <option value="Best Match">Best Match</option>
              <option value="Price Low-High">Price Low-High</option>
              <option value="Price High-Low">Price High-Low</option>
              <option value="Highest Rated">Highest Rated</option>
            </Select>
          </FormControl>
        </Box>
      </HStack>
      <SimpleGrid columns={4} spacing={"10px"} paddingTop={"20px"}>
        {data &&
          data.map((item) => (
            <Box
              // boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}
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
