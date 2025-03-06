import { useNavigate } from "react-router";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import Rapper from "../components/Rapper";

function Login() {
  const navigate = useNavigate();
  const loginHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    if (formData.get("email") && formData.get("password")) {
      navigate("/students");
    }
  };
  return (
    <Rapper>
      <main className="w-full min-h-screen flex items-center justify-center">
        <form onSubmit={loginHandler}>
          <div className="w-full sm:w-lg m-[10%] sm:m-auto bg-[#fff]/80 rounded-md p-4 space-y-2">
            <h1 className="text-2xl font-semibold text-slate-600 my-2">
              Log in to Ethio E-Learning
            </h1>
            <CustomInput
              label="User email"
              placeholder="jhondewi@gmail.com"
              type="email"
              name="email"
              isRequired={true}
            />
            <CustomInput
              label="Password"
              placeholder="Jhon Dewi"
              type="password"
              name="password"
              isRequired={true}
            />
            <CustomButton className="w-full my-2" title="Login" type="submit" />
          </div>
        </form>
      </main>
    </Rapper>
  );
}

export default Login;
