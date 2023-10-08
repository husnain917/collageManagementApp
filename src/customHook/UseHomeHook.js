import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  showAttendanceDetails,
  showCourseDetails,
  showDetails,
} from "../redux/actions/Actions";

export default function UseHomeHook() {
  const dispatch = useDispatch();

  // states
  const [isLoading, setIsLoading] = useState(false);

  const attendanceData = useSelector(
    (store) => store?.Reducers?.isAllAttendanceDetails
  );
  // console.log(storeData,"storeData");

  const coursesData = useSelector(
    (store) => store?.Reducers?.isAllCoursesDetails
  );
  // console.log(storeData,"storeData");

  const storeData = useSelector((store) => store?.Reducers?.isAllDetails);
  // console.log(storeData,"storeData");

  // show details handler
  useEffect(() => {
    dispatch(showDetails(setIsLoading));
  }, []);

  // show details handler
  useEffect(() => {
    dispatch(showCourseDetails(setIsLoading));
  }, []);

  // show details handler
  useEffect(() => {
    dispatch(showAttendanceDetails(setIsLoading));
  }, []);

  return {
    isLoading,
    storeData,
    coursesData,
    attendanceData,
  };
}
