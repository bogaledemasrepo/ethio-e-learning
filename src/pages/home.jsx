import { Link } from "react-router";
import CustomButton from "../components/CustomButton";
import Rapper from "../components/Rapper";

function Home() {
  return (
    <Rapper>
      {" "}
      <main className="w-full min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-4xl text-white font-bold text-center">
            Wellcome to Ethio E-Learining
          </h1>
          <Link to={"/login"}>
            <CustomButton title="Get started" />
          </Link>
        </div>
      </main>
    </Rapper>
  );
}

export default Home;
