"use client";
// Import Dependencies
import { useForm } from "react-hook-form";
import validationSchema from "./validationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "@hookform/error-message";

const AddAssetForm = () => {
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
      <div className="grid grid-cols-2 gap-5">
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
          <label htmlhtmlFor="field" className="inputLabel required">
            Field Of Fixed Assets
          </label>
          <select
            type="text"
            id="field"
            className="inputField"
            {...register("field")}
          >
            <option value="">Select Field</option>
            {[
              "Field one",
              "Field two",
              "Field three",
              "Field four",
              "Field five",
              "Field six",
              "Field seven",
            ].map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
          <ErrorMessage
            errors={errors}
            name={"field"}
            render={(m) => <p className="text-red-500 text-sm">{m.message}</p>}
          />
        </div>

        <div className="inputGroup">
          <label htmlhtmlFor="amount" className="inputLabel required">
            Amount
          </label>
          <input
            type="number"
            id="amount"
            className="inputField"
            {...register("amount", { valueAsNumber: true })}
          />
          <ErrorMessage
            errors={errors}
            name={"amount"}
            render={(m) => <p className="text-red-500 text-sm">{m.message}</p>}
          />
        </div>

        <div className="inputGroup">
          <label htmlhtmlFor="quantity" className="inputLabel required">
            Quantity
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
          <label htmlhtmlFor="spend_by" className="inputLabel ">
            Spend By
          </label>
          <input
            type="text"
            id="spend_by"
            className="inputField"
            {...register("spend_by")}
          />
        </div>
      </div>

      <div className="inputGroup">
        <label htmlhtmlFor="description" className="inputLabel">
          Description
        </label>
        <textarea
          type="text"
          id="description"
          className="inputField"
          {...register("description")}
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

export default AddAssetForm;
