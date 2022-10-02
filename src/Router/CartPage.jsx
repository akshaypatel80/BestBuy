import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../Api/AllApi";
import { FcCheckmark } from "react-icons/fc";
import { MdDoDisturb, MdShoppingBag, MdDelete } from "react-icons/md";

const CartPage = () => {
  const [data, setData] = useState([]);
  const toast = useToast();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      let res = await baseUrl.get("/cart");
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteData = async (id) => {
    try {
      let res = await baseUrl.delete(`/cart/${id}`);
      getData();
      toast({
        title: "Product Delete",
        status: "warning",
        position: "top",
        isClosable: true,
      });
    } catch (error) {
      console.log(error);
    }
  };

  console.log(data);
  return (
    <div>
      <Container maxW={"90%"} textAlign={"left"}>
        <Text fontSize={"24px"} mt={"5rem"} mb={"1rem"}>
          Your Cart
        </Text>
        <HStack>
          <Box
            width={"80%"}
            bgColor={"#F4F6F9"}
            display={"flex"}
            flexDirection={"column"}
            gap={"60px"}
            margin={"auto"}
            p={"80px"}
          >
            {data?.map((item) => (
              <Box
                boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}
                p={"20px"}
                bgColor={"white"}
                key={item.id}
              >
                <Flex justifyContent={"space-between"}>
                  <Image src={item.Image[0]} width={"25%"} />
                  <VStack width={"50%"}>
                    <Text>{item.ProductName}</Text>
                    <Box fontSize={"14px"}>
                      <Flex alignItems={"center"} gap={"20px"}>
                        {item.Avaliable ? (
                          <>
                            <FcCheckmark /> <Text>Available to ship</Text>
                          </>
                        ) : (
                          <>
                            <MdDoDisturb /> <Text>Sold out online</Text>
                          </>
                        )}
                        <HStack fontSize={"14px"}>
                          <MdShoppingBag color={"#0046be"} />
                          <Text>Marketplace seller</Text>
                        </HStack>
                      </Flex>
                    </Box>
                    <HStack
                      color={"#0046be"}
                      onClick={() => deleteData(item.id)}
                      cursor={"pointer"}
                    >
                      <Text fontSize={"20px"}>
                        <MdDelete />
                      </Text>
                      <Text>Remove</Text>
                    </HStack>
                  </VStack>
                  <Text fontSize={"25px"} fontWeight={"600"}>
                    ${item.Price}
                  </Text>
                </Flex>
              </Box>
            ))}
          </Box>
          <Box width={"30%"}>
            <Button width={"100%"} colorScheme={"yellow"} fontWeight={"500"}>
              Chake Out
            </Button>
          </Box>
        </HStack>
      </Container>
    </div>
  );
};

export default CartPage;
