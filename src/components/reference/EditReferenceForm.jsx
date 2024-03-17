"use client";
import { useForm } from "react-hook-form";
import validationSchema from "./validationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "@hookform/error-message";

const EditReferenceForm = ({ setOpenModal }) => {
  const referenceInfo = {
    name: "John Doe ",
    mobile: "01700000000",
    address: "Sirajgong, Rajshahi",
    area: "Sirajgong, Rajshahi",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: referenceInfo,
  });

  const handleOnSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <form onSubmit={handleSubmit(handleOnSubmit)} className="inputForm">
      <div className="inputGroup">
        <label htmlhtmlFor="name" className="inputLabel required">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="inputField"
          {...register("name")}
          placeholder="Name"
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
          placeholder="Mobile"
        />
        <ErrorMessage
          errors={errors}
          name={"mobile"}
          render={(m) => <p className="text-red-500 text-sm">{m.message}</p>}
        />
      </div>

      <div className="inputGroup">
        <label htmlhtmlFor="address" className="inputLabel">
          Address
        </label>
        <input
          type="text"
          id="address"
          className="inputField"
          {...register("address")}
          placeholder="Address"
        />
      </div>

      <div className="inputGroup">
        <label htmlhtmlFor="area" className="inputLabel">
          Area
        </label>
        <input
          type="text"
          id="area"
          className="inputField"
          {...register("area")}
          placeholder="Area"
        />
      </div>

      <div className="flex items-center gap-2 justify-end">
        <div onClick={() => setOpenModal(false)} className="inputBtn cancel">
          Cancel
        </div>
        <button type="submit" className="inputBtn">
          Update
        </button>
      </div>
    </form>
  );
};

export default EditReferenceForm;
