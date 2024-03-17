"use client";
// Import Dependencies
import { useForm } from "react-hook-form";
import validationSchema from "./validationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "@hookform/error-message";

const AddIncomeForm = () => {
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
          {...register("date")}
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
        <input
          type="text"
          id="showroom"
          className="inputField"
          {...register("showroom")}
        />
        <ErrorMessage
          errors={errors}
          name={"showroom"}
          render={(m) => <p className="text-red-500 text-sm">{m.message}</p>}
        />
      </div>

      <div className="inputGroup">
        <label htmlhtmlFor="field_income" className="inputLabel required">
          Field of Income
        </label>
        <input
          type="text"
          id="field_income"
          className="inputField"
          {...register("field_income")}
        />
        <ErrorMessage
          errors={errors}
          name={"field_income"}
          render={(m) => <p className="text-red-500 text-sm">{m.message}</p>}
        />
      </div>

      <div className="inputGroup">
        <label htmlhtmlFor="description" className="inputLabel required">
          Description
        </label>
        <textarea
          type="text"
          id="description"
          className="inputField"
          {...register("description")}
        ></textarea>
        <ErrorMessage
          errors={errors}
          name={"description"}
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
        <label htmlhtmlFor="income_by" className="inputLabel required">
          Income By
        </label>
        <input
          type="text"
          id="income_by"
          className="inputField"
          {...register("income_by")}
        />
        <ErrorMessage
          errors={errors}
          name={"description"}
          render={(m) => <p className="text-red-500 text-sm">{m.message}</p>}
        />
      </div>

      <div className="text-right">
        <button type="submit" className="inputBtn">
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddIncomeForm;
