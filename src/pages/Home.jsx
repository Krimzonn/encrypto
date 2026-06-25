import Navbar from "../components/Navbar";
import Herocard from "../components/Herocard";
import EnterButton from "../components/EnterButton";
import HowItWorks from "../components/HowItWorks";
import PageWrapper from "../components/PageWrapper";
import FadeIn from "../components/FadeIn";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <PageWrapper>
        <FadeIn delay={0.1}>
          <Navbar />
        </FadeIn>
        <FadeIn delay={0.2}>
          <Herocard />
          <EnterButton to="/ciphers" />
          <FadeIn delay={0.25}>
            <div className="flex justify-center pb-8">
              <button
                onClick={() => navigate("/daily")}
                className="text-sm font-bold text-rw/50 hover:text-rw border border-rw/20 hover:border-rw/40 rounded-md px-6 py-2 transition-colors tracking-widest uppercase"
              >
                Daily Challenge
              </button>
            </div>
          </FadeIn>
        </FadeIn>
        <FadeIn delay={0.3}>
          <HowItWorks />
        </FadeIn>
      </PageWrapper>
    </>
  );
}

export default Home;
