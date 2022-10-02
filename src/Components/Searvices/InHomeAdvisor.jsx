import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  ListItem,
  OrderedList,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const InHomeAdvisor = () => {
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
        In-Home Advisor
      </Heading>
      <Image
        src="https://drive.google.com/uc?export=view&id=1eRgyYn_F0pvQe7Uq6V8vgjNUuPZMnu_l"
        mt={"20px"}
      />
      <Container maxW={"75%"}>
        <Box width={"70%"} margin={"auto"} mt={"3rem"}>
          <Text>
            Location Availability: In-home visits are only available in Edmonton
            (AB) and select regions in Ontario*. Virtual consultations with our
            expert advisors are available everywhere else Canada.
          </Text>
          <Text mt={"20px"}>
            *Please review our Frequently Asked Questions for a list of regions
            where we offer in-home consultations.
          </Text>
        </Box>
        <Image
          src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltfc2ca1ce958b66d1/611c6e76f30c8713cf6e6759/ipp-evergreen-iha-m-en.png"
          m={"5rem 0"}
          objectFit={"cover"}
        />
        <Text fontSize={"24px"} fontWeight={"700"}>
          How we can help
        </Text>
        <SimpleGrid columns={3} gap={"20px"} textAlign={"left"} mt={"1rem"}>
          <Box>
            <Image
              src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt0e69bb1da70a3cc4/6115ec50df0bce149854c5cb/ipp-offer-iha-smarthome-m.jpg"
              height={"176px"}
              objectFit={"cover"}
            />
            <Text fontSize={"16px"} fontWeight={"700"}>
              Home is where the smart is.
            </Text>
            <Text fontSize={"16px"}>
              We’ll show you how smart home products could work in your home,
              including smart lights, thermostats, voice assistants, and more.
            </Text>
          </Box>
          <Box>
            <Image
              src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltd7bd0fb1291022f1/6115ec5025695f14a34d6df1/ipp-offer-iha-hometheater-m.jpg"
              height={"176px"}
              objectFit={"cover"}
            />
            <Text fontSize={"16px"} fontWeight={"700"}>
              Your ticket to smarter home entertainment.
            </Text>
            <Text fontSize={"16px"}>
              We’ll design the best possible viewing experience for your home
              theatre and recommend the right products for your budget.
            </Text>
          </Box>
          <Box>
            <Image
              src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt7d51266b3c7a5ea4/5ca67154d06594542e966deb/img-gs-kitchen-design.jpg"
              height={"176px"}
            />
            <Text fontSize={"16px"} fontWeight={"700"}>
              Put a smarter kitchen on the menu.
            </Text>
            <Text fontSize={"16px"}>
              We’ll measure your space, recommend appliances, and coordinate
              with contractors, decorators, and installers so you won’t have to
              lift a finger.
            </Text>
          </Box>
        </SimpleGrid>
        <Text fontSize={"24px"} fontWeight={"700"} mt={"2rem"}>
          Here's how it works
        </Text>
        <HStack gap={"7rem"} mt={"1rem"}>
          <OrderedList textAlign={"left"} spacing={"22px"}>
            <ListItem>1. Book a free in-home or virtual consultation.</ListItem>
            <ListItem>
              2. One of our expert advisors will offer advice on design,
              products, and space considerations.
            </ListItem>
            <ListItem>
              3. Based on your consultation, we'll send you a customized plan
              that brings out the best in your home.
            </ListItem>
            <ListItem>
              4. If you’re happy with the plan, your expert advisor will order
              products and coordinate all deliveries and installations
            </ListItem>
          </OrderedList>
          <Image
            src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blte8de1ea0afd74abd/6115ee4525695f14a34d6dfb/ipp-iha-blueshirt-story.jpg"
            width={"50%"}
          />
        </HStack>
        <Text fontSize={"24px"} fontWeight={"700"} mt={"5rem"}>
          HLet's get started
        </Text>
        <Text mt={"1rem"}>
          Give us a call between 10am-6pm ET (Mon-Sat) and 11am-6pm ET (Sun).
          Closed on holidays.
        </Text>
        <SimpleGrid
          columns={2}
          gap={"6px"}
          m={"auto"}
          width={"60%"}
          alignItems={"center"}
          justifyContent={"center"}
          mt={"5rem"}
        >
          <Box width={"50%"}>
            <Image src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt72a9d036151fde47/6115f40cd107d613a27e733d/ipp_iha_icon.png?" />
            <Text color={"blue"} fontSize={"14px"} mt={"16px"}>
              Book a free consultation
            </Text>
          </Box>
          <Box width={"50%"}>
            <Image src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt988d8249536a9897/5fa8681e4e40cf53001f4bfa/ipp_gsbm_icon_callus.png" />
            <Text color={"blue"} fontSize={"14px"} mt={"16px"}>
              Call us at 1-833-229-2384 (BBY-ADVISOR)
            </Text>
          </Box>
        </SimpleGrid>
        <Stack
          margin={"auto"}
          spacingY={"20px"}
          mt={"5rem"}
          textAlign={"left"}
          width={"60%"}
        >
          <Text fontSize={"24px"} fontWeight={"700"}>
            Frequently Asked Questions
          </Text>
          <Text fontSize={"20px"} fontWeight={"700"}>
            Why would I schedule a free consultation with an expert advisor?
          </Text>
          <Text fontSize={"16px"} fontWeight={"400"}>
            For those who are moving/relocating, remodeling, building, or simply
            looking for an upgrade, an In-Home Advisor can help select the
            products and solutions that best fit an individual’s lifestyle
            needs. For those interested in smart home technology products and
            connecting technology together, an In-Home Advisor can help.
          </Text>
          <Text fontSize={"20px"} fontWeight={"700"}>
            Where do you offer in-home consultations?
          </Text>
          <Text fontSize={"16px"} fontWeight={"400"}>
            In-home visits from our experts advisors are currently available in
            the following regions:
          </Text>
          <li>
            Ottawa (ON), Niagara (ON), London (ON), Waterloo (ON), Windsor (ON),
            Durham (ON), Halton (ON), Toronto (ON), York (ON), Barrie (ON), Peel
            (ON), and Edmonton (AB).
          </li>
          <Text fontSize={"16px"} fontWeight={"400"}>
            Don't see your region listed above? Our expert advisors can still
            help bring out the best in your home with free virtual
            consultations.
          </Text>
          <Text fontSize={"20px"} fontWeight={"700"}>
            How long do consultations take?
          </Text>
          <Text fontSize={"16px"} fontWeight={"400"}>
            Both in-home and virtual consultations last between 60–90 minutes on
            average.
          </Text>
          <Text fontSize={"20px"} fontWeight={"700"}>
            What are the qualifications of an In-Home Advisor?
          </Text>
          <Text fontSize={"16px"} fontWeight={"400"}>
            In-Home Advisors go through extensive, continued training on
            technology across the whole home, including (but not limited to)
            home theater, appliances, smart home technology, networking, etc.
          </Text>
          <Text fontSize={"20px"} fontWeight={"700"}>
            How is this different than Geek Squad service offerings?
          </Text>
          <Text fontSize={"16px"} fontWeight={"400"}>
            Geek Squad services are engaged to fix, repair or install a solution
            that has been in most cases identified. The In-Home Consultation
            services allow the customer to see what is possible and to design
            and determine a personalized solution for their own home. The
            In-Home Consultation helps with the design of a solution. GeekSquad
            services may be deployed to implement the solution.
          </Text>
          <Text fontSize={"20px"} fontWeight={"700"}>
            What's not included?
          </Text>
          <Text fontSize={"16px"} fontWeight={"400"}>
            Service requests, troubleshooting, repair, delivery, setup and/or
            installation are not included in an in-home or virtual consultation.
            Please refer to Geek Squad® Services for any of those needs.
          </Text>
        </Stack>
        <Image
          src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt0ca797fe4791c852/61d8c3637c5435387a0c0115/heb-20220107-bby-valueprops-en-m.jpg"
          m={"3rem 0"}
        />
      </Container>
    </div>
  );
};

export default InHomeAdvisor;
