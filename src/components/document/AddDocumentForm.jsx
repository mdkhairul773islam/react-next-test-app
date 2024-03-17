"use client";

// Import Dependencies
import { useForm } from "react-hook-form";
import validationSchema from "./validationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "@hookform/error-message";

const AddDocumentForm = () => {
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
          <label htmlhtmlFor="name" className="inputLabel required">
            Name
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
      </div>

      <div>
        <label
          htmlhtmlFor="image"
          className="inputLabel !relative top-auto required"
        >
          Image/File
        </label>
        <input
          type="file"
          id="image"
          className="inputField"
          {...register("image")}
        />
        <ErrorMessage
          errors={errors}
          name={"image"}
          render={(m) => <p className="text-red-500 text-sm">{m.message}</p>}
        />
      </div>

      <div className="inputGroup">
        <label htmlhtmlFor="address" className="inputLabel">
          Address
        </label>
        <textarea
          id="address"
          className="inputField"
          {...register("address")}
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

export default AddDocumentForm;
