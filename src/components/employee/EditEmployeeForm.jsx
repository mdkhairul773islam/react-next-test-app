"use client";
// Import Dependencies
import * as Yup from "yup";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "@hookform/error-message";
import validationSchema from "./validationSchema";

const EditEmployeeForm = () => {
  const employeeInfo = {
    name: "Car Parts",
    code: "154541",
    model: "Yamaha",
    category: "category one",
    brand: "brand one",
    purchase_price: 534,
    sale_price: 34,
    unit: "Pcs",
    low_lavel: 23,
    status: "Not available",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: employeeInfo,
  });

  const handleOnSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <form onSubmit={handleSubmit(handleOnSubmit)} className="inputForm">
      <div className="grid grid-cols-2 gap-5">
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
          <label htmlhtmlFor="name" className="inputLabel required">
            Employee Name
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
          <label htmlhtmlFor="mobile" className="inputLabel">
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
          <label htmlhtmlFor="email" className="inputLabel">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="inputField"
            {...register("email")}
          />
          <ErrorMessage
            errors={errors}
            name={"email"}
            render={(m) => <p className="text-red-500 text-sm">{m.message}</p>}
          />
        </div>

        <div className="inputGroup">
          <label htmlhtmlFor="designation" className="inputLabel ">
            Designation
          </label>
          <input
            type="text"
            id="designation"
            className="inputField"
            {...register("designation")}
          />
        </div>

        <div className="inputGroup  col-span-2">
          <label htmlhtmlFor="present_address" className="inputLabel">
            Present Address
          </label>
          <textarea
            id="present_address"
            className="inputField"
            {...register("present_address")}
          ></textarea>
        </div>

        <div className="inputGroup  col-span-2">
          <label htmlhtmlFor="permanent_address" className="inputLabel">
            Permanent_address
          </label>
          <textarea
            id="permanent_address"
            className="inputField"
            {...register("permanent_address")}
          ></textarea>
        </div>

        <div className="inputGroup">
          <label className="inputLabel required">Gender</label>
          <div className="flex items-center gap-5">
            <div>
              <input
                type="radio"
                value="male"
                id="male"
                {...register("status")}
                name="gender"
                className="radioInput"
              />
              <label htmlhtmlFor="male" className="radioLabel">
                Male
              </label>
            </div>

            <div>
              <input
                type="radio"
                id="female"
                value="female"
                {...register("gender")}
                name="gender"
                className="radioInput"
              />
              <label htmlhtmlFor="female" className="radioLabel">
                Female
              </label>
            </div>
          </div>
          <ErrorMessage
            errors={errors}
            name={"gender"}
            render={(m) => <p className="text-red-500 text-sm">{m.message}</p>}
          />
        </div>

        <div className="inputGroup">
          <label htmlhtmlFor="basic_salary" className="inputLabel">
            Basic Salary
          </label>
          <input
            type="number"
            id="basic_salary"
            className="inputField"
            {...register("basic_salary", { valueAsNumber: true })}
          />
          <ErrorMessage
            errors={errors}
            name={"basic_salary"}
            render={(m) => <p className="text-red-500 text-sm">{m.message}</p>}
          />
        </div>

        <div className="inputGroup">
          <label htmlhtmlFor="overtime_rate" className="inputLabel">
            Overtime Rate
          </label>
          <input
            type="number"
            id="overtime_rate"
            className="inputField"
            {...register("overtime_rate", { valueAsNumber: true })}
          />
          <ErrorMessage
            errors={errors}
            name={"overtime_rate"}
            render={(m) => <p className="text-red-500 text-sm">{m.message}</p>}
          />
        </div>

        <div className="inputGroup">
          <label htmlhtmlFor="image" className="inputLabel">
            Image
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
      </div>

      <div className="flex items-center gap-2 justify-end">
        <Link href="/employee" className="inputBtn cancel">
          Cancel
        </Link>
        <button type="submit" className="inputBtn">
          Update
        </button>
      </div>
    </form>
  );
};

export default EditEmployeeForm;
