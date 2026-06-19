import Navbar from "../components/Navbar";
import Herocard from "../components/Herocard";
import EnterButton from "../components/EnterButton";
import HowItWorks from "../components/HowItWorks";
import PageWrapper from "../components/PageWrapper";
import FadeIn from "../components/FadeIn";

function Home() {
  return (
    <>
      <PageWrapper>
        <FadeIn delay={0.1}>
          <Navbar />
        </FadeIn>
        <FadeIn delay={0.2}>
          <Herocard />
          <EnterButton to="/ciphers" />
        </FadeIn>
        <FadeIn delay={0.3}>
          <HowItWorks />
        </FadeIn>
      </PageWrapper>
    </>
  );
}

export default Home;
