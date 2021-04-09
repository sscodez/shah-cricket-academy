import { useState, useEffect } from "react";
import db from "./firebase";
import firebase from "firebase";
const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    db.collection("Messages").add({
      username: values.username,
      email: values.email,
      message: values.message,

      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    e.preventDefault();

    setErrors(validate(values));
    console.log(values);

    console.log(values.name, values.email);

    //all the logic to send the meassage
    // setMessages([...messages,{username:username,message:input}]);

    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
