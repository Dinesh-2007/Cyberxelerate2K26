import Footer from "@/components/Footer";
import Header from "./components/Header";
import Events from "./components/Events";

const page = () => {
  return (
    <main className="flex flex-col items-center px-4 overflow-hidden">
      <Header />
      <Events />
      <Footer />
    </main>
  );
};

export default page;
