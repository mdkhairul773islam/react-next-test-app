"use client";
// Import Dependencies
import { useForm } from "react-hook-form";
import validationSchema from "./validationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "@hookform/error-message";
import ForgotPassword from "./ForgotPassword";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const handleOnSubmit = async (data) => {
    //alert(JSON.stringify(data, null, 2));
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const response = await axios.post(`${apiUrl}/auth/login`, data);
      console.log("response", response);
      if (response.status == 200) {
        const token = response.data.token;
        Cookies.set("token", token, { expires: 0.5, path: "/", secure: true }); // Secure flag for HTTPS
        //const isTokenValid = await verifyToken(token);
        //setMessage('User login successfully.');
        console.log("User login successfully.");
        if (token) {
          router.push("/");
        } else {
          //setError('Invalid token.');
          console.log("error 1");
        }
      }
    } catch (error) {
      if (error) {
        //setError('Invalid email or password.');
        console.log("error", error);
      } else {
        //setError('An unknown error occurred.');
        console.log("An unknown error occurre");
      }
    } finally {
      // setLoading(false);
    }
  };
  return (
    <form className="space-y-6" onSubmit={handleSubmit(handleOnSubmit)}>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Email address
        </label>
        <div className="mt-2">
          <input
            id="email"
            name="email"
            type="email"
            value="mdkhairul773@gmail.com"
            autoComplete="email"
            {...register("email")}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <ErrorMessage
            errors={errors}
            name={"email"}
            render={(m) => <p className="text-red-500 text-sm">{m.message}</p>}
          />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Password
          </label>
          <ForgotPassword />
        </div>
        <div className="mt-2">
          <input
            id="password"
            name="password"
            type="password"
            value="mdkhairul773"
            autoComplete="current-password"
            {...register("password")}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <ErrorMessage
            errors={errors}
            name={"password"}
            render={(m) => <p className="text-red-500 text-sm">{m.message}</p>}
          />
        </div>
      </div>

      <div>
        <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Sign in
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
