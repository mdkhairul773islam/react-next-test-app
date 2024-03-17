import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().label("Please feel the email address."),
  password: Yup.string().required().label("Please feel the password."),
});

export default validationSchema;
