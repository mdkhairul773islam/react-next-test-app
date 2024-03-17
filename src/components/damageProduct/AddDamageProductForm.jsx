"use client";
// Import Dependencies
import { useForm } from "react-hook-form";
import validationSchema from "./validationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "@hookform/error-message";

const AddDamageProductForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const handleOnSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <form onSubmit={handleSubmit(handleOnSubmit)} className="inputForm">
      <div className="inputGroup">
        <label htmlhtmlFor="date" className="inputLabel required">
          Date
        </label>
        <input
          type="date"
          id="date"
          className="inputField"
          {...register("date", { valueAsDate: true })}
        />
        <ErrorMessage
          errors={errors}
          name={"date"}
          render={(m) => <p className="text-red-500 text-sm">{m.message}</p>}
        />
      </div>
      <div className="inputGroup">
        <label htmlhtmlFor="showroom" className="inputLabel required">
          Showroom
        </label>
        <select
          type="text"
          id="showroom"
          className="inputField"
          {...register("showroom")}
        >
          <option value="">Select Showroom</option>
          {[
            "Showroom one",
            "Showroom two",
            "Showroom three",
            "Showroom four",
            "Showroom five",
            "Showroom six",
            "Showroom seven",
          ].map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
        <ErrorMessage
          errors={errors}
          name={"showroom"}
          render={(m) => <p className="text-red-500 text-sm">{m.message}</p>}
        />
      </div>

      <div className="inputGroup">
        <label htmlhtmlFor="product_name" className="inputLabel required">
          Product Name
        </label>
        <select
          type="text"
          id="product_name"
          className="inputField"
          {...register("product_name")}
        >
          <option value="">Select Product</option>
          {[
            "product one",
            "product two",
            "product three",
            "product four",
            "product five",
            "product six",
            "product seven",
          ].map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
        <ErrorMessage
          errors={errors}
          name={"product_name"}
          render={(m) => <p className="text-red-500 text-sm">{m.message}</p>}
        />
      </div>

      <div className="inputGroup">
        <label htmlhtmlFor="stock" className="inputLabel required">
          Current Stock
        </label>
        <input
          type="number"
          id="stock"
          className="inputField"
          {...register("stock", { valueAsNumber: true })}
        />
        <ErrorMessage
          errors={errors}
          name={"stock"}
          render={(m) => <p className="text-red-500 text-sm">{m.message}</p>}
        />
      </div>

      <div className="inputGroup">
        <label htmlhtmlFor="quantity" className="inputLabel required">
          Damage Quantity
        </label>
        <input
          type="number"
          id="quantity"
          className="inputField"
          {...register("quantity", { valueAsNumber: true })}
        />
        <ErrorMessage
          errors={errors}
          name={"quantity"}
          render={(m) => <p className="text-red-500 text-sm">{m.message}</p>}
        />
      </div>

      <div className="inputGroup">
        <label htmlhtmlFor="remark" className="inputLabel">
          Remark
        </label>
        <textarea
          id="remark"
          className="inputField"
          {...register("remark")}
        ></textarea>
      </div>

      <div className="text-right">
        <button type="submit" className="inputBtn">
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddDamageProductForm;
