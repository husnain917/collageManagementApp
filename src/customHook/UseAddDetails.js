import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addDetailes, updateDetails } from "../redux/actions/Actions";
import { useRouter } from "next/router";

export default function UseAddDetails() {
  const dispatch = useDispatch();

  // routes data
  const router = useRouter();
  const userData = router?.query?.userData;

  // parse data
  useEffect(() => {
    if (router?.query?.userData) {
      let paramsData = JSON?.parse(userData);
      updateFieldsHandler(paramsData);
    }
  }, []);

  // states
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [accountType, setAccountType] = useState("User");
  const [isLoading, setIsLoading] = useState(false);
  const [updateId, setUpdateId] = useState("");
  const [flag, setFlag] = useState(false);

  // validate first name
  const validateFirstName = (e) => {
    setFirstName(e.target.value);
    if (e.target.value.length === "") {
      setFirstNameError(true);
    } else {
      let checkFirstName = String(e.target.value)
        .toLowerCase()
        .match(/[a-zA-Z\-]+$/);
      if (!checkFirstName) {
        setFirstNameError(true);
      } else if (e.target.value.length < 2) {
        setFirstNameError(true);
      } else {
        setFirstNameError(false);
      }
    }
  };

  // validate last name
  const validateLastName = (e) => {
    setLastName(e.target.value);
    if (e.target.value.length === "") {
      setLastNameError(true);
    } else {
      let checkFirstName = String(e.target.value)
        .toLowerCase()
        .match(/[a-zA-Z\-]+$/);
      if (!checkFirstName) {
        setLastNameError(true);
      } else if (e.target.value.length < 2) {
        setLastNameError(true);
      } else {
        setLastNameError(false);
      }
    }
  };

  //   validate email
  const validateEmail = (e) => {
    setEmail(e.target.value);
    if (e.target.value === "") {
      setEmailError(true);
    } else {
      let checkEmail = String(e.target.value).match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
      if (!checkEmail) {
        setEmailError(true);
      } else {
        setEmailError(false);
      }
    }
  };

  //   validate password
  const validatePassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value === "") {
      setPasswordError(true);
    } else {
      let checkPassword = String(e.target.value).match(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
      );
      if (!checkPassword) {
        setPasswordError(true);
      } else if (e.target.value.length < 8) {
        setPasswordError(true);
      } else {
        setPasswordError(false);
      }
    }
  };

  // add details handler
  const addDetailsHandler = () => {
    if (!firstName && !lastName && !email && !password) {
      setFirstNameError(true);
      setLastNameError(true);
      setEmailError(true);
      setPasswordError(true);
      return;
    } else if (!firstName) {
      setFirstNameError(true);
      return;
    } else if (!lastName) {
      setLastNameError(true);
      return;
    } else if (!email) {
      setEmailError(true);
      return;
    } else if (!password) {
      setPasswordError(true);
      return;
    } else {
      if (
        firstName &&
        lastName &&
        email &&
        password &&
        !firstNameError &&
        !lastNameError &&
        !emailError &&
        !passwordError
      ) {
        let detailsData = {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
          accountType: accountType,
        };
        dispatch(addDetailes(detailsData, setIsLoading));
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
      }
    }
  };

  // update fields handler
  const updateFieldsHandler = (paramsData) => {
    setFirstName(paramsData?.firstName);
    setLastName(paramsData?.lastName);
    setEmail(paramsData?.email);
    setPassword(paramsData?.password);
    setAccountType(paramsData?.accountType);
    setUpdateId(paramsData?._id);
    setFlag(true);
  };

  // update details handler
  const updateDetailsHandler = () => {
    if (!firstName && !lastName && !email && !password) {
      setFirstNameError(true);
      setLastNameError(true);
      setEmailError(true);
      setPasswordError(true);
      return;
    } else if (!firstName) {
      setFirstNameError(true);
      return;
    } else if (!lastName) {
      setLastNameError(true);
      return;
    } else if (!email) {
      setEmailError(true);
      return;
    } else if (!password) {
      setPasswordError(true);
      return;
    } else {
      if (
        firstName &&
        lastName &&
        email &&
        password &&
        !firstNameError &&
        !lastNameError &&
        !emailError &&
        !passwordError
      ) {
        let detailsData = {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
          accountType: accountType,
          _id: updateId,
        };
        dispatch(updateDetails(detailsData, setIsLoading));
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setFlag(false);
      }
    }
  };
  return {
    firstName,
    validateFirstName,
    firstNameError,
    lastName,
    validateLastName,
    lastNameError,
    email,
    validateEmail,
    emailError,
    password,
    validatePassword,
    passwordError,
    accountType,
    setAccountType,
    addDetailsHandler,
    isLoading,
    flag,
    updateDetailsHandler,
  };
}
