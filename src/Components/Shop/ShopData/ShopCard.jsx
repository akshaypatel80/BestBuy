import { Flex, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { FcCheckmark } from "react-icons/fc";
import { MdDoDisturb } from "react-icons/md";
import { Link } from "react-router-dom";
const ShopCard = ({
  image,
  ProductName,
  RatingStar,
  Reviews,
  Price,
  Avaliable,
}) => {
  return (
    <div>
      <Stack textAlign={"left"} p={"20px"}>
        <Image src={image} />
        <Text>
          <Link>{ProductName}</Link>
        </Text>
        <HStack>
          <Flex
            alignItems={"center"}
            gap={"5px"}
            color={"#FECF0A"}
            fontSize={"15px"}
          >
            {RatingStar.map((star) => (
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
          <Text fontSize={"15px"}>({Reviews}Reviews)</Text>
        </HStack>
        <Text fontSize={"18px"} fontWeight={"700"}>
          ${Price}
        </Text>
        <Flex alignItems={"center"} gap={"20px"}>
          {Avaliable ? (
            <>
              <FcCheckmark /> <Text>Available to ship</Text>
            </>
          ) : (
            <>
              <MdDoDisturb /> <Text>Sold out online</Text>
            </>
          )}
        </Flex>
      </Stack>
    </div>
  );
};

export default ShopCard;
