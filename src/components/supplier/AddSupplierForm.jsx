"use client";

// Import Dependencies
import { useForm } from "react-hook-form";
import validationSchema from "./validationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "@hookform/error-message";

const AddSupplierForm = () => {
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
      <div className="grid md:grid-cols-2 gap-5">
        <div className="inputGroup">
          <label htmlhtmlFor="code" className="inputLabel required">
            Code
          </label>
          <input
            type="number"
            id="code"
            className="inputField"
            {...register("code", { valueAsNumber: true })}
          />
          <ErrorMessage
            errors={errors}
            name={"code"}
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

      <div className="grid md:grid-cols-2 gap-5">
        <div className="inputGroup">
          <label htmlhtmlFor="name" className="inputLabel required">
            Supplier Name
          </label>
          <input
            type="text"
            id="name"
            className="inputField"
            {...register("name")}
          />
          <ErrorMessage
            errors={errors}
            name={"name"}
            render={(m) => <p className="text-red-500 text-sm">{m.message}</p>}
          />
        </div>

        <div className="inputGroup">
          <label htmlhtmlFor="contact_person" className="inputLabel">
            Contact Person
          </label>
          <input
            type="text"
            id="contact_person"
            className="inputField"
            {...register("contact_person")}
          />
        </div>

        <div className="inputGroup">
          <label htmlhtmlFor="mobile" className="inputLabel required">
            Mobile
          </label>
          <input
            type="number"
            id="mobile"
            className="inputField"
            {...register("mobile", { valueAsNumber: true })}
          />
          <ErrorMessage
            errors={errors}
            name={"mobile"}
            render={(m) => <p className="text-red-500 text-sm">{m.message}</p>}
          />
        </div>

        <div className="inputGroup">
          <label htmlhtmlFor="balance" className="inputLabel required">
            Initial Balance (TK)
          </label>
          <input
            type="number"
            id="balance"
            className="inputField"
            {...register("balance", { valueAsNumber: true })}
          />
          <ErrorMessage
            errors={errors}
            name={"balance"}
            render={(m) => <p className="text-red-500 text-sm">{m.message}</p>}
          />
        </div>
      </div>

      <div className="inputGroup">
        <label htmlhtmlFor="address" className="inputLabel">
          Address
        </label>
        <textarea
          type="text"
          id="address"
          className="inputField"
          {...register("address")}
        ></textarea>
      </div>

      <div className="inputGroup required">
        <div className="flex items-center gap-5">
          <div>
            <input
              type="radio"
              value="payable"
              id="payable"
              {...register("balance_type")}
              name="balance_type"
              className="radioInput"
            />
            <label htmlhtmlFor="payable" className="radioLabel">
              Payable
            </label>
          </div>

          <div>
            <input
              type="radio"
              id="receivable"
              value="receivable"
              {...register("balance_type")}
              name="balance_type"
              className="radioInput"
            />
            <label htmlhtmlFor="receivable" className="radioLabel">
              Receivable
            </label>
          </div>
        </div>
        <ErrorMessage
          errors={errors}
          name={"balance_type"}
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

export default AddSupplierForm;
