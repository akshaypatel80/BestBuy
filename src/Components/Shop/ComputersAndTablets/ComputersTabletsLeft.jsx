import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Checkbox,
  Link,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const ComputersTabletsLeft = () => {
  return (
    <div>
      <Accordion allowMultiple textAlign={"left"}>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Text fontSize={"16px"} fontWeight={"600"}>
                  Categories
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Stack spacing={"14px"} fontSize={"15px"}>
              <Link>Laptops & MacBooks</Link>
              <Link>Desktop Computers</Link>
              <Link>Tablets & iPads</Link>
              <Link>eReaders & Accessories</Link>
              <Link>Computer Accessories</Link>
              <Link>Tablet & iPad Accessories</Link>
              <Link>Hard Drives & Storage Devices</Link>
              <Link>PC Components</Link>
              <Link>Wi-Fi and Networking</Link>
              <Link>Printers, Scanners & Fax</Link>
              <Link>Monitors</Link>
              <Link>Software</Link>
            </Stack>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Text fontSize={"16px"} fontWeight={"600"}>
                  Availability
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Stack spacing={"14px"} fontSize={"15px"}>
              <Checkbox colorScheme="blue" defaultChecked>
                <Link>Get it Shipped</Link>
              </Checkbox>
              <Checkbox>
                <Link>Pick Up at Nearby Stores</Link>
              </Checkbox>
            </Stack>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Text fontSize={"16px"} fontWeight={"600"}>
                  Current Offers
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Stack spacing={"14px"} fontSize={"15px"}>
              <Checkbox colorScheme="blue" defaultChecked>
                <Link>On Sale</Link>
              </Checkbox>
              <Checkbox>
                <Link>Top Deals</Link>
              </Checkbox>
              <Checkbox>
                <Link>On Clearance</Link>
              </Checkbox>
              <Checkbox>
                <Link>Best Buy Exclusive</Link>
              </Checkbox>
              <Checkbox>
                <Link>Refurbished</Link>
              </Checkbox>
              <Checkbox>
                <Link>Open Box</Link>
              </Checkbox>
              <Checkbox>
                <Link>Online Only</Link>
              </Checkbox>
            </Stack>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Text fontSize={"16px"} fontWeight={"600"}>
                  Price
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Stack spacing={"14px"} fontSize={"15px"}>
              <Checkbox colorScheme="blue" defaultChecked>
                <Link>On Sale</Link>
              </Checkbox>
              <Checkbox>
                <Link>Top Deals</Link>
              </Checkbox>
              <Checkbox>
                <Link>On Clearance</Link>
              </Checkbox>
              <Checkbox>
                <Link>Best Buy Exclusive</Link>
              </Checkbox>
              <Checkbox>
                <Link>Refurbished</Link>
              </Checkbox>
              <Checkbox>
                <Link>Open Box</Link>
              </Checkbox>
              <Checkbox>
                <Link>Online Only</Link>
              </Checkbox>
            </Stack>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Text fontSize={"16px"} fontWeight={"600"}>
                  Status
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Stack spacing={"14px"} fontSize={"15px"}>
              <Checkbox colorScheme="blue" defaultChecked>
                <Link>On Sale</Link>
              </Checkbox>
              <Checkbox>
                <Link>Top Deals</Link>
              </Checkbox>
              <Checkbox>
                <Link>On Clearance</Link>
              </Checkbox>
              <Checkbox>
                <Link>Best Buy Exclusive</Link>
              </Checkbox>
              <Checkbox>
                <Link>Refurbished</Link>
              </Checkbox>
              <Checkbox>
                <Link>Open Box</Link>
              </Checkbox>
              <Checkbox>
                <Link>Online Only</Link>
              </Checkbox>
            </Stack>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Text fontSize={"16px"} fontWeight={"600"}>
                  Brands
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Stack spacing={"14px"} fontSize={"15px"}>
              <Checkbox colorScheme="blue" defaultChecked>
                <Link>On Sale</Link>
              </Checkbox>
              <Checkbox>
                <Link>Top Deals</Link>
              </Checkbox>
              <Checkbox>
                <Link>On Clearance</Link>
              </Checkbox>
              <Checkbox>
                <Link>Best Buy Exclusive</Link>
              </Checkbox>
              <Checkbox>
                <Link>Refurbished</Link>
              </Checkbox>
              <Checkbox>
                <Link>Open Box</Link>
              </Checkbox>
              <Checkbox>
                <Link>Online Only</Link>
              </Checkbox>
            </Stack>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Text fontSize={"16px"} fontWeight={"600"}>
                  Discount
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Stack spacing={"14px"} fontSize={"15px"}>
              <Checkbox colorScheme="blue" defaultChecked>
                <Link>On Sale</Link>
              </Checkbox>
              <Checkbox>
                <Link>Top Deals</Link>
              </Checkbox>
              <Checkbox>
                <Link>On Clearance</Link>
              </Checkbox>
              <Checkbox>
                <Link>Best Buy Exclusive</Link>
              </Checkbox>
              <Checkbox>
                <Link>Refurbished</Link>
              </Checkbox>
              <Checkbox>
                <Link>Open Box</Link>
              </Checkbox>
              <Checkbox>
                <Link>Online Only</Link>
              </Checkbox>
            </Stack>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Text fontSize={"16px"} fontWeight={"600"}>
                  Product Condition
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Stack spacing={"14px"} fontSize={"15px"}>
              <Checkbox colorScheme="blue" defaultChecked>
                <Link>On Sale</Link>
              </Checkbox>
              <Checkbox>
                <Link>Top Deals</Link>
              </Checkbox>
              <Checkbox>
                <Link>On Clearance</Link>
              </Checkbox>
              <Checkbox>
                <Link>Best Buy Exclusive</Link>
              </Checkbox>
              <Checkbox>
                <Link>Refurbished</Link>
              </Checkbox>
              <Checkbox>
                <Link>Open Box</Link>
              </Checkbox>
              <Checkbox>
                <Link>Online Only</Link>
              </Checkbox>
            </Stack>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Text fontSize={"16px"} fontWeight={"600"}>
                  Sellers
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Stack spacing={"14px"} fontSize={"15px"}>
              <Checkbox colorScheme="blue" defaultChecked>
                <Link>On Sale</Link>
              </Checkbox>
              <Checkbox>
                <Link>Top Deals</Link>
              </Checkbox>
              <Checkbox>
                <Link>On Clearance</Link>
              </Checkbox>
              <Checkbox>
                <Link>Best Buy Exclusive</Link>
              </Checkbox>
              <Checkbox>
                <Link>Refurbished</Link>
              </Checkbox>
              <Checkbox>
                <Link>Open Box</Link>
              </Checkbox>
              <Checkbox>
                <Link>Online Only</Link>
              </Checkbox>
            </Stack>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Text fontSize={"16px"} fontWeight={"600"}>
                  Customer Rating
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Stack spacing={"14px"} fontSize={"15px"}>
              <Checkbox colorScheme="blue" defaultChecked>
                <Link>On Sale</Link>
              </Checkbox>
              <Checkbox>
                <Link>Top Deals</Link>
              </Checkbox>
              <Checkbox>
                <Link>On Clearance</Link>
              </Checkbox>
              <Checkbox>
                <Link>Best Buy Exclusive</Link>
              </Checkbox>
              <Checkbox>
                <Link>Refurbished</Link>
              </Checkbox>
              <Checkbox>
                <Link>Open Box</Link>
              </Checkbox>
              <Checkbox>
                <Link>Online Only</Link>
              </Checkbox>
            </Stack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ComputersTabletsLeft;
