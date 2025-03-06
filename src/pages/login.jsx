import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import Rapper from "../components/Rapper";

function Login() {
  return (
    <Rapper>
      <main className="w-full min-h-screen flex items-center justify-center">
        <div className="w-full sm:w-lg m-[10%] sm:m-auto bg-[#fff]/80 rounded-md p-4 space-y-2">
          <h1 className="text-2xl font-semibold text-slate-600 my-2">
            Log in to Ethio E-Learning
          </h1>
          <CustomInput label="User name" placeholder="Jhon Dewi" type="text" />
          <CustomInput
            label="Password"
            placeholder="Jhon Dewi"
            type="password"
          />
          <CustomButton className="w-full my-2" title="Login" />
        </div>
      </main>
    </Rapper>
  );
}

export default Login;
