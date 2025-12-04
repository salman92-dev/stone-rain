import Image from "next/image";
import Header from "./components/header";
import About from "./components/about";
import Slide from "./components/slide";
import Tokenomics from "./components/Tokenomics";
import Roadmap from "./components/Roadmap";
import JoinCommunity from "./components/join";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div className="font-sans overflow-hidden">
      <Header/>
      <About />
      <Slide />
      <Tokenomics/>
      <Roadmap/>
      <JoinCommunity/>
      <Footer/>
    </div>
  );
}
