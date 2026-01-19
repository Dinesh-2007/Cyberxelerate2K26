import Footer from "@/components/Footer";
import Header from "@/app/events/components/Header";
import TechMemeAThon from "../components/Event4";

const page = () => {
  return (
    <main className="flex flex-col items-center px-4 overflow-hidden">
      <Header />
      <TechMemeAThon />
      <Footer />
    </main>
  );
};

export default page;
