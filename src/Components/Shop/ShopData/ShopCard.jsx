import {
  Flex,
  HStack,
  Image,
  Skeleton,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
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
  id,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 2000);
  });
  return (
    <div>
      <Stack textAlign={"left"} p={"20px"}>
        <Skeleton isLoaded={isLoading}>
          <Image src={image} width={"90%"} />
        </Skeleton>
        <Skeleton isLoaded={isLoading}>
          <Text fontSize={"14px"}>
            <Link to={`/Computers-Tablets/${id}`}>{ProductName}</Link>
          </Text>
        </Skeleton>
        <HStack>
          <Skeleton isLoaded={isLoading}>
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
          </Skeleton>
          <Skeleton isLoaded={isLoading}>
            <Text fontSize={"15px"}>({Reviews}Reviews)</Text>
          </Skeleton>
        </HStack>
        <Skeleton isLoaded={isLoading}>
          <Text fontSize={"18px"} fontWeight={"700"}>
            ${Price}
          </Text>
        </Skeleton>
        <Skeleton isLoaded={isLoading}>
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
        </Skeleton>
      </Stack>
    </div>
  );
};

export default ShopCard;
