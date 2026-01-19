import Footer from "@/components/Footer";
import Header from "@/app/events/components/Header";
import ThinkTankTussle from "../components/Event6";

const page = () => {
  return (
    <main className="flex flex-col items-center px-4 overflow-hidden">
      <Header />
      <ThinkTankTussle />
      <Footer />
    </main>
  );
};

export default page;
