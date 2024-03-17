import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  showroom: Yup.string().required().label("Showroom"),
  date: Yup.date().typeError("Date must be a date").required().label("Date"),
  field: Yup.string().required().label("Field Name"),
  spend_by: Yup.string().label("Spend By"),
  amount: Yup.number()
    .typeError("Amount must be a number")
    .required()
    .label("Amount"),
  quantity: Yup.number()
    .typeError("Quantity must be a number")
    .required()
    .label("Quantity"),
  description: Yup.string().label("Description"),
});

export default validationSchema;
