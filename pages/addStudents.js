import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import UseAddDetails from "../src/customHook/UseAddDetails";
import { EditIcon } from "@chakra-ui/icons";
import { HashLoader } from "react-spinners";

export default function addDetails() {
  const {
    firstName,
    validateFirstName,
    firstNameError,
    lastName,
    lastNameError,
    validateLastName,
    email,
    emailError,
    validateEmail,
    addDetailsHandler,
    isLoading,
    flag,
    updateDetailsHandler,
    phoneNum,
    phoneNumError,
    validatePhoneNumber,
  } = UseAddDetails();

  if (isLoading) {
    return (
      <Container
        height={"75vh"}
        width={"100%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <HashLoader color="#3182ce" />
      </Container>
    );
  }

  return (
    <Container boxShadow="lg" p="6" rounded="md" bg="white" mt={5}>
      <Text
        fontSize="lg"
        color="blackAlpha.900"
        fontWeight={"bold"}
        textAlign={"center"}
      >
        Add Student
      </Text>
      <FormControl isRequired mb={4} isInvalid={firstNameError}>
        <FormLabel>First name</FormLabel>
        <Input
          placeholder="First name"
          value={firstName}
          onChange={validateFirstName}
        />
      </FormControl>
      <FormControl isRequired mb={4} isInvalid={lastNameError}>
        <FormLabel>Last name</FormLabel>
        <Input
          placeholder="Last name"
          value={lastName}
          onChange={validateLastName}
        />
      </FormControl>
      <FormControl isRequired mb={4} isInvalid={emailError}>
        <FormLabel>Email</FormLabel>
        <Input placeholder="Email" value={email} onChange={validateEmail} />
      </FormControl>
      <FormControl isRequired mb={4} isInvalid={phoneNumError}>
        <FormLabel>Phone number</FormLabel>
        <Input
          placeholder="Phone number"
          value={phoneNum}
          onChange={validatePhoneNumber}
        />
      </FormControl>
      {flag ? (
        <Button colorScheme="blue" onClick={updateDetailsHandler}>
          Update
          <EditIcon style={{ marginLeft: "10px" }} />
        </Button>
      ) : (
        <Button colorScheme="blue" onClick={addDetailsHandler}>
          Add
          <AiOutlinePlus style={{ marginLeft: "10px" }} />
        </Button>
      )}
    </Container>
  );
}
