export default function RegvalidateInfo(values) {
  let errors = {};

  if (!values.name.trim()) {
    errors.name = "Trainne's name required";
  }

  if (!values.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  if (values.gender === "0") {
    errors.gender = "Gender required";
  }

  if (values.bloodgroup === "0") {
    errors.bloodgroup = "Gender required";
  }

  if (!values.city) {
    errors.city = "City required";
  } else if (!/^[A-Za-z]+/.test(values.city.trim())) {
    errors.city = "Enter a valid city name";
  }

  if (!values.address) {
    errors.address = "Address required";
  } else if (!/^[A-Za-z]+/.test(values.address.trim())) {
    errors.address = "Enter a valid address";
  }

  if (!values.telephone) {
    errors.telephone = "Mobile no required";
  }

  return errors;
}
