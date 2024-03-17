import Link from "next/link";
const ForgotPassword = () => {
    return (
        <div className="text-sm">
            <Link
                href="/forget"
                className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
                Forgot password?
            </Link>
        </div>
    );
};

export default ForgotPassword;
