import Card from "@/src/components/Card";
import UseHomeHook from "@/src/customHook/UseHomeHook";
import { Container } from "@chakra-ui/react";
import React from "react";
import { HashLoader } from "react-spinners";

export default function index() {
  const { attendanceData, coursesData, isLoading, storeData } = UseHomeHook();
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
    <Container
      py={6}
      key={index}
      display={"flex"}
      flexDirection={"row"}
      maxW={"100%"}
    >
      <Card
        heading={"Students"}
        count={storeData?.length > 0 ? storeData?.length : 0}
      />
      <Card
        heading={"Courses"}
        count={coursesData?.length > 0 ? coursesData?.length : 0}
      />
      <Card
        heading={"Attendance"}
        count={attendanceData?.length > 0 ? attendanceData?.length : 0}
      />
    </Container>
  );
}
