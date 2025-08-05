import Image from "next/image";
import About from "./components/about";
import Socials from "./components/socials";
import Header from "./components/header";

export default function Home() {
  return (
    <>
    <main>
      <Header />
      <About />
      <Socials />
      
      
    </main>
    </>
  );
}
