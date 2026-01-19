import Footer from "@/components/Footer";
import Header from "@/app/events/components/Header";
import Event2 from "../components/Event2";

const page = () => {
  return (
    <main className="flex flex-col items-center px-4 overflow-hidden">
      <Header />
      <Event2 />
      <Footer />
    </main>
  );
};

export default page;
