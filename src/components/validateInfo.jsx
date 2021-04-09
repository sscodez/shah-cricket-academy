export default function validateInfo(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = "Username required";
  }
  // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
  //   errors.name = 'Enter a valid name';
  // }

  if (!values.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.message) {
    errors.message = "Message is required";
  } else if (values.message.length > 360) {
    errors.password = "Your message is too long";
  }

  return errors;
}
