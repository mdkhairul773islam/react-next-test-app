import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  code: Yup.number()
    .typeError("Transaction Code must be a number")
    .required()
    .label("Transaction Code"),
  date: Yup.date().typeError("Date must be a date").required().label("Date"),
  showroom: Yup.string().required().label("Showroom"),
  name: Yup.string().required().label("Transaction Name"),
  contact_person: Yup.string().label("Contact Person"),
  balance: Yup.number()
    .typeError("Initial Balance must be a number")
    .required()
    .label("Initial Balance"),
  mobile: Yup.number()
    .typeError("Mobile Number must be a number")
    .required()
    .label("Mobile Number"),
  balance_type: Yup.string()
    .oneOf(["payable", "receivable"], "Invalid Balance Type")
    .required()
    .label("Balance Type"),
  address: Yup.string().label("Address Name"),
});

export default validationSchema;
