import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  addAttendanceDetailes,
  updateAttendanceDetails,
} from "../redux/actions/Actions";
import { useRouter } from "next/router";

export default function UseAddAttendance() {
  const dispatch = useDispatch();

  // routes data
  const router = useRouter();
  const attendanceData = router?.query?.attendanceData;

  // parse data
  useEffect(() => {
    if (router?.query?.attendanceData) {
      let paramsData = JSON?.parse(attendanceData);
      updateFieldsHandler(paramsData);
    }
  }, []);

  // states
  const [studentID, setStudentID] = useState("");
  const [studentIDError, setStudentIDError] = useState(false);
  const [courseID, setCourseID] = useState("");
  const [courseIDError, setCourseIDError] = useState(false);
  const [date, setDate] = useState("");
  const [dateError, setDateError] = useState(false);
  const [attendanceStatus, setAttendanceStatus] = useState("Present");
  const [attendanceStatusError, setAttendanceStatusError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [updateId, setUpdateId] = useState("");
  const [flag, setFlag] = useState(false);

  // validateStudentID
  const validateStudentID = (e) => {
    setStudentID(e.target.value);
    if (e.target.value === "") {
      setStudentIDError(true);
    } else {
      setStudentIDError(false);
    }
  };

  // validateCourseID
  const validateCourseID = (e) => {
    setCourseID(e.target.value);
    if (e.target.value === "") {
      setCourseIDError(true);
    } else {
      setCourseIDError(false);
    }
  };

  //  validateDescription
  const validateDate = (e) => {
    setDate(e.target.value);
    if (e.target.value === "") {
      setDateError(true);
    } else {
      setDateError(false);
    }
  };

  // add details handler
  const addDetailsHandler = () => {
    if (!studentID && !courseID && !date && !attendanceStatus) {
      setStudentIDError(true);
      setCourseIDError(true);
      setDateError(true);
      setAttendanceStatusError(true);
      return;
    } else if (!studentID) {
      setStudentIDError(true);
      return;
    } else if (!courseID) {
      setCourseIDError(true);
      return;
    } else if (!date) {
      setDateError(true);
      return;
    } else if (!attendanceStatus) {
      setAttendanceStatusError(true);
      return;
    } else {
      if (
        studentID &&
        courseID &&
        date &&
        attendanceStatus &&
        !studentIDError &&
        !courseIDError &&
        !dateError &&
        !attendanceStatusError
      ) {
        let detailsData = {
          studentID: studentID,
          courseID: courseID,
          date: date,
          attendanceStatus: attendanceStatus,
        };
        dispatch(addAttendanceDetailes(detailsData, setIsLoading));
        setStudentID("");
        setCourseID("");
        setDate("");
        setAttendanceStatus("");
      }
    }
  };

  // update fields handler
  const updateFieldsHandler = (paramsData) => {
    setStudentID(paramsData?.studentID);
    setCourseID(paramsData?.courseID);
    setDate(paramsData?.date);
    setAttendanceStatus(paramsData?.attendanceStatus);
    setUpdateId(paramsData?._id);
    setFlag(true);
  };

  // update details handler
  const updateDetailsHandler = () => {
    if (!studentID && !courseID && !date && !attendanceStatus) {
      setStudentIDError(true);
      setCourseIDError(true);
      setDateError(true);
      setAttendanceStatusError(true);
      return;
    } else if (!studentID) {
      setStudentIDError(true);
      return;
    } else if (!courseID) {
      setCourseIDError(true);
      return;
    } else if (!date) {
      setDateError(true);
      return;
    } else if (!attendanceStatus) {
      setAttendanceStatusError(true);
      return;
    } else {
      if (
        studentID &&
        courseID &&
        date &&
        attendanceStatus &&
        !studentIDError &&
        !courseIDError &&
        !dateError &&
        !attendanceStatusError
      ) {
        let detailsData = {
          studentID: studentID,
          courseID: courseID,
          date: date,
          attendanceStatus: attendanceStatus,
          _id: updateId,
        };
        dispatch(updateAttendanceDetails(detailsData, setIsLoading));
        setStudentID("");
        setCourseID("");
        setDate("");
        setAttendanceStatus("");
        setFlag(false);
      }
    }
  };
  return {
    studentID,
    validateStudentID,
    courseID,
    validateCourseID,
    date,
    validateDate,
    addDetailsHandler,
    isLoading,
    flag,
    updateDetailsHandler,
    studentIDError,
    courseIDError,
    dateError,
    attendanceStatus,
    attendanceStatusError,
    setAttendanceStatus,
  };
}
