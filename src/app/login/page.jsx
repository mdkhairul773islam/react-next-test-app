import LoginForm from "@/components/auth/LoginForm";
import { IoLogoModelS } from "react-icons/io";

const LoginPage = () => {
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="flex gap-x-4 items-center  justify-center">
          <div className={`bg-primary p-2 rounded-sm text-white`}>
            <IoLogoModelS />
          </div>
          <span className={`text-black font-bold text-xl duration-200`}>
            BlueCar
          </span>
        </div>
        <h2 className="mt-7 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>
      <div className="mt-6 shadow-lg p-10 sm:mx-auto sm:w-full sm:max-w-md">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
