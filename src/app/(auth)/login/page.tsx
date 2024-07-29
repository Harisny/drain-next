import AuthLayout from "@/components/fragments/AuthLayout";
import LoginForm from "@/components/fragments/LoginForm";
import Link from "next/link";

const LoginPage: React.FC = () => {
  return (
    <AuthLayout title="Drain Tech - Login">
      <LoginForm />
      <div className="mt-4 text-center">
        <p>
          Don't have an account?{" "}
          <Link
            href="/register"
            className="text-indigo-600 hover:text-indigo-500"
          >
            Register
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;
