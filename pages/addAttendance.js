import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { EditIcon } from "@chakra-ui/icons";
import { HashLoader } from "react-spinners";
import UseAddAttendance from "@/src/customHook/UseAddAttendance";

export default function addAttendance() {
  const {
    addDetailsHandler,
    attendanceStatusError,
    attendanceStatus,
    setAttendanceStatus,
    courseID,
    courseIDError,
    date,
    dateError,
    flag,
    isLoading,
    studentID,
    studentIDError,
    updateDetailsHandler,
    validateCourseID,
    validateDate,
    validateStudentID,
  } = UseAddAttendance();

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
        Add Attendance
      </Text>
      <FormControl isRequired mb={4} isInvalid={studentIDError}>
        <FormLabel>Student ID</FormLabel>
        <Input
          placeholder="Student ID"
          value={studentID}
          onChange={validateStudentID}
        />
      </FormControl>
      <FormControl isRequired mb={4} isInvalid={courseIDError}>
        <FormLabel>Course ID</FormLabel>
        <Input
          placeholder="Course ID"
          value={courseID}
          onChange={validateCourseID}
        />
      </FormControl>
      <FormControl isRequired mb={4} isInvalid={dateError}>
        <FormLabel>Date</FormLabel>
        <Input
          placeholder="Date"
          value={date}
          onChange={validateDate}
          type="date"
        />
      </FormControl>
      <FormControl mb={6} isInvalid={attendanceStatusError}>
        <FormLabel>Attendance Status</FormLabel>
        <Select
          onChange={(e) => setAttendanceStatus(e.target.value)}
          value={attendanceStatus}
        >
          <option value={"Present"}>Present</option>
          <option value={"Absent"}>Absent</option>
          <option value={"Leave"}>Leave</option>
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
