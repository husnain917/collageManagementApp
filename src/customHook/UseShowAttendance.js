import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAttendanceDetail,
  showAttendanceDetails,
} from "../redux/actions/Actions";

export default function UseShowAttendance() {
  const dispatch = useDispatch();

  // states
  const [isLoading, setIsLoading] = useState(false);

  const storeData = useSelector(
    (store) => store?.Reducers?.isAllAttendanceDetails
  );
  // console.log(storeData,"storeData");

  // show details handler
  useEffect(() => {
    dispatch(showAttendanceDetails(setIsLoading));
  }, []);

  // delete details handler
  const deleteDetailsHandler = (detailID) => {
    dispatch(deleteAttendanceDetail(detailID, setIsLoading));
  };

  return {
    isLoading,
    storeData,
    deleteDetailsHandler,
  };
}
