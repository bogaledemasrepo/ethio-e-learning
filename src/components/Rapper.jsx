/* eslint-disable react/prop-types */
import Footer from "./Footer";
import Header from "./Header";

function Rapper(props) {
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-[url('./images/schoolbg.jpg')] bg-cover bg-center overflow-scroll">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}

export default Rapper;
