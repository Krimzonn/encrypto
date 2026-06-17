import Navbar from "../components/Navbar";
import Herocard from "../components/Herocard";
import EnterButton from "../components/EnterButton";
import HowItWorks from "../components/HowItWorks";

function Home() {
  return (
    <>
      <Navbar />
      <Herocard />
      <EnterButton to="/ciphers" />
      <HowItWorks />
    </>
  );
}

export default Home;
