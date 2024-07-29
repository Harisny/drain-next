import AuthLayout from "@/components/fragments/AuthLayout";
import RegisterForm from "@/components/fragments/RegisterForm";
import Link from "next/link";

const RegisterPage: React.FC = () => {
  return (
    <AuthLayout title="Drain Tech - Register">
      <RegisterForm />
      <div className="mt-4 text-center">
        <p>
          Already have an account?{" "}
          <Link href="/login" className="text-indigo-600 hover:text-indigo-500">
            Login
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default RegisterPage;
