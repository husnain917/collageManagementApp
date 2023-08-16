import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import UseAddDetails from "../src/customHook/UseAddDetails";
import { EditIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
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
    password,
    passwordError,
    validatePassword,
    accountType,
    setAccountType,
    addDetailsHandler,
    isLoading,
    flag,
    updateDetailsHandler,
  } = UseAddDetails();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

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
        Add Details
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
      <FormControl isRequired mb={4} isInvalid={passwordError}>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            pr="4rem"
            type={show ? "text" : "password"}
            placeholder="Enter password"
            isInvalid={passwordError}
            value={password}
            onChange={validatePassword}
          />
          <InputRightElement height={"2.5rem"} mr={"4px"}>
            <Button size="sm" onClick={handleClick}>
              {show ? <ViewIcon /> : <ViewOffIcon />}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl mb={6}>
        <FormLabel>Account Type</FormLabel>
        <Select
          onChange={(e) => setAccountType(e.target.value)}
          value={accountType}
        >
          <option value={"User"}>User</option>
          <option value={"Employ"}>Employ</option>
        </Select>
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
