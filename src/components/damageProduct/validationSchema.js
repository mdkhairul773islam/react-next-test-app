import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  date: Yup.date().required().label("date"),
  showroom: Yup.string().required().label("showroom"),
  product_name: Yup.string().required().label("product_name"),
  stock: Yup.number()
    .typeError("Stock must be a number")
    .required()
    .label("stock"),
  quantity: Yup.number()
    .typeError("Quantity must be a number")
    .required()
    .label("quantity"),
  remark: Yup.string().label("remark"),
});

export default validationSchema;
