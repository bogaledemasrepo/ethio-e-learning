// import { useNavigate } from "react-router";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import Rapper from "../components/Rapper";

function Registration() {
  // const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Pass");
    // navigate("/register");
    console.log(new FormData(e.target));
  };
  return (
    <Rapper>
      <form className="flex-1" onSubmit={submitHandler}>
        <main className="w-full min-h-screen flex items-center justify-center">
          <div className="w-full sm:w-lg m-[10%] sm:m-auto bg-[#fff]/80 rounded-md p-4 space-y-2">
            <h1 className="text-2xl font-semibold text-slate-600 my-2">
              Register student to Ethio E-Learning
            </h1>
            <CustomInput
              label="Full name"
              placeholder="Jhon Dewi"
              type="text"
              name="fullname"
              isRequired={true}
            />
            <CustomInput
              label="Email"
              placeholder="jhondewi@gmail.com"
              type="text"
              name="email"
              isRequired={true}
            />
            <div className="flex gap-2">
              <CustomInput
                label="Gender"
                type="text"
                className="flex-1"
                name="gender"
                isRequired={true}
              />
              <CustomInput
                label="Birth Date"
                placeholder="Jhon Dewi"
                type="date"
                className="flex-1"
                name="birthdate"
                isRequired={true}
              />
            </div>
            <CustomButton
              className="w-full my-2"
              title="Register"
              type="submit"
            />
          </div>
        </main>
      </form>
    </Rapper>
  );
}

export default Registration;
