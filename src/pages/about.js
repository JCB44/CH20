import React from "react";
import { Box, Text, Button, Container, chakra, Flex, SimpleGrid, Image, Icon } from "@chakra-ui/react";
import { aboutIMG } from "../assets/data/data.js"

function About() {
  return (
    <Box  ml={60} mr={60} mt={8}>
    <Text fontFamily='Sans-serif' fontSize='26px' letterSpacing='wide'>
About me
    </Text>
<Image h="120px" w="120px" fit="scale-down" src={aboutIMG.image} alt="picture of Joshua Butts"  borderRadius='full' border='2px'/>

<Text pt={6}>
  There are many benefits to a joint design and development system. Not only
  does it bring benefits to the design team, but it also brings benefits to
  engineering teams. It makes sure that our experiences have a consistent look
  and feel, not just in our design specs, but in production There are many benefits to a joint design and development system. Not only
  does it bring benefits to the design team, but it also brings benefits to
  engineering teams. It makes sure that our experiences have a consistent look
  and feel, not just in our design specs, but in production
  </Text>
    </Box>
  );
}

export default About;