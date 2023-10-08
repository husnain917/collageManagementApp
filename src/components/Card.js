import React from "react";
import { Box, Text, Stack, useColorModeValue } from "@chakra-ui/react";

export default function Card({ heading, count }) {
  return (
    <Box
      W={"30%"}
      w={"full"}
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"2xl"}
      rounded={"md"}
      overflow={"hidden"}
      marginLeft={10}
      marginRight={10}
    >
      <Stack
        textAlign={"center"}
        p={6}
        color={useColorModeValue("gray.800", "white")}
        align={"center"}
      >
        <Text
          fontSize={"sm"}
          fontWeight={500}
          bg={useColorModeValue("green.50", "green.900")}
          p={2}
          px={3}
          color={"green.500"}
          rounded={"full"}
        >
          {heading}
        </Text>
        <Stack direction={"row"} align={"center"} justify={"center"}>
          <Text fontSize={"6xl"} fontWeight={800}>
            {count}
          </Text>
        </Stack>
      </Stack>
    </Box>
  );
}
