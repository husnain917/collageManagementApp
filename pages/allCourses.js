import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Text,
  Container,
  IconButton,
} from "@chakra-ui/react";
import { HashLoader } from "react-spinners";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import Link from "next/link";
import UseShowCourses from "../src/customHook/UseShowCourses";

export default function showCourses() {
  const { storeData, isLoading, deleteDetailsHandler } = UseShowCourses();

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
    <>
      <Text
        fontSize="lg"
        color="blackAlpha.900"
        fontWeight={"bold"}
        textAlign={"center"}
      >
        All Courses
      </Text>
      <TableContainer boxShadow="lg" rounded="md" bg="white" mt={5}>
        <Table variant="simple">
          <TableCaption>All right reserved &copy; 2023.</TableCaption>
          <Thead>
            <Tr>
              <Th>Course id</Th>
              <Th>Course name</Th>
              <Th>Course Code</Th>
              <Th>Description</Th>
              <Th>Delete</Th>
              <Th>Update</Th>
            </Tr>
          </Thead>
          <Tbody>
            {storeData?.map((item, index) => (
              <Tr key={index}>
                <Td>{item?._id}</Td>
                <Td>{item?.courseName}</Td>
                <Td>{item?.courseCode}</Td>
                <Td>{item?.description}</Td>
                <Td>
                  <IconButton
                    size="lg"
                    variant="solid"
                    aria-label="open menu"
                    icon={<DeleteIcon color={"red.600"} />}
                    onClick={() => deleteDetailsHandler(item?._id)}
                  />
                </Td>
                <Td>
                  <Link
                    href={{
                      pathname: "/addCourses",
                      query: { courseData: JSON?.stringify(item) },
                    }}
                  >
                    <IconButton
                      size="lg"
                      variant="solid"
                      aria-label="open menu"
                      icon={<EditIcon color={"blue.600"} />}
                    />
                  </Link>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}
