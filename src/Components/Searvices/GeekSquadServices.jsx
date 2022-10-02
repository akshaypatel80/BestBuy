import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  SimpleGrid,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const GeekSquadServices = () => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 2500);
  });
  return (
    <div>
      <Heading
        size={"lg"}
        fontWeight={"400"}
        textAlign={"left"}
        width={"75%"}
        margin={"auto"}
        mt={"20px"}
      >
        Geek Squad Services
      </Heading>
      <Skeleton isLoaded={isLoading}>
        <Image
          src="https://drive.google.com/uc?export=view&id=1Kxc9bOqWjGv1b--GsIo_RF3kp54J-cwd"
          mt={"20px"}
        />
      </Skeleton>
      <Container maxW={"75%"}>
        <Heading size={"lg"} mt={"50px"}>
          Discover our services by product category
        </Heading>
        <Text mt={"40px"}>
          We offer setup, protection, and support services for the following
          product categories.
        </Text>
        <Flex gap={"25px"} mt={"5rem"} textAlign={"left"}>
          <Box>
            <Image
              src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt19dfc9da2e9305c5/6171d67e5422ab67be73db78/ipp-evergreen-offer-appliances-m.jpg"
              objectFit={"cover"}
            />
            <Text fontWeight={"bold"} mt={"20px"}>
              Major appliances services.
            </Text>
            <Link color={"#0046BE"}>Learn more</Link>
          </Box>
          <Box>
            <Image src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltf5117ddab8c7f070/6171d67ef13b7e5c89d3f465/ipp-evergreen-offer-smarthome-m.jpg" />
            <Text fontWeight={"bold"} mt={"20px"}>
              Smart home and networking services.
            </Text>
            <Link color={"#0046BE"}>Learn more</Link>
          </Box>
          <Box>
            <Image src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt53b6edf466d9fc12/6171d67e90079752a47e8c35/ipp-evergreen-offer-hometheater-m.jpg" />
            <Text fontWeight={"bold"} mt={"20px"}>
              TV and home theatre services.
            </Text>
            <Link color={"#0046BE"}>Learn more</Link>
          </Box>
          <Box>
            <Image src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltbfc2d4f24067a1c4/6171d67e52c42c67c026d5d5/ipp-evergreen-offer-computer-m.jpg" />
            <Text fontWeight={"bold"} mt={"20px"}>
              Laptop, desktop, and tablet services.
            </Text>
            <Link color={"#0046BE"}>Learn more</Link>
          </Box>
        </Flex>
        <Heading size={"lg"} mt={"50px"}>
          Getting help is easy
        </Heading>
        <Text m={"auto"} mt={"40px"} w={"65%"}>
          We’re here to help you with anything Geek Squad, including technical
          support, starting a Protection claim, billing inquiries, or scheduling
          an in-home appointment.
        </Text>
        <SimpleGrid
          columns={3}
          spacing={"50px 20px"}
          textAlign={"left"}
          mt={"5rem"}
        >
          <Box>
            <Image
              src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltec4906f6691f1aa7/6037fe931f3c9a3b23d6db61/global-evergreen-gs-support-m.png"
              height={"176px"}
              width={"100%"}
              objectFit={"cover"}
            />
            <Text fontWeight={"bold"} mt={"20px"}>
              Chat online.
            </Text>
            <Text>Available 24/7.</Text>
            <Link color={"#0046BE"}>Chat with an Agent</Link>
          </Box>
          <Box>
            <Image
              src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt71e1a6ece9326d01/6036f4f2f54af27503f2d840/global-evergreen-gs-call-m.png"
              height={"176px"}
              width={"100%"}
              objectFit={"cover"}
            />
            <Text fontWeight={"bold"} mt={"20px"}>
              Give us a call.
            </Text>
            <Text>Call 1-800-GEEKSQUAD (1-800-433-5778)</Text>
            <Link color={"#0046BE"}>Chat with an Agent</Link>
          </Box>
          <Box>
            <Image
              src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt70eebb47701bc62f/6037fe44259b2810197dc442/global-evergreen-gs-store-m.png"
              height={"176px"}
              width={"100%"}
              objectFit={"cover"}
            />
            <Text fontWeight={"bold"} mt={"20px"}>
              Visit a store near you.
            </Text>
            <Text>Talk with an Agent at your local Best Buy store.</Text>
            <Link color={"#0046BE"}>Find the nearest store</Link>
          </Box>
          <Box>
            <Image
              src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt73f085cf5f9a1ff1/6037fbd42eee966ee2e3cb60/ipp-evergreen-offer-gsp-chat-m.jpg"
              height={"176px"}
              width={"100%"}
              objectFit={"cover"}
            />
            <Text fontWeight={"bold"} mt={"20px"}>
              Chat with Remote Technical Services.
            </Text>
            <Text>
              Our Agents are available and online 24/7 to help with challenging
              tech problems such as device setup, device diagnosis, software
              repair, and more.
            </Text>
            <Link color={"#0046BE"}>Learn more</Link>
          </Box>
          <Box>
            <Image
              src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt5a8951f007f0737d/5f063f7e25b6aa6efeb89145/global-evergreen-gs-self-serve-m.png"
              height={"176px"}
              width={"100%"}
              objectFit={"cover"}
            />
            <Text fontWeight={"bold"} mt={"20px"}>
              Geek Squad Self-Service Portal.
            </Text>
            <Text>
              Update your account information, change your method of payment,
              file a protection claim, or check the status of your claim..
            </Text>
            <Link color={"#0046BE"}>Visit Self-Service Portal</Link>
          </Box>
          <Box>
            <Image
              src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt71db96a459d943b7/5f063fae5dfaac76f7e51e01/global-evergreen-gs-track-m.png"
              height={"176px"}
              width={"100%"}
              objectFit={"cover"}
            />
            <Text fontWeight={"bold"} mt={"20px"}>
              Track your repair.
            </Text>
            <Text>
              Check the status of your repair and keep an eye on it every step
              of the way.
            </Text>
            <Link color={"#0046BE"}>Track your repair</Link>
          </Box>
        </SimpleGrid>
        <Heading size={"lg"} mt={"50px"}>
          Getting help is easy
        </Heading>
        <SimpleGrid columns={2} spacing={"20px"} textAlign={"left"} mt={"2rem"}>
          <Box>
            <Image
              src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt081d29fef1dfc2c3/627d8ddcf628f26854f9063f/ipp-bby-membership-offer-xsm.jpg"
              height={"176px"}
              width={"100%"}
              objectFit={"cover"}
            />
            <Text fontWeight={"bold"} mt={"20px"}>
              Best Buy Membership.
            </Text>
            <Text>
              Sign up for a Best Buy Membership and get access to free
              round-the-clock remote tech support, exclusive savings, services,
              and more.
            </Text>
            <Link color={"#0046BE"}>Discover Best Buy Membership</Link>
          </Box>
          <Box>
            <Image
              src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt59466aa14d98a9df/627d8ddc8c90c334d0d42b40/ipp-bby-protection-offer-xsm.jpg"
              height={"176px"}
              width={"100%"}
              objectFit={"cover"}
            />
            <Text fontWeight={"bold"} mt={"20px"}>
              Best Buy Protection.
            </Text>
            <Text>
              Enjoy your tech, worry-free, with protection plans that give you
              more peace of mind.
            </Text>
            <Link color={"#0046BE"}>Discover Best Buy Protection</Link>
          </Box>
        </SimpleGrid>
        <Image
          src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt0ca797fe4791c852/61d8c3637c5435387a0c0115/heb-20220107-bby-valueprops-en-m.jpg"
          mt={"2rem"}
        />
      </Container>
    </div>
  );
};

export default GeekSquadServices;
