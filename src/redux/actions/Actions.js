import {
  ADD_DETAILS,
  SHOW_DETAILS,
  DELETE_DETAILS,
  UPDATE_DETAILS,
} from "../types/ActionsTypes";
import {
  addDoc,
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../../config/FirebaseConfig";
import { toast } from "react-toastify";

// add details action
export const addDetailes = (data, setIsLoading) => async (dispatch) => {
  try {
    setIsLoading(true);
    let response = await addDoc(collection(db, "userDetails"), data);
    // if response are successfully then data save in redux
    if (response?.id) {
      dispatch({
        type: ADD_DETAILS,
        payload: { _id: response?.id, ...data },
      });
      toast("Details added successfully!");
    }
  } catch (error) {
    console.log(error, "error in response add details");
  } finally {
    setIsLoading(false);
  }
};

// show details action
export const showDetails = (setIsLoading) => async (dispatch) => {
  try {
    setIsLoading(true);
    const response = await getDocs(collection(db, "userDetails"));
    const fetchedData = response?.docs?.map((doc) => ({
      _id: doc?.id,
      ...doc?.data(),
    }));
    // if response are successfully then data save in redux
    if (fetchedData) {
      dispatch({
        type: SHOW_DETAILS,
        payload: fetchedData,
      });
    }
  } catch (error) {
    console.log(error, "error in response show details");
  } finally {
    setIsLoading(false);
  }
};

// delete detail action
export const deleteDetail = (data, setIsLoading) => async (dispatch) => {
  try {
    setIsLoading(true);
    await deleteDoc(doc(db, "userDetails", data));
    dispatch({
      type: DELETE_DETAILS,
      payload: data,
    });
    toast("Details delete successfully!");
  } catch (error) {
    console.log(error, "error in response delete details");
  } finally {
    setIsLoading(false);
  }
};

// update details handler
export const updateDetails = (data, setIsLoading) => async (dispatch) => {
  try {
    setIsLoading(true);
    await updateDoc(doc(db, "userDetails", data?._id), data);
    dispatch({
      type: UPDATE_DETAILS,
      payload: data,
    });
    toast("Details update successfully!");
  } catch (error) {
    console.log(error, "error in response update details");
  } finally {
    setIsLoading(false);
  }
};
