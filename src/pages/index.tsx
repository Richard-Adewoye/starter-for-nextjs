import Head from "next/head";
import NavBar from "../components/Navbar";
import SectionOne from "../components/SectionOne";
import SectionTwo from "../components/SectionTwo";
import SectionThree from "../components/SectionThree"; 
import SectionFour from "../components/SectionFour";
import Footer from "../components/Footer";
import Chatbot from "../components/Chatbot";

export default function Home() {
  return (
    <>
      <Head>
        <title>T B</title>
        <meta name="description" content="The official site of T B" />
      </Head>

      <main className="relative">
        <NavBar />
        <SectionOne />
        <SectionTwo />
        <SectionFour />
        <SectionThree />
        
        {/* ✅ Only keep Chatbot here */}
        <Chatbot/>

        <Footer />
      </main>
    </>
  );
}
