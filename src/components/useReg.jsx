import { useState, useEffect } from "react";
import db from "./firebase";
import firebase from "firebase";
const useReg = (callback, validate) => {
  const [values, setValues] = useState({
    name: "",
    date: "",
    gender: "",
    bloodgroup: "",
    address: "",
    email: "",
    city: "",
    telephone: "",
    doctor: "",
    clinic: "",
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
    e.preventDefault();

    setErrors(validate(values));
    console.log(values);

    if (Object.keys(errors).length === 0 && isSubmitting) {
      db.collection("Registration").add({
        name: values.name,
        email: values.email,
        city: values.city,
        clinic: values.clinic,
        date: values.date,
        doctor: values.doctor,
        gender: values.gender,
        telephone: values.telephone,
        bloodgroup: values.bloodgroup,
        address: values.address,

        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return { handleChange, handleSubmit, values, errors };
};

export default useReg;
