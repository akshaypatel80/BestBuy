import {
  Box,
  Container,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const TradeInProgram = () => {
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
        src="https://drive.google.com/uc?export=view&id=19e54LVUSDxlNaTpQdUkecJesMYJXzQjy"
        mt={"20px"}
      />
      <Container maxW={"75%"}>
        <Text fontSize={"24px"} fontWeight={"700"} m={"5rem 0"}>
          How to trade in your device for a gift card
        </Text>
        <SimpleGrid columns={3} gap={"20px"} textAlign={"left"} mb={"3rem"}>
          <Box>
            <Image
              src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltdfb3ba7ca99e9ba3/5d5ddbd9ef04464325fb8628/apple-trade-in-visit-store-m.jpg"
              height={"176px"}
            />
            <Text fontSize={"16px"} fontWeight={"700"}>
              1. Visit a store.
            </Text>
            <Text fontSize={"16px"}>
              Bring your device, plus any manuals, accessories and packaging to
              a participating store*.
            </Text>
          </Box>
          <Box>
            <Image
              src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt0b64f21e9790bbc9/5d5f0f0dc0e6e77f8baf3084/apple-trade-in-estimate-value-m.jpg"
              height={"176px"}
            />
            <Text fontSize={"16px"} fontWeight={"700"}>
              2. Get your device valued.
            </Text>
            <Text fontSize={"16px"}>
              We’ll estimate the value of your device based on its model and
              condition.
            </Text>
          </Box>
          <Box>
            <Image
              src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt1f41ff7973ca3b00/5d5ec738c0e6e77f8baf2e1a/apple-trade-in-gift-card-m.jpg"
              height={"176px"}
            />
            <Text fontSize={"16px"} fontWeight={"700"}>
              3. Get a gift card.
            </Text>
            <Text fontSize={"16px"}>
              We’ll give you a Best Buy gift card for the value of your device.
            </Text>
          </Box>
        </SimpleGrid>
        <Text fontSize={"24px"} fontWeight={"700"} m={"5rem 0"}>
          Estimate how much your current device is worth
        </Text>
        <SimpleGrid
          columns={6}
          gap={"20px"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box>
            <Image
              src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt77201cbf0088cb62/5ee011fbbfd91c2c81be90bc/heb-evergreen-trade-in-program-category-icon-cellphone.jpg"
              width={"55%"}
              m={"auto"}
              mb={"40px"}
            />
            <Link fontSize={"15px"} color={"#0046be"}>
              Cell Phones
            </Link>
          </Box>
          <Box>
            <Image
              src="https://multimedia.bbycastatic.ca/multimedia/products/250x250/157/15723/15723497_1.jpg"
              width={"55%"}
              m={"auto"}
              mb={"40px"}
            />
            <Link fontSize={"15px"} color={"#0046be"}>
              iPhone
            </Link>
          </Box>
          <Box>
            <Image
              src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltad02379eb78e9028/5e28a49463d1b6503160ee40/computing-evergreen-category-icon-laptops.jpg"
              width={"55%"}
              m={"auto"}
              mb={"40px"}
            />
            <Link fontSize={"15px"} color={"#0046be"}>
              Laptops
            </Link>
          </Box>
          <Box>
            <Image
              src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltd164b9efd88639af/5ee011fb7968ce38f26fe483/heb-evergreen-trade-in-program-category-icon-macbook.jpg"
              width={"55%"}
              m={"auto"}
              mb={"40px"}
            />
            <Link fontSize={"15px"} color={"#0046be"}>
              MacBook
            </Link>
          </Box>
          <Box>
            <Image
              src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt5ae4c8b24e7dd28a/5fa498ad6f82405d9a4a9b2e/ipp-sbc-imac.jpg"
              width={"55%"}
              m={"auto"}
              mb={"40px"}
            />
            <Link fontSize={"15px"} color={"#0046be"}>
              iMac
            </Link>
          </Box>
          <Box>
            <Image
              src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt5f8121276fa8ab54/609cfe73c1ac134bc5d3bc32/computing-evergreen-category-icon-tablets.jpg"
              width={"55%"}
              m={"auto"}
              mb={"40px"}
            />
            <Link fontSize={"15px"} color={"#0046be"}>
              Tablets
            </Link>
          </Box>
          <Box>
            <Image
              src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt5033162e83639453/61a17777a7343913adb6ba36/computing-evergreen-category-icon-ipad.jpg"
              width={"55%"}
              m={"auto"}
              mb={"40px"}
            />
            <Link fontSize={"15px"} color={"#0046be"}>
              iPad
            </Link>
          </Box>
          <Box>
            <Image
              src="https://multimedia.bbycastatic.ca/multimedia/products/250x250/126/12612/12612449.jpg"
              width={"55%"}
              m={"auto"}
              mb={"40px"}
            />
            <Link fontSize={"15px"} color={"#0046be"}>
              Games
            </Link>
          </Box>
          <Box>
            <Image
              src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt1fad40c846776861/5de95338bddd415970d08114/vg-evergreen-icon-playstation4console.jpg"
              width={"55%"}
              m={"auto"}
              mb={"40px"}
            />
            <Link fontSize={"15px"} color={"#0046be"}>
              Gaming Consoles
            </Link>
          </Box>
          <Box>
            <Image
              src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltfd4fa5e1b8710c91/5d785a0a9901373e4fb51650/apple_launch-series_3-13018066.jpg"
              width={"55%"}
              m={"auto"}
              mb={"40px"}
            />
            <Link fontSize={"15px"} color={"#0046be"}>
              Wearable Technology
            </Link>
          </Box>
          <Box>
            <Image
              src="https://multimedia.bbycastatic.ca/multimedia/products/250x250/104/10423/10423495.jpg"
              width={"55%"}
              m={"auto"}
              mb={"40px"}
            />
            <Link fontSize={"15px"} color={"#0046be"}>
              iPod & MP3
            </Link>
          </Box>
          <Box>
            <Image
              src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt5dc9ad08ab6b762e/5fe4e116e7fdff751b793985/di-evergreen-category-icon-4k-mirrorless-cameras.jpg"
              width={"55%"}
              m={"auto"}
              mb={"40px"}
            />
            <Link fontSize={"15px"} color={"#0046be"}>
              Cameras
            </Link>
          </Box>
        </SimpleGrid>
        <Stack
          margin={"auto"}
          spacingY={"20px"}
          mt={"5rem"}
          textAlign={"left"}
          width={"60%"}
        >
          <Text fontSize={"20px"} fontWeight={"700"}>
            Frequently Asked Questions
          </Text>
          <Text fontSize={"16px"} fontWeight={"700"}>
            What should I do before bringing in my device?
          </Text>
          <Text fontSize={"16px"} fontWeight={"400"}>
            You’re responsible for removing any data from your device. Best Buy
            Canada isn’t responsible for any loss of any data or media from
            products delivered to us for trade-in.
          </Text>
          <Text fontSize={"16px"} fontWeight={"700"}>
            How is the value of my device determined?
          </Text>
          <Text fontSize={"16px"} fontWeight={"400"}>
            The age, condition and the original accessories included will affect
            the trade in value of your items. Best Buy Canada uses our
            proprietary technology to evaluate your device and provide a
            competitive offer.
          </Text>
          <Text fontSize={"16px"} fontWeight={"700"}>
            Do I need to bring accessories and manuals?
          </Text>
          <Text fontSize={"16px"} fontWeight={"400"}>
            Yes, if you bring your product without accessories, manuals it may
            impact the value of your trade in.
          </Text>
          <Text fontSize={"16px"} fontWeight={"700"}>
            What stores can I bring my device into?
          </Text>
          <Text fontSize={"16px"} fontWeight={"400"}>
            You can bring your device into any store other than the following
            stores: Kelowna (BC), Winnipeg (MB), Sudbury, Woodbridge, and
            Richmond Hill (ON), Granby & Rosemere (QC) due to municipal by-laws.
          </Text>
          <Text fontSize={"12px"} fontWeight={"400"}>
            *Trade-In isn’t available in the following stores: Kelowna (BC),
            Winnipeg (MB), Sudbury, Woodbridge, and Richmond Hill (ON), Granby
            and Rosemere (QC) due to municipal by-laws.
          </Text>
          <Text fontSize={"12px"} fontWeight={"400"}>
            Best Buy reserves the right to refuse any Trade-In for any reason.
            Trade-In is currently only available at select Best Buy locations.
            You must be at least 19 years of age with a valid government-issued
            photo ID. Best Buy is required by law to collect and record
            additional information as necessary. The information collected by
            Best Buy during any Trade-In transaction may be communicated to law
            enforcement authorities for law enforcement purposes. The product
            must be in good working condition and have an intact serial number.
            Not all products are eligible for Trade-In. The condition of the
            product and available documentation and accessories may affect the
            estimate. Trade-In value may depend on our evaluation of a number of
            factors, including condition, product age and specifications,
            documentation, resale value, etc. Trade-In estimates are subject to
            change and therefore they are only valid at time of estimate
            inquiry. You are responsible for removing any data from your product
            before providing the product for evaluation. You will be required to
            sign an agreement in store. Payment is by Best Buy gift card only
            and is not redeemable for cash. Trade-In transactions are
            irreversible after issuance of the Best Buy gift card. For complete
            details, see a Customer Service Representative in store.
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

export default TradeInProgram;
