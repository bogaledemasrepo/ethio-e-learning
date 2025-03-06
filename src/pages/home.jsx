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
          <CustomButton title="Get started" />
        </div>
      </main>
    </Rapper>
  );
}

export default Home;
