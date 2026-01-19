import Footer from "@/components/Footer";
import Header from "@/app/events/components/Header";
import PromptXtreme from "../components/Event5";

const page = () => {
  return (
    <main className="flex flex-col items-center px-4 overflow-hidden">
      <Header />
      <PromptXtreme />
      <Footer />
    </main>
  );
};

export default page;
